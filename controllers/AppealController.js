const appealService = require("../services/appealService");

class AppealControllers {
  async create(req, res, next) {
    try {
      const { text, theme, status } = req.body;
      const appeal = await appealService.create(text, theme, status);
      return res.json(appeal);
    } catch (e) {
      next(e);
    }
  }
  async takeToWork(req, res, next) {
    try {
      const { id } = req.query;
      const appeal = await appealService.work(id);
      return res.json(appeal);
    } catch (e) {
      next(e);
    }
  }
  async solving(req, res, next) {
    try {
      const { id, text } = req.body;
      const appeal = await appealService.solving(id, text);
      return res.json(appeal);
    } catch (e) {
      next(e);
    }
  }
  async cancel(req, res, next) {
    try {
      const { id, text } = req.body;
      const appeal = await appealService.cancel(id, text);
      return res.json(appeal);
    } catch (e) {
      next(e);
    }
  }
  async cancel_all(req, res, next) {
    try {
      const appeal = await appealService.cancelAll();
      return res.json(appeal);
    } catch (e) {
      next(e);
    }
  }
  async getAll(req, res, next) {
    try {
      const { date, to } = req.query;
      const appeals = await appealService.getAll(date, to);
      return res.json(appeals);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AppealControllers();
