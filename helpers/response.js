class Response {
  success(res, message, patients, status) {
    const data = {
      message: message,
      data: patients,
    };

    res.status(status).json(data);
  }

  empty(res, message) {
    const data = {
      message: message,
    };

    res.status(404).json(data);
  }
}

const object = new Response();

module.exports = object;
