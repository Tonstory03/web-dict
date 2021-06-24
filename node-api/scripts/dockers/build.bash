#!/bin/bash
VERSION=${2:-"$(date '+%Y.%m.%d')"}
IMG="web-dict/node-api:$VERSION"
 
start(){
    echo "####### Start Running build docker. #######"
    echo "docker build -t $IMG ."
}

build(){
  docker build -t ${IMG} --build-arg ENV=${ENV} .
  echo "####### Finish building ${IMG} #######"
} 

start
build