import { ErrorMessage, Field, Form, Formik } from "formik";
import { addComment } from "../app/features/comments/commentsThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { validationCommentSchema } from "../schemas/CommentSchema";

function FormAddComment() {
    const dispatch = useDispatch<AppDispatch>()
    
    return ( 
      <Formik
        initialValues={{
          email: '',
          comment: '',
        }}
        validationSchema={validationCommentSchema}
        onSubmit={(values, {setSubmitting}) => {
          try {
            dispatch(addComment({ email: values.email, comment: values.comment }));
            setSubmitting(false); // Marcar como no enviando después de enviar
            
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
                        className='email w-full h-12 p-4 rounded-md bg-secondary placeholder-white text-white border border-accent'
                        type="email"
                        id="email"
                        name="email"
                        placeholder={'test@example.com'}
                    />
                    <ErrorMessage name="email" component="div" className="text-white" />
                </div>

                <div className="w-full">
                    <Field
                        className='comment w-full h-36 p-4 rounded-md bg-secondary placeholder-white text-white border border-accent'
                        as="textarea"
                        id="comment"
                        name="comment"
                        placeholder={'add a comment...'}
                    />
                    <ErrorMessage name="comment" component="div" className="text-white"/>
                </div>

                <button 
                    className={`text-black p-4 rounded-md 
                      flex flex-row justify-center items-center
                      bg-primary
                       ${!isValid || !dirty ? '' : 'bg-ternary shadow-lg'}`} 
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                >Comment</button>

            </div>
        </Form>
      )}
    </Formik>
     );
}

export default FormAddComment;