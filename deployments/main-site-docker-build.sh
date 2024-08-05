#!/bin/bash

docker build -f ./deployments/main-site.Dockerfile -t shineyup/shineyup-showcase:$1 ./apps/clients/main-site
docker push shineyup/shineyup-showcase:$1