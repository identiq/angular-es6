import angular from 'angular';
import Home from './home/home';
import Logs from './logs/logs';
import Queries from './queries/queries';

let componentModule = angular.module('app.components', [
  Home,
  Logs,
  Queries
])

.name;

export default componentModule;
