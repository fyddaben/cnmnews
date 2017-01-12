#! /bin/bash
set -e

build_local() {
  firebase serve -p 5000 &
  NODE_ENV=local node bundle.js
}

build_clean() {
  echo "clean dist dir ..."
  rm -rf ./dist/*;
}

build_prod() {
    build_clean;
    NODE_ENV=prod webpack --config config/webpack.config.prod.js
}

MODE=${1:-"local"}
"build_${MODE}"

