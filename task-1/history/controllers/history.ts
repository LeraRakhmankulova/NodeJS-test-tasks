import { Request, Response } from 'express';
import History from '../models/history';

export const createHistory = async (req: Request, res: Response) => {
    try {
        const history = await History.create(req.body);
        res.status(201).json(history);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getHistory = async (req: Request, res: Response) => {
    try {
        const { userId, page = 1, size = 10 } = req.query;
        const histories = await History.findAndCountAll({
            where: { userId },
            limit: +size,
            offset: (+page - 1) * +size,
        });
        res.status(200).json({
            total: histories.count,
            pages: Math.ceil(histories.count / +size),
            data: histories.rows,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
