# Usa una imagen base de Node.js
FROM node:20-alpine

RUN npm install -g npm@10.9.1

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Compila el proyecto si es necesario
RUN npm run build

RUN ls -l /usr/src/app/dist
# Expón el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
