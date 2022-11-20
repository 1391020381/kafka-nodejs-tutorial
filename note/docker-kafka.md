
* [Docker环境下Kafka的安装启动与消息发送](https://blog.csdn.net/noaman_wgs/article/details/103672808)

# 安装
* docker search kafka和docker search zookeeper

* docker pull wurstmeister/zookeeper  docker pull wurstmeister/kafka  

# 启动
1. docker run -d --name zookeeper -p 2181:2181 -t wurstmeister/zookeeper
2. docker run -d --name kafka -p 9092:9092 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=192.168.0.100:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.0.100:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 -t wurstmeister/kafka

3. 192.168.0.101

# 验证是否启动成功
* docker ps -a 


# 在 docker中 Kafka消息生产和发送

1. kafka
* 进入kafka容器
    - docker exec -it 629c0f149e27 /bin/bash
* 进入Kakfa bin 目录
    - cd /opt/kafka_2.12-2.4.0/bin
* 创建生产者 
    - kafka-topics.sh --create --zookeeper 192.168.0.101:2181 --replication-factor 1 --partitions 1 --topic TestTopicForDocker
* 查看topic 
    - kafka-topics.sh --zookeeper 192.168.0.100:2181 --list
* bin目录 运行生产者 
    - kafka-console-producer.sh --broker-list 192.168.0.101:9092 --topic TestTopicForDocker
* bin目录 运行消费者
    - docker exec -it 629c0f149e27 /bin/bash
    - cd /opt/kafka_2.13-2.8.1/bin
    - kafka-console-consumer.sh --bootstrap-server 192.168.0.101:9092 --topic TestTopicForDocker --from-beginning



* [Microservices with NodeJs Using NestJs and Apache Kafka](https://abhayahire.medium.com/microservices-with-nodejs-using-nestjs-apache-kafka-5f7ce3292b60)
* https://github.com/abhay-321/nestjs-microservices/tree/feature/message-broker-kafka

* http://localhost:3060/users/4