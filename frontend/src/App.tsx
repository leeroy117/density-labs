import { useEffect } from 'react';
import './App.css'
import CardComment from './components/CardComment'
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from './app/features/comments/commentsThunk';
import { AppDispatch, RootState } from './app/store';
import FormAddComment from './components/FormAddComment';
import Swal from 'sweetalert2';
import Skeleton from 'react-loading-skeleton';
import CommentSkeleton from './components/CommentSkeleton';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { comments, status, error } = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  
  useEffect(() => {
    if (status === 'failed' && error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'An error occurred while fetching comments.',
      });
    }
  }, [status, error]);

  return (
    <>
    <div className='relative w-screen h-screen bg-[#13161C] flex justify-center items-center p-4'>

      <div className='flex flex-col gap-5 w-1/3 b h-full text-gray-500 bg-[#0C0E12] shadow-2xl p-4 rounded-lg shadow-customShadow border border-accent' >
        
        <FormAddComment />
        <div className='flex flex-col gap-4 h-full overflow-y-scroll scrollbar p-4'>
          {
            status == 'loading' ? 
              [0,1,2,3,4].map((i)=><CommentSkeleton />)
            :
            comments.map((comment) => {
              return (
                <CardComment key={comment.id} id={comment.id} comment={comment.comment} email={comment.email}/>
              )
            })
          }
        </div>
      </div>

    </div>
    </>
  )
}

export default App
