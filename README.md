

docker ps -- PEGA O NOME DO CONTAINER
docker exec -it mysql-teste1 bash -- conecta ao docker
// ao rodar o docker com o container do mysql é nessário verificar o ip no mysql através do container
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' NOME DO CONTAINER  -- VERIFICAR O IP
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123 -d mysql:8 mysqld
CREATE DATABASE user_management;
USE user_management;
CREATE USER 'user_management'@'%' IDENTIFIED BY '123';
GRANT ALL PRIVILEGES ON user_management.* TO 'user_management'@'%';






//  docker run -p 3306:3306 --name mysql_container -e MYSQL_ROOT_PASSWORD=senha mysql:latest