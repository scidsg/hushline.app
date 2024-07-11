#!/bin/bash
envsubst '$ONION_HOSTNAME $APP_HOSTNAME' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"
