import { Router } from 'express';

import Paths from '../common/Paths';
import CommentRoutes from './CommentRoutes';

// **** Variables **** //
const apiRouter = Router();

// ** Add UserRouter ** //

// Init router
const commentRouter = Router();

//get all comments
commentRouter.get(Paths.Comments.Get, CommentRoutes.getAll);
commentRouter.post(Paths.Comments.Add, CommentRoutes.add);
commentRouter.put(Paths.Comments.Update, CommentRoutes.update);
commentRouter.delete(Paths.Comments.Delete, CommentRoutes.delete);


// Add CommentsRouter
apiRouter.use(Paths.Comments.Base, commentRouter);

// **** Export default **** //

export default apiRouter;
