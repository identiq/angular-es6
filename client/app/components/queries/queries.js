import angular from 'angular';
import uiRouter from 'angular-ui-router';
import queriesComponent from './queries.component';

let queriesModule = angular.module('queries', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('queries', {
      url: '/queries',
      component: 'queries'
    });
})

.component('queries', queriesComponent)


.name;

export default queriesModule;
