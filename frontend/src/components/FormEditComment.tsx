import { ErrorMessage, Field, Form, Formik } from "formik";
import { updateComment } from "../app/features/comments/commentsThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { validationCommentSchema } from "../schemas/CommentSchema";

interface Props {
    id: string;
    comment: string;
    email: string;
    closeModal: () => void
}
  
function FormEditComment({ id, comment, email, closeModal }:Props) {
    const dispatch = useDispatch<AppDispatch>()
    
    return ( 
      <Formik
        initialValues={{
          email: email,
          comment: comment,
        }}
        validationSchema={validationCommentSchema}
        onSubmit={(values, {setSubmitting}) => {
          try {
            dispatch(updateComment({id: id, comment: values.comment, email: values.email}))
            setSubmitting(false);
            closeModal();
          } catch (error) {
            console.log("🚀 ~ FormAddComment ~ error:", error)
            
          }
        }}
      >
      {({isValid, dirty, isSubmitting}) => (
        <Form> 
            <div className='flex flex-col justify-center items-center gap-4 w-full'>
                <div className="w-full">
                    <Field
                        className='w-full h-12 p-4 rounded-md bg-secondary placeholder-black text-white'
                        type="email"
                        id="email"
                        name="email"
                        placeholder={'test@example.com'}
                    />
                    <ErrorMessage name="email" component="div" className="text-white" />
                </div>

                <div className="w-full">
                    <Field
                        className='w-full h-36 p-4 rounded-m bg-secondary placeholder-black text-white'
                        as="textarea"
                        id="comment"
                        name="comment"
                        placeholder={'add a comment...'}
                    />
                    <ErrorMessage name="comment" component="div" className="text-white"/>
                </div>

                <div className="flex flex-col gap-2">
                    <button 
                        className={`text-white p-4 rounded-md flex flex-row justify-center items-center ${!isValid || !dirty ? '' : ''}`} 
                        type="submit"
                        disabled={!isValid || !dirty || isSubmitting}
                    >Edit</button>

                    <button 
                        className=" text-red-500 rounded-md text-lg font-bold"
                        onClick={() => closeModal()}
                    >Cancel</button>
                </div>


            </div>
        </Form>
      )}
    </Formik>
     );
}

export default FormEditComment;