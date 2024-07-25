#!/bin/bash

docker build -f ./deployments/tailwind-config-builder.Dockerfile -t shineyup/sy-tailwind-config-builder:$1 ./apps/clients/tailwind-config-builder
docker push shineyup/sy-tailwind-config-builder:$1