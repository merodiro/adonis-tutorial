'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/about').render('about')
Route.on('/contact').render('contact')
Route.get('/', 'PostsController.index')
Route.get('posts/create', 'PostsController.create')
Route.post('posts', 'PostsController.store')
Route.get('posts/:id', 'PostsController.show')