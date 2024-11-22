import { AppDataSource } from '@src/appDataSource';
import { RouteError } from '@src/common/classes';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { Comment } from '@src/entity/Comment';
import moment from 'moment';
import { UpdateResult } from 'typeorm';

interface IComment {
  id?: string;
  comment: string;
  email: string;
}
function getAll(): Promise<Comment[]> {
    
    return AppDataSource.getRepository(Comment).find();
}

function getById(id: string): Promise<Comment|null> {
    
    return AppDataSource
            .getRepository(Comment)
            .createQueryBuilder("comment")
            .where("comment.id = :id", { id })
            .getOne();
}

function addOne(comment: IComment): Promise<Comment> {
  const commentRepository = AppDataSource.getRepository(Comment);

  const newComment = new Comment();

  newComment.comment = comment.comment;
  newComment.email = comment.email;

  return commentRepository.save(newComment);
}

async function updateOne(comment: IComment): Promise<UpdateResult> {

    return AppDataSource
      .createQueryBuilder()
      .update(Comment)
      .set({ comment: comment.comment, email: comment.email })
      .where("id = :id", { id: comment.id })
      .execute();
}

async function delete_(id: string): Promise<UpdateResult> {
    return AppDataSource
      .getRepository(Comment)
      .createQueryBuilder()
      .softDelete()
      .where("id = :id", { id })
      .execute();
}


export default {
  getAll,
  addOne,
  updateOne,
  delete: delete_,
  getById
} as const;