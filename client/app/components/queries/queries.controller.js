class QueriesController {
  constructor(queries) {
    "ngInject"
    this.queries = queries;
    this.name = 'queries';
    this.queriesArray = [];
    this.queries.getQueries().then((data) => {
      this.queriesArray = data;
    })
  }


}

export default QueriesController;
