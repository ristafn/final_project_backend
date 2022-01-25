class Query {
  constructor() {
    this.query =
      "patients.id, patients.name, patients.phone, patients.address, status_patients.status, patients.in_date_at, patients.out_date_at, patients.created_at, patients.updated_at";
  }
}

const object = new Query();

module.exports = object;
