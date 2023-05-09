# Technologies
Vue 3 + TypeScript + Vite

# Steps for deployment
1. ``` yarn build ``` to build the project. Generate a dist folder with all the files.
2. ``` git add dist -f ``` to add in changes dist folder.
3. ``` git commit -m "adding dist" ``` to commit the changes.
4. ``` git subtree push --prefix dist origin gh-pages ``` to push the files in the gh-pages branch.
5. Final push in the master branch.  

