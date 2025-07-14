# build stage
FROM node:18-alpine AS builder
ARG REACT_APP_BASE_ENDPOINT=http://localhost:4000
ENV REACT_APP_BASE_ENDPOINT=$REACT_APP_BASE_ENDPOINT
WORKDIR /ui
COPY package.json yarn.lock* ./
RUN yarn install
COPY . ./
RUN yarn build        # creates /ui/build/

# runtime stage
FROM nginx:1.25-alpine
COPY --from=builder /ui/build/ /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://localhost || exit 1
