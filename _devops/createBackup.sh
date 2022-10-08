#!/bin/bash

ssh hostname << EOF
 rm ~/_backups/shopware-backup.tar.gz
 rm ~/_backups/backup.sql
 tar --exclude='/www/htdocs/verzeichnis_des_shops/var/log/*' --exclude='/www/htdocs/verzeichnis_des_shops/var/cache/*' --exclude='/www/htdocs/verzeichnis_des_shops/.git' -zcvf /www/htdocs/hauptverzeichnis_des_webservers/_backups/shopware-backup.tar.gz /www/htdocs/verzeichnis_des_shops/
 mysqldump -uuser -ppassword -hlocalhost --single-transaction --quick --skip-lock-tables --triggers --routines --no-tablespaces --events databasename > /www/htdocs/hauptverzeichnis_des_webservers/_backups/backup.sql
EOF
rm backup.sql
scp hostname:/www/htdocs/hauptverzeichnis_des_webservers/_backups/backup.sql .
gsed -i 's/DEFINER=[^ ]* / /g' backup.sql
gsed -i 's/:\/\/copcopet.de/:\/\/localhost/g' backup.sql
gsed -i 's/d0390873/shopware/g' backup.sql
docker exec -i containername_shop mysql -uroot -proot -hlocalhost shopware < backup.sql