#!/bin/bash

apt-get update -y

apt-get install -y docker.io

apt-get install -y amazon-cloudwatch-agent

systemctl start docker

systemctl enable docker

systemctl enable amazon-cloudwatch-agent

usermod -aG docker ubuntu

docker pull thivin33/northpeak-website:latest

docker run -d -p 80:80 --name northpeak thivin33/northpeak-website:latest
