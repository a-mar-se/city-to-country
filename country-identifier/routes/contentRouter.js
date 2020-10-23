import express from 'express';
import { getContentByLocationName } from '../controllers/getContentByLocationName.js';

const contentRouter = express.Router();

contentRouter.get('/', getContentByLocationName);

export default contentRouter;
