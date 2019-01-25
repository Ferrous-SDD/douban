import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/homePage';
import Home from '@/pages/home';
import Movie from '@/pages/movie';
import Book from '@/pages/book';
import Status from '@/pages/status';
import Group from '@/pages/group';
import Mine from '@/pages/mine';
import Time from '@/pages/time';
import Note from '@/pages/note';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    },
    {
      path: '/note',
      name: 'note',
      component: Note
    }
  ]
})
