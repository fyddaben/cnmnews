#! /bin/bash
set -e

SHELL_PATH=$(cd `dirname $0`; pwd)

export PATH=/usr/local/bin:$PATH

build_local() {
     ENV=true NODE_ENV=local node bundle.js && firebase serve;
}

build_clean() {
    echo "clean no"
    rm -rf ./dist/*;
}

build_prod() {
    build_clean;
    NODE_ENV=prod webpack --config config/webpack.config.prod.js && firebase deploy;
}

cd $SHELL_PATH
MODE=${1:-"local"}
"build_${MODE}";

