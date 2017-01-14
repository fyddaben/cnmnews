var CACHE_VERSION = 1.3;
var CURRENT_CACHES = {
  prefetch: 'cache-v' + CACHE_VERSION
};
var urlsToPrefetch = [
  'index.html',
  'http://127.0.0.1:8081/jsmin/index_4c88f116.js',
  'http://127.0.0.1:8081/jsmin/vendor.js',
];

self.addEventListener('install', function(event) {
  var now = Date.now();
  // All of these logging statements should be visible via the "Inspect" interface
  // for the relevant SW accessed via chrome://serviceworker-internals
  console.log('Handling install event. Resources to prefetch:', urlsToPrefetch);

  event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
      var cachePromises = urlsToPrefetch.map(function(urlToPrefetch) {

        var url = new URL(urlToPrefetch, location.href);

        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;

        var request = new Request(url, {mode: 'no-cors'});
        return fetch(request).then(function(response) {
          if (response.status >= 400) {
            throw new Error('request for ' + urlToPrefetch +
              ' failed with status ' + response.statusText);
          }

          return cache.put(urlToPrefetch, response);
        }).catch(function(error) {
          console.error('Not caching ' + urlToPrefetch + ' due to ' + error);
        });
      });

      return Promise.all(cachePromises).then(function() {
        console.log('Pre-fetching complete.');
      });
    }).then(function() {
      // 立即触发
      return self.skipWaiting();
    }).catch(function(error) {
      console.error('Pre-fetching failed:', error);
    })
  );
});

self.addEventListener('activate', function(event) {
  // `claim()` sets this worker as the active worker for all clients that
  // match the workers scope and triggers an `oncontrollerchange` event for
  // the clients.
  self.clients.claim();

  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {

            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var regex = /:\/\/newsapi.org\//;
        if (event.request.url.match(regex)) {
          var fetchpromise = fetch(event.request).then(function(networkresponse) {
            console.log('regex Response from network is:', networkresponse);
            cache.put(event.request, networkresponse.clone());
            return networkresponse;
          }).catch(function(error) {
            // This catch() will handle exceptions thrown from the fetch() operation.
            // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
            // It will return a normal response object that has the appropriate error code set.
            console.error('Fetching failed:', error);

            throw error;
          });
          return response || fetchpromise;
        } else {
          if (response) {
            console.log(' Found response in cache:', event.request.url);
            return response;
          }
          console.log(' No response for %s found in cache. ' +
            'About to fetch from network...', event.request.url);
          return fetch(event.request.clone()).then(function(response) {

            if (response.status < 400) {
              // (https://fetch.spec.whatwg.org/#dom-request-clone)
              cache.put(event.request, response.clone());
            }
            return response;
          });
        }

      }).catch(function(error) {
        console.error('  Read-through caching failed:', error);
        throw error;
      });
    })
  );
});
//self.addEventListener('fetch', function(event) {
//  var regex = /:\/\/newsapi.org\//;
//  // 如果是newsapi 就需要传回并更新返回值
//  if (event.request.url.match(regex)) {
//    console.log('match url',event.request.url);
//    caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
//      return cache.match(event.request).then(function(response) {
//        //这里就是总在更新当前url返回值
//        var fetchPromise = fetch(event.request).then(function(networkResponse) {
//          cache.put(event.request, networkResponse.clone());
//          return networkResponse;
//        })
//        return response || fetchPromise;
//      })
//    })
//  } else {
//    console.log('no match url',event.request.url);
//    // 否则，则返回固定缓存，没有就取
//    caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
//      return cache.match(event.request).then(function (response) {
//        console.log(response);
//        // 有的就传回，没有就去取
//        return response || fetch(event.request).then(function(response) {
//          cache.put(event.request, response.clone());
//          return response;
//        });
//      });
//    })
//  }
//
//});
