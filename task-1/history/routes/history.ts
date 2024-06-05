import { Router } from 'express';
import { createHistory, getHistory } from '../controllers/history';
import { createHistoryValidate, getHistoryValidate } from '../middlewares/validate';

const router: Router = Router();

router.post('/', createHistoryValidate, createHistory);
router.get('/:id', getHistoryValidate, getHistory);

export default router;
