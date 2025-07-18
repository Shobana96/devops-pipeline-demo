FROM node:16
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node", "app.js"]

