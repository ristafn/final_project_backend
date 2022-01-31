// Import package
const Patients = require("../models/Patients");
const response = require("../helpers/response");

class PatientsController {
  /**
   *
   * @param {any} req
   * @param {any} res
   * Mendapatkan semua data pasien
   */
  async index(req, res) {
    const patients = await Patients.all();

    if (patients.length > 0) {
      response.success(res, "Get All Resource Patients", patients, 200);
    } else {
      response.empty(res, "Patients is Empty!");
    }
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Menambahkan data pasien
   */
  async store(req, res) {
    const { name, phone, address, status, in_date_at } = req.body;

    // Check validation
    if (!(name && phone && address && status && in_date_at)) {
      const data = {
        message: "Please add name, phone, address, status, in_date_at!",
      };

      return res.status(422).json(data);
    }

    const patients = await Patients.create(req.body);

    response.success(res, "Patients Added Successfully", patients, 201);
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Menampilkan detail data pasien
   */
  async show(req, res) {
    const { id } = req.params;

    const patients = await Patients.find(id);

    if (patients) {
      response.success(res, "Get Detail Patients", patients, 200);
    } else {
      response.empty(res, "Patients Not Found!");
    }
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Mengupdate data pasien
   */
  async update(req, res) {
    const { id } = req.params;

    const patients = await Patients.find(id);

    if (patients) {
      const patients = await Patients.update(id, req.body);

      response.success(res, "Patients is update successfully!", patients, 200);
    } else {
      response.empty(res, "Patients Not Found!");
    }
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Menghapus data pasien
   */
  async destroy(req, res) {
    const { id } = req.params;

    const patients = await Patients.find(id);

    if (patients) {
      await Patients.delete(id);

      const data = {
        message: "Patients is delete successfully",
      };

      res.status(200).json(data);
    } else {
      response.empty(res, "Patients Not Found!");
    }
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Mencari data pasien sesuai nama
   */
  async search(req, res) {
    const { name } = req.params;

    const patients = await Patients.search(name);

    if (patients.length > 0) {
      response.success(res, "Patients is found successfully", patients, 200);
    } else {
      response.empty(res, "Patients Not Found!");
    }
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Mencari data pasien sesuai status positif
   */
  async positive(req, res) {
    const patients = await Patients.findByStatus(1);

    if (patients.length > 0) {
      response.success(
        res,
        "Positive patients found successfully",
        patients,
        200
      );
    } else {
      response.empty(res, "Patients Not Found!");
    }
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Mencari data pasien sesuai status recovered
   */
  async recovered(req, res) {
    const patients = await Patients.findByStatus(2);

    if (patients.length > 0) {
      response.success(
        res,
        "Recovered patients found successfully",
        patients,
        200
      );
    } else {
      response.empty(res, "Patients Not Found!");
    }
  }

  /**
   *
   * @param {any} req
   * @param {any} res
   * Mencari data pasien sesuai status dead
   */
  async dead(req, res) {
    const patients = await Patients.findByStatus(3);

    if (patients.length > 0) {
      response.success(res, "Dead patients found successfully", patients, 200);
    } else {
      response.empty(res, "Patients Not Found!");
    }
  }
}

const object = new PatientsController();

module.exports = object;
