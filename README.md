## Installation process.

The following process will be used to install admin dashboard with Laravel
1. Server Requirements: https://laravel.com/docs/9.x/deployment#server-requirements

2. Install php package manager Composer : Please install latest version of composer from https://getcomposer.org
3. Clone repository
4. Install PHP dependencies: Run `composer install`.
5. Create new `.env` file from copying `.env.example` and setup.
6. Create database & Change `DB_DATABASE` in `.env`.
7. Migrate the Database `php artisan migrate`.
8. Run `php artisan key:generate`
9. Run `php artisan db:seed` (This will generate basic settings).
10. Install node dependencies: `npm install`
11. Run command `npm run watch` to start vue js development.
12. Run command `php artisan serve` to start php server which will run laravel or if you are using other server apps like WAMP, XAMP or MAMP, you can follow that guide.
