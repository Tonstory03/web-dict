#!/bin/bash
ENV=test
VERSION=${1:-"$(date '+%Y.%m.%d')"}
BASEDIR="$( cd "$( dirname "$0" )" && pwd )"
PORTBINDING=


/bin/bash ${BASEDIR}/run.bash ${ENV} ${VERSION} ${PORTBINDING}