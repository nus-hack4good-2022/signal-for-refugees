import Joi from 'joi';

module.exports = Joi.object().keys({
    id: Joi.string().required().error(() => 'Home ID must be a string'),
    title: Joi.string().required().error(() => 'Title must be a string'),
    address: Joi.string().required().error(() => 'Home address must be a string'),
    createdOn: Joi.date().required().error(() => 'Home createdOn must be a date'),
    owner: Joi.string().required().error(() => 'Home owner must be a string'),
    status: Joi.string().required().error(() => 'Home status must be a string'),
    location: Joi.string().required().error(() => 'Home location must be a string'),
    type: Joi.string().required().error(() => 'Home type must be a string'),
    numBedroom: Joi.number().required().error(() => 'Home numBedroom must be a number'),
    numBathroom: Joi.number().required().error(() => 'Home numBathroom must be a number'),
    requests: Joi.array().required().error(() => 'Home requests must be an array'),
});
