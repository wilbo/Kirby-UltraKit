# Kirby UltraKit

Kirby UltraKit is a workflow on top of the [Kirby StarterKit](https://github.com/getkirby/starterkit/tree/e9d1b84ebf8bba54693e61551dae9f3711e41aa9). Kirby-UltraKit is as much "opinionated-free" as possible. You're able to manage your own js and css libraries in whatever way you see fit.

### What's in it?

- [Gulp](http://gulpjs.com/)
- [BrowserSync](https://www.browsersync.io/)
- [Webpack](https://webpack.github.io/)
- [Babel](https://babeljs.io/)
- [jsHint](http://jshint.com/)
- [Sass](http://sass-lang.com/) + [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

Everything is handled trough Gulp. Spinning up the dev server with live-reloading, compiling  modules and ES6 into a bundle and compiling scss/sass into css. Read more below about the usage.

### Setting things up:

Make sure to setup a vhost with Mamp (or something alike) that will be serving the /**public** folder of this project root. More info on how to do this read: [Adding a virtual host in Mamp](https://medium.com/@wilbo/adding-a-virtual-host-in-mamp-for-mac-a6c717cc0475#.hz6nhm20v). It basically comes down to editing these two files (with Atom):

    $ atom /etc/hosts
    $ atom /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

After having your Mamp settings in order, edit the proxy in gulpfile.js on line 25 to match the domain you just configured.

Next up, clone the project files and install the dependencies. "--recursive" will also clone the Kirby StarterKit, however, any Kirby theme is possible to use.

    $ git clone --recursive https://github.com/wilbo/Kirby-UltraKit.git
    $ cd Kirby-UltraKit
    $ npm install

Include the javascript by adding the following line of code inside ./public/site/snippets/footer.php:

    <?php echo js('assets/js/main.js') ?>

Edit the .gitignore by removing "/public" on line 14 to track your site in git.

### Usage:

Use the following commands to start developing/build assets:

    # Build assets, BrowserSync dev server
    $ gulp

    # Build minified assets, ready for production
    $ gulp build --env production
