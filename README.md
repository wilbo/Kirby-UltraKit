# Kirby UltraKit

Kirby UltraKit is a workflow on top of the [Kirby StarterKit](https://github.com/getkirby/starterkit/tree/e9d1b84ebf8bba54693e61551dae9f3711e41aa9). Kirby-UltraKit is as much "opinionated-free" as possible. You're able to manage your own js and css libraries in whatever way you see fit.

### What's in it?

Gulp, Webpack, Babel, jsHint, BrowserSync, Sass, Autoprefixer and Sourcemaps. That's about it. Write ES6 in modules, all changes are live reloaded.

### Getting started:

Make sure to setup a vhost with Mamp (or something alike) that will be serving the **public** folder of this project root. More info on how to do this read: [Adding a virtual host in Mamp](https://medium.com/@wilbo/adding-a-virtual-host-in-mamp-for-mac-a6c717cc0475#.hz6nhm20v). It basically comes down to editing these two files (with Atom):

    $ atom /etc/hosts
    $ atom /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

After having your Mamp settings in order, edit the proxy in gulpfile.js on line 25 to match the domain you just configured.

Next up, clone the project files and install the dependencies, "--recursive" will also clone the Kirby StarterKit:

    $ git clone --recursive https://github.com/wilbo/Kirby-UltraKit.git
    $ cd Kirby-UltraKit
    $ npm install

Include the javascript by adding the following line of code inside ./public/site/snippets/footer.php:

    <?php echo js('assets/js/main.js') ?>

Use the following commands to start developing:

    # build assets, BrowserSync server and livereload
    $ gulp

    # build minified assets, ready for production
    $ gulp build --env production

Edit the .gitignore by removing "/public" on line 14 to track your site in git.
