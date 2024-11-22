import * as Yup from 'yup'

export const validationCommentSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('An Email is required'),
    comment: Yup.string().required('A Comment is required'),
  });