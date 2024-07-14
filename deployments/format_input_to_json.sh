#!/bin/bash

# The first argument to the script is the comma-separated list of apps
apps_csv=$1

# Replace commas with "," to format as JSON array elements
apps_json="[\"${apps_csv//,/\",\"}\"]"

# Output the JSON array
echo $apps_json