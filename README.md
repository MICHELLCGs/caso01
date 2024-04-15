CASO V1 DOCKER
Crear la red
- docker network create caso1-red
Construir las imagenes
- docker build -t caso1 .
- docker build -t caso1mongo -f Dockerfile-mongo .
Desplegar Contenedores
- docker run -d -p 4000:3000 --network caso1-red --name web-caso1 caso1
- docker run -d -p 27017:27017 --name mongoaws --network caso1-red caso1mongo
