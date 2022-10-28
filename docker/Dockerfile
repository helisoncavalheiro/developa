FROM php:8.1-apache

ARG APP_NAME
ARG APP_URL
ARG DB_HOST
ARG DB_PORT
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD

RUN apt-get update -y && \
  apt-get install -y \
  libzip-dev \
  zip \
  && docker-php-ext-install zip mysqli pdo pdo_mysql

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN a2enmod rewrite headers

RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

# Add user for laravel application
RUN useradd -u 1000 -ms /bin/bash -g www-data www

WORKDIR /var/www/html

COPY --chown=www:www-data . .

RUN echo "APP_NAME='${APP_NAME}'" >> .env && \
echo "APP_ENV=production" >> .env && \
echo "APP_KEY=" >> .env && \
echo "APP_DEBUG=false" >> .env && \
echo "APP_URL='${APP_URL}'" >> .env && \
echo "LOG_CHANNEL=stack" >> .env && \
echo "LOG_DEPRECATIONS_CHANNEL=null" >> .env && \
echo "LOG_LEVEL=debug" >> .env && \
echo "DB_CONNECTION=mysql" >> .env && \
echo "DB_HOST='${DB_HOST}'" >> .env && \
echo "DB_PORT='${DB_PORT}'" >> .env && \
echo "DB_DATABASE='${DB_DATABASE}'" >> .env && \
echo "DB_USERNAME='${DB_USERNAME}'" >> .env && \
echo "DB_PASSWORD='${DB_PASSWORD}'" >> .env

RUN php composer.phar install --optimize-autoloader --no-dev

RUN php artisan key:generate

#RUN php artisan config:cache

RUN php artisan route:cache

RUN php artisan view:cache

RUN chown www:www-data /var/www/
RUN chmod 755 /var/www/html
RUN find . -type d -exec chmod 755 {} \;
RUN find . -type f -exec chmod 644 {} \;

# Change current user to www
USER www
