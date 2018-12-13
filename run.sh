#!/bin/bash

echo Start to transfer files to server

if [ -z "$2" ]
then
      echo "second param is empty"
	var=""
else
      echo "second param is NOT empty"
	var=$2
fi

Scp -r $1 deploy@ec2-18-221-173-78.us-east-2.compute.amazonaws.com:~/apps/marketing/$var

echo finished deploy to ec2-18-221-173-78.us-east-2.compute.amazonaws.com

Scp -r $1 deploy@ec2-18-220-217-60.us-east-2.compute.amazonaws.com:~/apps/marketing/$var

echo finished deploy to ec2-18-221-173-78.us-east-2.compute.amazonaws.com

Scp -r $1 deploy@ec2-3-16-175-108.us-east-2.compute.amazonaws.com:~/apps/marketing/$var

echo finished deploy to ec2-18-221-173-78.us-east-2.compute.amazonaws.com

Scp -r $1 deploy@ec2-3-17-119-17.us-east-2.compute.amazonaws.com:~/apps/marketing/$var

echo finished deploy to ec2-18-221-173-78.us-east-2.compute.amazonaws.com
