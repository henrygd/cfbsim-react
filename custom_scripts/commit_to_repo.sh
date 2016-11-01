#! /bin/bash

# must run from this directory

cd ..
git add -A
git commit -m "Update ratings -- $(date)"
git push origin master