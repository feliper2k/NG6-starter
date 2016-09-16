import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Counter from './counter/counter';

let commonModule = angular.module('app.common', [
    Navbar,
    Hero,
    User,
    Counter
])

.name;

export default commonModule;
