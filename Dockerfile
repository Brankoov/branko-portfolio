FROM nginx:alpine

# ta bort default-konfig så vår egen används
RUN rm -rf /etc/nginx/conf.d

# lägg in vår config på rätt plats
COPY nginx.conf /etc/nginx/nginx.conf

# kopiera byggda statiska filer
COPY dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
