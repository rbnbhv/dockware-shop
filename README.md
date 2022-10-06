## documentation how to set up a shopware 6 shop with dockware

### First steps
- Create docker-compose.yml
- Start the container with ```docker-compose up -d```
- Set up the SFTP Container
  - in PhpStorm under Tools --> deployment 
  - set SSH [default credentials](https://docs.dockware.io/use-dockware/default-credentials)
- set up .env inside the container if you want to change the URL
- Log into docker-container with ```docker exec -it dockware-shop bash```
- If you want to change the localhost URL
  - add entry in /etc/hosts
  - ```127.0.0.1 newURL.de``` and add the new URL to .env
- Copy the structure from the container with ```docker cp dockware-shop:/var/www/html .```
- Connect the database (MySQL)

### Watcher commands
```docker exec -it dockware-shop bash && cd /var/www && make watch-storefront```
or after you customized your makefile ```make watch```

### Hints
The dockware setup offers a few benefits: ```docker logs dockware-shop```
- Mailcatcher: http://localhost/mailcatcher
- Adminer: http://localhost/adminer.php
- Logs: http://localhost/logs
- Download makefile from /var/www inside the container and add:
``` 
# ---------------------------------------------------------------------------------------------
watch: ## starts watcher for storefront at http://localhost
@echo "RequestHeader add hot-reload-mode 1\n"\
"RequestHeader add hot-reload-port 9999" > /var/www/html/.htaccess.watch
cd /var/www/html && ./bin/build-storefront.sh
cd /var/www/html && php bin/console theme:dump
cd /var/www/html && ./bin/watch-storefront.sh

stop watcher: ## Reverts everything back to normal operation
@rm -rf /var/www/html/.htaccess.watch

docker exec: ## connects to docker container
docker exec -it dockware-shop bash
 ```

- Advantages of watcher: the watcher continuous compiles in the background and you dont need to run ```bin/build-storefront.sh```

### create and install your custom plugin
```
bin/console plugin:create "<PluginName>"
bin/console plugin:refresh
```
#### Hint: no symbols, spaces or small letters && "Reply" at the beginning
- download from the container via right-click on the plugin folder
- the plugin is now in the custom->plugin locally 
- move the plugin (locally) to static-plugins 
- the Automatic Upload in the deployment tool will automatically upload the plugin to the static folder in the container 
- add a version to the plugin's composer.json after "type:..."
- require the plugin in the container with```composer require "swag/redirect-product-unavailable"```
- make sure that your plugin is now noticed inside the composer.json and composer.lock
- now you can install the plugin with ```bin/console plugin:install <PluginName> --activate```

## xDebug
