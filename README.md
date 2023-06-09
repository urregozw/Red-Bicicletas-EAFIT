# Red de Bicicletas
___
## Diagrama de Entidad - Relación
![image](https://user-images.githubusercontent.com/35272732/233900652-012b5ace-5413-48b3-9bc8-3f170a98d3db.png)
## Diagrama de Componentes
![image](https://user-images.githubusercontent.com/35272732/233901942-9b808efd-5821-42a0-8075-688667d74826.png)
## Diagrama de Contexto
![image](https://user-images.githubusercontent.com/35272732/234348820-886ae86b-67a3-4890-af90-03227cd50a98.png)
## Diagrama de Secuencias
![image](https://user-images.githubusercontent.com/35272732/234418665-d8e23d2c-3449-427f-856c-5461b36926ef.png)
## Diagrama de Despliegue
![image](https://user-images.githubusercontent.com/35272732/234423826-66f39262-40a3-4584-b22b-9515b2c26a26.png)

___
## Desiciones de Arquitectura
1. La cantidad de contenedores que estarán disponibles para la aplicación será de 2N + 1, teniendo la idea de que si se hace un despliegue este mismo deba tener una cantidad de contenedores impar para que tenga mejor resiliencia.
2. Si los datos dentro de la aplicación quisieran ser efímeros, las mismas memorias que ofrecen los contenedores servirían para mantener la persistencia de datos de los usuarios haciendo peticiones. Aunque, si se quiere compartir los datos entre usuarios, podríamos establecer una Base de datos (SQL o NoSQL, todo depende de como evoluciona las bicicletas en el tiempo) que almacena la información y comparta la cola de eventos por Kafka
3. Se tendra un API Gateway que servira como Bus de eventos donde se enviaran todas las peticiones que vengan desde el Front y el ya las distribuye de la forma que vea necesario 
