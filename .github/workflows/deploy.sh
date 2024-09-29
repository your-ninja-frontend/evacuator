set -e
npm run build
cd dist
echo > .nojekyll
git init
git checkout -И master
git add -A
git commit -m 'deploy'
git push -f git@github.com:your-ninja-frontend/evacuator.git master:gh-pages
cd -
