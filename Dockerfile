# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /usr/src/MyApp

# Copia los archivos de la aplicación al contenedor
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Expone el puerto en el que la aplicación se ejecuta
EXPOSE 3000

# Define el comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "index.js"]
