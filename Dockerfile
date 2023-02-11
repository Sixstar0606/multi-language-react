# build stage
FROM node:14-alpine as build-stage
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
# production stage

# FROM nginx:stable-alpine as production-stage
# RUN cp /home/ubuntu/messaging_fe/package.json /app/

#COPY  /home/ubuntu/messaging_fe/package.json /home/ubuntu/messaging_fe/public/
# RUN cp /app/build /usr/share/nginx/html
#RUN ps
#RUN kill $(docker ps -d)
#RUN buiild -t marcel
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["npm", "start"]
