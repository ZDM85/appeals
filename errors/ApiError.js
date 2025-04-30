module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super();
    this.message = message;
    this.status = status;
    this.errors = errors;
  }

  static BADREQUEST(message, errors) {
    return new ApiError(403, message, errors);
  }
};
