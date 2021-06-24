#!/bin/bash
ENV=${1:-test}
VERSION=${2:-"$(date '+%Y.%m.%d')"}
PORTBINDING=${3:-8081}
IMG="web-dict/node-api:$VERSION"
CONTAINERNAME="node-api"
 
 


start(){
    echo "####### Start Running run docker. #######"
    echo "docker run -dp $PORTBINDING -e NODE_ENV=${ENV} --name ${CONTAINERNAME} ${IMG}"
}

stop() {
  echo "Start stop process ${CONTAINERNAME}"
  docker stop ${CONTAINERNAME}
  docker rm ${CONTAINERNAME}
  echo "Finish stop process ${CONTAINERNAME}"
}

wait (){
    sleep 3
}


run(){
  docker run -dp $PORTBINDING -e NODE_ENV=${ENV} --name ${CONTAINERNAME} ${IMG}
  echo "####### Finish runing ${IMG} #######"
} 

stop
wait
start
run