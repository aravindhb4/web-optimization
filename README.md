Website Performance Optimization
======================

### Overview
This is a website optimization project for Udacity FEND. The project consists of two parts,

1. **Optimize PageSpeed Insights score for index.html**
2. **Optimize Frames per Second in pizza.html**

### src and dist

The source code(before optimization) and optimized code are present in **src** and **dist** directories respectively.

### Optimization
###### index.html for Pagespeed insights
After creating a local server for index.html and tunneling it via ngrok, use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to test the page and it should achieve a minimum score of 90 for both mobile and desktop.

The optimizations made to page are,
* inline the CSS files
* use async for scripts
* minify the images and HTML


###### pizza.html for smooth FPS
To achieve smooth 60 fps scrolling in pizza.html, the following optimizations were made to **main.js** file.

* Replace querySelector() methods with getElementById() and getElementsByClassName()
* Decrease the number of pizzas from 200 to 20 in updatePositions()

### Usage of Gulp
This automated task runner was used to optimize the images and minify the HTML code.

To get started with gulp --> [Getting started with Gulp.js](https://css-tricks.com/gulp-for-beginners/)

The particular modules used in this project are,
* gulp-image-resize
* gulp-imagemin
* gulp-htmlmin


