import { Joi, celebrate } from 'celebrate';

export const createHistoryValidate = celebrate({
  body: Joi.object().keys({
    data: Joi.required()
  })
});

export const getHistoryValidate = celebrate({
  params: Joi.object().keys({
    id: Joi.number().integer().required()
  })
});
