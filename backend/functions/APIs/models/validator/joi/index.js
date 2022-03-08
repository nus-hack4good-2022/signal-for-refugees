import Joi from 'joi';
import listingSchema from './listing-schema';

let JoiValidator = (payload, schema) => {
    let {error} = Joi.validate(payload, schema, {abortEarly: false});
    if (error) {
        let message = error.details.map(detail => detail.message).join('\n');
        return { error: message };
    }
    return true;
}

let validator = {
    listingValidator: (payload) => JoiValidator(payload, listingSchema)
}

module.exports = validator;