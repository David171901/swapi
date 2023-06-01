FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY /dist /var/www/app
EXPOSE 5100
CMD ["nginx","-g","daemon off;"]