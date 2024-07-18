#!/bin/bash

docker build -f ./deployments/indoor-navigation.Dockerfile -t shineyup/shineyup-demo-indoor-navigation:$1 ./apps/clients/indoor-navigation
docker push shineyup/shineyup-demo-indoor-navigation:$1