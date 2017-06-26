class queries {
  constructor ($q, $http, API_URL) {
    "ngInject";
    this._$q = $q;
    this._$http = $http;
    this._API_URL = API_URL;
  }

  getQueries(query) {
    query = query || 'query-1';
    let deferred = this._$q.defer();
    this._$http.get(this._API_URL + '/sql/{query}'.replace('{query}', query))
      .then(data => deferred.resolve(data))
      .catch(err => deferred.reject(err));
    return deferred.promise;
  }
}

export default queries;
