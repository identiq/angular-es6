class logs {
  constructor ($q, $http, API_URL) {
    "ngInject";
    this._$q = $q;
    this._$http = $http;
    this._API_URL = API_URL;
  }

  getLogs() {
    let deferred = this._$q.defer();
    this._$http.get(this._API_URL + '/logs')
      .then(data => deferred.resolve(data))
      .catch(err => deferred.reject(err));
    return deferred.promise;
  }
}

export default logs;
