FROM httpd
COPY ./dist/a1/* /usr/local/apache2/htdocs/
EXPOSE 80
CMD apachectl -D FOREGROUND