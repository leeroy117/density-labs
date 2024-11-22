import HttpStatusCodes from '@src/common/HttpStatusCodes';
import CommentService from '@src/services/CommentService';
import { IReq, IRes } from './common/types';
import { commentAddSchema, commentDeleteSchema, commentUpdateSchema } from '@src/schemas/CommentSchema';
import { ZodError } from 'zod';
async function getAll(_: IReq, res: IRes) {
   const comments = await CommentService.getAll();
    res.status(HttpStatusCodes.OK).json(comments);
}

async function add(req: IReq, res: IRes) {
    try {
        const comment = await commentAddSchema.parseAsync(req.body);
        const createdComment = await CommentService.addOne(comment);
        res.status(HttpStatusCodes.CREATED).json(createdComment).end();
    } catch (error) {
        if(error instanceof ZodError){
            res.status(HttpStatusCodes.BAD_REQUEST).json(error.errors);
        }else{
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error processing your request.' });
        }
    }
    
}

async function update(req: IReq, res: IRes) {
    try {
        const comment = await commentUpdateSchema.parseAsync({...req.body, id: req.params.id});
        await CommentService.updateOne(comment);
        const updatedComment = await CommentService.getById(comment.id);
        res.status(HttpStatusCodes.OK).json(updatedComment).end();
    } catch (error) {
        if(error instanceof ZodError){
            res.status(HttpStatusCodes.BAD_REQUEST).json(error.errors);
        }else{
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error processing your request.' });
        }
    }
    
}

async function delete_(req: IReq, res: IRes) {
    try {
        const { id } = await commentDeleteSchema.parseAsync({id: req.params.id});
    
        await CommentService.delete(id);
        res.status(HttpStatusCodes.OK).json(id).end();
        
    } catch (error) {
        if(error instanceof ZodError){
            res.status(HttpStatusCodes.BAD_REQUEST).json(error.errors);
        }else{
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error processing your request.' });
        }
    }
  }

export default {
    getAll,
    add,
    update,
    delete: delete_,
} as const;

