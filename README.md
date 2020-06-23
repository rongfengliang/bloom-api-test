# openresty+bloom for api cache

> add api call learning


## How to Running

* touch log file

```code
touch access_test.log access_test2.log
```

* start service

```code
docker-compose up -d
```

* user api control cache

> for clean `/userdemo` request 

```code
cd api && yarn && yarn start  
```