function CommentSkeleton() {
    return ( 
        <div className='w-full h-28 bg-slate-400/30 rounded-md flex flex-col p-4 gap-2 shadow-md animate-pulse'>
            <div className='w-1/3 h-4 bg-slate-300/20 rounded-md'></div>
            <div className='w-full h-4 bg-slate-300/20 rounded-md'></div>
            <div className='w-full h-4 bg-slate-300/20 rounded-md'></div>
            <div className='w-full h-4 bg-slate-300/20 rounded-md'></div>
        </div>
     );
}

export default CommentSkeleton;