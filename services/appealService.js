const { Op, where } = require("sequelize");
const AppealDto = require("../dtos/appealDtos");
const { BADREQUEST } = require("../errors/ApiError");
const { Appeal } = require("../models/appeal-model");
const tokenService = require("./tokenService");

class AppealService {
  async create(text, theme, status) {
    let appeal;
    if (status) {
      appeal = await Appeal.create({ text, theme, statusId: status });
    } else {
      appeal = await Appeal.create({ text, theme });
    }
    const appealDto = new AppealDto(appeal);
    const token = tokenService.generateToken({ ...appealDto });
    return token;
  }

  async work(id) {
    let appeal = await Appeal.findOne({ where: { id } });
    if (appeal) {
      appeal.statusId = 2;
      await appeal.save();
    } else {
      return BADREQUEST("Такое обращение не найдено!");
    }
    const appealDto = new AppealDto(appeal);
    const token = tokenService.generateToken({ ...appealDto });
    return token;
  }

  async solving(id, text) {
    let appeal = await Appeal.findOne({ where: { id } });
    if (appeal) {
      appeal.statusId = 3;
      appeal.solving = text;
      await appeal.save();
    } else {
      return BADREQUEST("Такое обращение не найдено!");
    }
    const appealDto = new AppealDto(appeal);
    const token = tokenService.generateToken({ ...appealDto });
    return token;
  }

  async cancel(id, text) {
    let appeal = await Appeal.findOne({ where: { id } });
    if (appeal) {
      appeal.statusId = 3;
      appeal.cancel = text;
      await appeal.save();
    } else {
      return BADREQUEST("Такое обращение не найдено!");
    }
    const appealDto = new AppealDto(appeal);
    const token = tokenService.generateToken({ ...appealDto });
    return token;
  }

  async cancelAll() {
    let appeals = await Appeal.findAll({ where: { statusId: 2 } });
    if (appeals) {
      appeals.map((appeal) => {
        appeal.statusId = 4;
        appeal.save();
      });
      return BADREQUEST("Все обращения изменены!");
    }
    //     return BADREQUEST("Такое обращение не найдено!");
    //   }
  }

  async getAll(date, to) {
    console.log(date);
    console.log(to);

    let appeals;
    if (date && !to) {
      appeals = await Appeal.findAll({
        where: {
          [Op.and]: [{ date }],
        },
      });
    }
    if (!date && !to) {
      appeals = await Appeal.findAll();
    }
    if (date && to) {
      appeals = await Appeal.findAll({
        where: {
          date: {
            [Op.lt]: to,
            [Op.gt]: date,
          },
        },
      });
    }
    return appeals;
  }
}

module.exports = new AppealService();
