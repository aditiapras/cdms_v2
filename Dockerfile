FROM node:18-alpine AS dependencies

WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]