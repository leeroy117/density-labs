# Usa una imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Instala un servidor estático para servir la app compilada
RUN npm install -g serve

# Expone el puerto
EXPOSE 3000

# Comando para servir la aplicación de React
CMD ["serve", "-s", "build"]