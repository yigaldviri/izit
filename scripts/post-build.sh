#!/bin/bash

echo "post build script starts"
sed -i -- 's/n\.p+\"/\"https:\/\/yigaldviri\.github\.io\/izit\//g' build/static/js/main.js
echo "post build script ends"
