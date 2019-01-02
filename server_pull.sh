#!/bin/bash

echo Start to pull https://github.com/simonmengyu/aa-marketing.git on server ec2-18-221-173-78.us-east-2.compute.amazonaws.com

ssh deploy@ec2-18-221-173-78.us-east-2.compute.amazonaws.com 'cd apps/aa-marketing; git pull'

echo Start to pull https://github.com/simonmengyu/aa-marketing.git on server ec2-18-220-217-60.us-east-2.compute.amazonaws.com

ssh deploy@ec2-18-220-217-60.us-east-2.compute.amazonaws.com 'cd apps/aa-marketing; git pull'

