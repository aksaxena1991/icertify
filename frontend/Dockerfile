FROM node:14-alpine
LABEL version="1.0"
LABEL description="Icertify admin frontend"
LABEL maintainer=["aksaxena1991@gmail.com"]
WORKDIR /frontend/app
COPY ["package.json","./"]
RUN npm install
COPY . .
RUN npm start
EXPOSE 5678
CMD ["npm", "start","start"]