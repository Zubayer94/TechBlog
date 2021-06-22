# TechBlog

A blog simple web application using ReactJS as a frontend Javascript Framework. Developed API using PHP Laravel framework with MySQL database to pass data front to back.

## Built With

<a href='//laravel.com' align="left"><img width='300px' src="https://camo.githubusercontent.com/5ceadc94fd40688144b193fd8ece2b805d79ca9b/68747470733a2f2f6c61726176656c2e636f6d2f6173736574732f696d672f636f6d706f6e656e74732f6c6f676f2d6c61726176656c2e737667"></a>

<a href='//reactjs.org/' align="left"><img width='100px' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></a>

<!-- <img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" /> -->

## Install and Run

-   clone project .
-   install composer dependencies using `composer install` (of course you need, php and composer .
-   create `.env` file by copying from `.env.example` .
-   run `php artisan key:generate` command, this will get APP_KEY in `.env` file .
-   create database and fill information in `.env' file .
-   now run migrations for creating table `php artisan migrate` .
-   run `php artisan passport:install` for generating access tokens.
-   Now run `php artisan db:seed`, for seeding data to the database.
-   Now run `php artisan optimize:clear`.
-   Finallyrun `npm run dev` which will run your app on local server.
-   That's It, You can modify and create a pull request, Thanks.
