module.exports = class AppealDto {
  id;
  status;
  theme;

  constructor(model) {
    this.id = model.id;
    this.status = model.statusId;
    this.theme = model.theme;
  }
};
