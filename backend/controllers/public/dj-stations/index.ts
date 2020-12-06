import { Request, Response } from "express";
import { getDjStationCovers } from "../../models/dj-station";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getDjStationCovers({});
    res.status(200).json({ DJStations: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const controller: Controller = { getAll };
export default controller;
