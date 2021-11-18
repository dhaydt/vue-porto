#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
# cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
# git add -A
git add dist && git commit -m "autodeploy"
# git commit -m 'deploy'
# git push -f git@github.com:dhaydt/vue-porto.git gh-pages
git subtree push -f --prefix dist origin gh-pages 
# cd -