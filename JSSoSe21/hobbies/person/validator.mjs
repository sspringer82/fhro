import { checkSchema } from 'express-validator';

export default checkSchema({
  firstname: {
    isLength: {
      errorMessage: 'Firstname should be 15 chars at max',
      // Multiple options would be expressed as an array
      options: { min: 1, max: 15 },
    },
  },
  lastname: {
    isLength: {
      errorMessage: 'Lastname should be 15 chars at max',
      // Multiple options would be expressed as an array
      options: { min: 1, max: 15 },
    },
  },
});
