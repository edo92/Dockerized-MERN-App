# Build
FROM node:17.0.1 as builder
WORKDIR /app

COPY . ./
RUN npm install --loglevel=error
RUN npm run build


# Production
FROM node:17.0.1
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["npm", "run", "start"]