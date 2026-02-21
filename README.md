# Andrei Nemeti – Portfolio (Eleventy + Nunjucks + Sass)

This is the modernized version of my 2018 personal portfolio site.  
The goal was not to redesign it visually or add more functionality, but to keep the original look, while modernizing the implementation using a proper static site generator, templates, and a real CSS architecture.


-----------------------------------------------------------------
## Requirements
-----------------
- Node.js 18+  
- npm


## CONFIGURE PROJECT
-----------------
1. `npm install`
2. `npm install @11ty/eleventy sass --save-dev`
3. `npm install npm-run-all --save-dev` - tiny helper package called npm-run-all to run multiple scripts in sequence or in parallel 


## START PROJECT
-----------------
1. Start `npm run dev`
2. Open `http://localhost:8080/`


## BUILD 
-----------------
1. `npm run build`


**Output:**
- Static site in root folder (index.html and assets folder)
- Final static site will be in dist/ (ready for Netlify, GitHub Pages, FTP, etc.).

## DEPLOY
- Just copy index.html and assets folder 
