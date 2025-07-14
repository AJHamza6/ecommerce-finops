# build stage
FROM node:18-alpine AS builder
WORKDIR /app

# install prod deps first
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --production

# copy source and compile
COPY . ./
RUN yarn build                          # creates dist/app.js

# runtime stage
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production \
    PORT=4000

# bring in only what we need
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4000
CMD ["node", "dist/app.js"]
