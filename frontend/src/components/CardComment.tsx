import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { AppDispatch } from "../app/store";
import { removeComment } from "../app/features/comments/commentsThunk";
import { useState } from "react";
import Modal from "./Modal";
import FormEditComment from "./FormEditComment";

interface Props {
    id: string;
    email: string;
    comment: string;
    
}

function CardComment({ id, email, comment }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
  
    const closeModal = () => setIsModalOpen(false);

    const dispatch = useDispatch<AppDispatch>()

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Do you want to delete the comment?",
            showDenyButton: true,
            confirmButtonText: "Yes, I want to",
            confirmButtonColor: '#920707',
            denyButtonText: `Cancel`,
            denyButtonColor: '#1ba4df',
            background: '#13161C',
            color: '#fff',
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeComment(id))
            } 
          });
    }

    const handleEdit = () => {
        openModal();
    }
    return ( 
        <div className="flex flex-col p-4 w-full h-28 bg-ternary rounded-md shadow-md">
            <div className="flex flex-row justify-start w-full">
                <span className="text-black text-lg font-extrabold ">{email}</span>
            </div>
            <div className="flex flex-row justify-start w-full text-black ">
                <p className="w-full text-ellipsis overflow-hidden">{comment}</p>
            </div>
            <div className="flex flex-row justify-start items-center mt-2">
                <button
                    onClick={() => handleEdit()}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1.5rem"
                        height="1.5rem" 
                        viewBox="0 0 24 24"
                    >
                            <path fill="blue" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z">
                            </path>
                    </svg>

                </button>


                <button onClick={() => handleDelete(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="#920707" fillRule="evenodd" d="m18.412 6.5l-.801 13.617A2 2 0 0 1 15.614 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5H3.5v-1A.5.5 0 0 1 4 5h16a.5.5 0 0 1 .5.5v1zM10 2.5h4a.5.5 0 0 1 .5.5v1h-5V3a.5.5 0 0 1 .5-.5M9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9z"></path></svg>
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
               <FormEditComment id={id} comment={comment} email={email} closeModal={closeModal}/>
            </Modal>
        </div>
     );
}

export default CardComment;