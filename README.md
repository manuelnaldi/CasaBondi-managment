# Technologies
Vue 3 + TypeScript + Vite

# Steps for deployment
1. ``` yarn build ``` to build the project. Generate a dist folder with all the files.
2. ``` yarn deploy ``` to copy index.html to 404.html.
3. ``` git add dist -f ``` to add in staged dist folder.
4. ``` git commit -m "adding dist" ``` to commit the changes.
5. ``` git subtree push --prefix dist origin gh-pages ``` to push the files in the gh-pages branch.
6. Final ``` push ``` in the master branch.  

