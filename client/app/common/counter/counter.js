import angular from 'angular';
import uiRouter from 'angular-ui-router';
import counterComponent from './counter.component';

let counterModule = angular.module('counter', [
  uiRouter
])

.component('counter', counterComponent)

.name;

export default counterModule;
