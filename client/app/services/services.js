import angular from 'angular';
import logs from './logs';
import queries from './queries';

let serviceModule = angular.module('app.services', [])
  .service({
    logs,
    queries
  })
  .name;

export default serviceModule;
