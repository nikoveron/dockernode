# Utilizar una imagen base de Node.js 18 con Alpine Linux
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar los archivos necesarios
COPY package*.json ./

# Instalar dependencias de Node.js
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto 80 para Apache
EXPOSE 80

# Iniciar Apache y Node.js
CMD node index.js
