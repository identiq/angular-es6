class LogsController {
  constructor(logs) {
    "ngInject";
    this.logs = logs;
    this.name = 'logs';
    this.logsArray = [];
    this.logs.getLogs().then((data) => {
      this.logsArray = data;
    })
  }


}

export default LogsController;
