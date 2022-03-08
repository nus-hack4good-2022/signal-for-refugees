import { listingValidator } from './joi';

let validator = {
    listingValidator: (payload) => listingValidator(payload)
}

module.exports = validator;