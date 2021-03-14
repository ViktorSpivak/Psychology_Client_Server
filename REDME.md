starting Docker: docker-compose up --build
docker exec -i -t client ls -alF /usr/src/app
docker ps -a
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker images -a
docker rmi $(docker images -a -q)
docker volume ls
docker volume rm $(docker volume ls -f dangling=true -q)
