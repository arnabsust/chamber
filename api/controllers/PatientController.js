/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    findPatientByNID: function(req, res) {
        var id = req.param(id);
        Patient.findOne({
            NID: id
        }).exec(function(err, patient) {
            if (err) {
                return res.json({
                    error: err
                });
            }

            if (patient === undefined) {
                return res.notFound();
            } else {
                return res.json({
                    notFound: false,
                    patientData: patient
                });
            }
        })
    }
};
