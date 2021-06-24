#!/bin/sh
CONTAINERNAME="node-api"

stop() {
  old_img=$(docker ps -a | grep ${CONTAINERNAME} | awk '{print $2}')
  echo "Start stop process ${CONTAINERNAME}"
  docker stop ${CONTAINERNAME}
  docker rm ${CONTAINERNAME}
  docker rmi -f ${old_img}
  echo "Finish stop process ${CONTAINERNAME}"
}

stop