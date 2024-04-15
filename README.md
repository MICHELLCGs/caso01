<Strong>CASO V1 DOCKER<Strong>
<h3>Crear la red</h3>
- docker network create caso1-red
<h3>Construir las imagenes</h3>
- docker build -t caso1 .
- docker build -t caso1mongo -f Dockerfile-mongo .
<h3>Desplegar Contenedores</h3>
- docker run -d -p 4000:3000 --network caso1-red --name web-caso1 caso1
- docker run -d -p 27017:27017 --name mongoaws --network caso1-red caso1mongo
