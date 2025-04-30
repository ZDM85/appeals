const statusService = require("../services/statusService");

class StatusControllers {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const status = await statusService.create(name);
      return res.json(status);
    } catch (e) {
      next(e);
    }
  }
  async delete(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new StatusControllers();
