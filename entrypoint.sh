#!/bin/bash
envsubst '$ONION_HOSTNAME $APP_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"
