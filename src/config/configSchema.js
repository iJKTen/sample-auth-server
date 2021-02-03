'use strict';
const Joi = require('joi');

const configSchema = Joi.object({
    db: Joi.object({
        URI: Joi.string()
            .uri()
            .required()
            .error((errors) => new Error('"URI" needs to be the URL to a valid mongo database.'))
    }),
    crpyto: Joi.object({
        BCRYPT_WORK_FACTOR: Joi.number()
            .integer()
            .required()
            .min(12)
            .error((errors) => new Error('"BCRYPT_WORK_FACTOR" needs to be an integer greater than 12.'))
    }),
    jwt: Joi.object({
        JSON_WEB_TOKEN_SECRET: Joi.string()
            .required()
            .error((errors) => new Error('"JSON_WEB_TOKEN_SECRET" needs to a random string.')),
        JSON_WEB_TOKEN_EXPIRATION: Joi.number()
            .integer()
            .required()
            .error((errors) => new Error('"JSON_WEB_TOKEN_EXPIRATION" needs to be a number in seconds.'))
    }),
    auth: Joi.object({
        google: Joi.object({
            id: Joi.string()
                .required()
                .error((errors) => new Error('"GOOGLE_CLIENT_ID" cannot be empty.')),
            secret: Joi.string()
                .required()
                .error((errors) => new Error('"GOOGLE_CLIENT_SECRET" cannot be empty.'))
        }),
        facebook: Joi.object({
            id: Joi.string()
                .required()
                .error((errors) => new Error('"FACEBOOK_APP_ID" cannot be empty.')),
            secret: Joi.string()
                .required()
                .error((errors) => new Error('"FACEBOOK_APP_SECRET" cannot be empty.'))
        })
    })
});

module.exports = configSchema;
