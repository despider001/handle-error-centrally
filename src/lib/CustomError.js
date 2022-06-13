class CustomError extends Error{
  constructor(message, status = 500, additionalInfo = {}) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.additionalInfo = additionalInfo;
  }
}

module.exports = { CustomError }