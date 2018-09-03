FROM nginx

MAINTAINER hogesuke <miyado@gmail.com>

RUN mkdir /root/logs
RUN chmod 755 /root

RUN apt-get update
RUN apt-get install -y iputils-ping net-tools tcpdump

ADD ./templates/aws-sdk-js-trial.conf /etc/nginx/conf.d/aws-sdk-js-trial.conf
