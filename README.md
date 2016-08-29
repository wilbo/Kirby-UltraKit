# Kirby UltraKit

Kirby UltraKit is a workflow on top of the [Kirby StarterKit](https://github.com/getkirby/starterkit/tree/e9d1b84ebf8bba54693e61551dae9f3711e41aa9). It uses Gulp and Webpack to build the assets which are served on a local server by BrowserSync. Changes are being watched and minified assets are build for production.

This project is as much "opinionated-free" as possible. You are able to manage your own js and css libraries in whatever way you see fit.

### Getting started:

Make sure to setup a vhost with Mamp (or something alike) that will be serving the public folder of this/your project root. More info on how to do this read: [Adding a virtual host in Mamp](https://medium.com/@wilbo/adding-a-virtual-host-in-mamp-for-mac-a6c717cc0475#.hz6nhm20v). It basically comes down to editing these two files (with Atom):

    $ atom /etc/hosts
    $ atom /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

Clone the project files:

    $ git clone --recursive https://github.com/wilbo/Kirby-UltraKit.git
    $ cd Kirby-UltraKit
    $ npm install

There are just 2 gulp commands to play with. The default task will build the assets and the start BrowserSync server. All assets files are watched and compiled if changes occur. The build task will only build. Running the build task in a "production" environment will produce minified assets ready for production.

    $ gulp
    $ gulp build
    $ gulp build --env production

Include the javascript by adding the following line of code inside ./public/site/snippets/footer.php:

    <?php echo js('assets/js/main.js') ?>

Lastly, edit the .gitignore by removing "/public" on line 14 to track your site in git.
