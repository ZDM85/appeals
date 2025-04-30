const { Status } = require("../models/appeal-model");

class StatusService {
  async create(name) {
    const status = await Status.create({ name });
    return status;
  }
}

module.exports = new StatusService();
