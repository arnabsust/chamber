/**
 * Patient.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    connection: 'chamberMongoDB',
    attributes: {
        FirstName: {
            type: "string",
            required: true,
            minLength: 2
        },
        LastName: {
            type: "string",
            required: true,
            minLength: 2
        },
        Email: {
            type: "string",
            required: true,
            unique: true
        },
        NID: {
            type: "string",
            unique: true,
            size: 16
        }
    }
};
