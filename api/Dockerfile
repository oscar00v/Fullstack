#Cea imagen basada en Node.js
FROM node:20-alpine3.21
# Establece el directorio de trabajo
WORKDIR /api
#Copia nuestro codigo dentro de la imagen
# No se copia node_modules ni package-lock.json para que se insalen las dependencias segun el OS de la imagen
COPY package.json package-lock.json ./
#Instala las dependencias 
RUN npm install
COPY . .
#exponer el puerto 8080
EXPOSE 8080

#Este comando se usa para levantar los contenedors basados en esta imagen
CMD ["npm", "run", "dev"]