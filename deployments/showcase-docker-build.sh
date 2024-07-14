#!/bin/bash

docker build -f ./deployments/showcase.Dockerfile -t shineyup/shineyup-showcase:$1 ./apps/clients/showcase
docker push shineyup/shineyup-showcase:$1