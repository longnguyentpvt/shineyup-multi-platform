#!/bin/bash

ssh staging 'cd /home/ubuntu/shineyup/showcase-app && sudo docker compose stop && sudo docker compose down --rmi all'
ssh staging 'cd /home/ubuntu/shineyup/showcase-app && sudo docker compose pull && sudo docker compose up --no-start && sudo docker compose start'