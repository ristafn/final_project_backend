const db = require("../config/database");
const Query = require("../helpers/query");

class Patients {
  /**
   *
   * Mendapatkan semua data pasien
   */
  static all() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT ${Query.query} FROM patients JOIN status_patients WHERE patients.status = status_patients.status`;

      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  /**
   *
   * @param {any} data
   * Menambahkan data pasien
   */
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";

      db.query(sql, data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log(result);
          resolve(result.insertId);
        }
      });
    });

    const patients = await this.find(id);

    return patients;
  }

  /**
   *
   * @param {number} id
   * Mencari data pasien dengan id
   */
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT ${Query.query} FROM patients JOIN status_patients WHERE patients.id = ? AND patients.status = status_patients.status`;

      db.query(sql, id, (err, result) => {
        const [patients] = result;

        resolve(patients);
      });
    });
  }

  // Mengupdate data pasien
  /**
   *
   * @param {number} id
   * @param {any} data
   */
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";

      db.query(sql, [data, id], (err, result) => {
        resolve(result);
      });
    });

    const patients = await this.find(id);

    return patients;
  }

  /**
   *
   * @param {number} id
   * Menghapus data pasien
   * @return {any} result
   */
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";

      db.query(sql, id, (err, result) => {
        resolve(result);
      });
    });
  }

  /**
   *
   * @param {string} name
   * Mencari data pasien sesuai dengan nama
   */
  static async search(name) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT ${Query.query} FROM patients JOIN status_patients WHERE patients.name LIKE '%${name}%' AND patients.status = status_patients.status`;

      db.query(sql, (err, result) => {
        resolve(result);
      });
    });
  }

  /**
   *
   * @param {number} status
   * Mencari data pasien sesuai dengan status
   */
  static async findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT ${Query.query} FROM patients JOIN status_patients WHERE patients.status = ? AND patients.status = status_patients.status`;

      db.query(sql, status, (err, result) => {
        resolve(result);
      });
    });
  }
}

module.exports = Patients;
