# FROM node:14.21
# # FROM node:14.21-alpine3.16 as build
# WORKDIR /app
# COPY package*.json ./

# # Instalar dependencias
# # RUN npm ci
# RUN npm install
# COPY . .

# EXPOSE 4200


# CMD [ "npm", "run", "start"]
# # RUN npm run build

# # Parte 2: Empaquetar la aplicación en una imagen Nginx
# # FROM nginx:1.21-alpine
# # COPY --from=build /app/dist/redbici-front /usr/share/nginx/html

# # En caso de tener alguna configuracion copiarla (defecto: port 80)
# # COPY nginx.conf /etc/nginx/conf.d/default.conf


#Primera Etapa
FROM node:14.21-alpine3.16 as build-step

WORKDIR  /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build --prod

#Segunda Etapa
FROM nginx:latest
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step /usr/local/app/dist/redbici-front /usr/share/nginx/html