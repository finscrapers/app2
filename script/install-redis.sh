#!/bin/bash

wget http://download.redis.io/releases/redis-5.0.3.tar.gz
tar xzf redis-5.0.3.tar.gz
cd redis-5.0.3
make
cd ..
rm redis-5.0.3.tar.gz
rm -r redis-5.0.3
