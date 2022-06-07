FROM node:14-alpine
LABEL version="1.0"
LABEL description="Icertify admin backend"
LABEL maintainer=["aksaxena1991@gmail.com"]
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run dev
EXPOSE 3000
CMD [ "npm","install","dev","run" ]
