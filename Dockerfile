FROM nginx:bookworm

# Install updates and dependencies
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
    gettext-base \
    && rm -rf /var/lib/apt/lists/*

# Prioritize IPv4 over IPv6
RUN echo "precedence ::ffff:0:0/96  100" >> /etc/gai.conf

COPY src /usr/share/nginx/html

COPY default.conf.template /etc/nginx/conf.d/default.conf.template

EXPOSE 80

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]