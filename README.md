# SoftwareSeni 3.0
Staging site for SoftwareSeni 3.0 development

## Installation
* `git clone https://github.com/SoftwareSeniPT/softwareseni.git` or
* Download the repo and unzip to your local server

### Using Codekit
* Import the installation folder
* Profit!

### Using Grunt
* Run `cd <installation folder path>`
* Run `npm install` to install grunt depedencies if you're willing to use Grunt
* Run `grunt`. Grunt will watch the file everytime has changes
* Server available at `http://localhost:9001` (Live reload not implemented yet)

## Editing file
### Editing HTML
* All HTML is compiled from folder `/kit`, so edit `.kit` file on `/kit` folder instead.
* Codekit or grunt will automatically watch for changes and compile it.
* Variables available on folder `__config__`. Put variable like `siteName`, `siteDescription`, `pageTitle` there.
* Partial files available at `__partial__` folder. Put your header, footer, sidebar, or any reusable component there.

### Editing CSS
* All CSS is compiled from folder `/sass`, so edit `.scss` file on `/sass` folder instead.
* Codekit or grunt will automatically watch for changes and compile it to `/css` folder
