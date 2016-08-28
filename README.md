# Kirby UltraKit

Kirby UltraKit is a workflow on top of the Kirby StarterKit. It uses Gulp and Webpack to build the assets which are served on a local server by BrowserSync. Minified assets are build for production.

### getting started:

Make sure to setup a vhost with Mamp (or something alike) that will be serving the public folder of this/your project root. More info on how to do this read: [Adding a virtual host in Mamp](https://medium.com/@wilbo/adding-a-virtual-host-in-mamp-for-mac-a6c717cc0475#.hz6nhm20v).

In your terminal type:
  
    $ git clone --recursive https://github.com/wilbo/Kirby-UltraKit.git
    $ cd Kirby-UltraKit && npm install

Include the javascript by adding the following line of code inside ./public/site/snippets/footer.php:

    <?php echo js('assets/js/main.js') ?>
    
There are just 2 gulp commands to play with. The default task will build the assets and the start BrowserSync server. All assets files are watched and compiled if changes occur. The build task will only build. Running the build task with a "production" environment will produce minified assets ready for production.

    $ gulp
    $ gulp build
    $ gulp build --env production

