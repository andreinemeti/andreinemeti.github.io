# Andrei Nemeti – Portfolio (Eleventy + Nunjucks + Sass)

This is the modernized version of my 2018 personal portfolio site.  
The goal was **not** to redesign it visually or add more functionality, but to keep the original look, while modernizing the implementation using a proper static site generator, templates, and a real CSS architecture.



## Tech Stack & Justification

### Eleventy (11ty)

- **What it is:** A simple, file-based static site generator.
- **Why it fits this project:**
  - Perfect for a **static portfolio**: no backend, no database, no runtime dependencies in production.
  - Lets me keep **full control over the HTML** – ideal since I wanted to preserve the exact original layout and structure.
  - Easy to deploy anywhere (GitHub Pages, Netlify, static hosting) because the output is plain HTML/CSS/JS.

### Nunjucks (`.njk` templates)

- **What it is:** A logic-capable templating language used by Eleventy.
- **Why I use it:**
  - Allows me to define **layouts and partials** (`header`, `footer`, `nav`, etc.), so the HTML is no longer one huge file.
  - I can **loop through data** (e.g., an array of portfolio projects) instead of copy–pasting each portfolio block.

### Sass (SCSS)

- **What it is:** A CSS preprocessor that compiles to plain CSS.
- **Why I use it:**
  - The original `style.css` has grown into a **single large file**. SCSS lets me break it into meaningful partials

### Vanilla JavaScript

- Reuses the original JS logic for:
  - Portfolio filtering
  - Mobile nav open/close
  - Smooth scrolling
  - Scroll-to-top button


-----------------------------------------------------------------
## Requirements

- Node.js 18+  
- npm


## CONFIGURE PROJECT

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
