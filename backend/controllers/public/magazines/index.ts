import { Request, Response } from "express";
import { getMagazineCovers, getMagazineById } from "../../../models/magazines";
import { makeOption } from "../../../utils/makePrismaObtion";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getMagazine(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const optObj = makeOption(req.query, "magazineType", "string");
    const result = await getMagazineCovers(optObj);
    res.status(200).json({ Magazines: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getMagazine = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await getMagazineById(+id);
    if (!result) throw new Error("empty data");
    res.status(200).json({ Magazines: result });
  } catch (err) {
    if (err === "empty data") {
      res.status(400).json({ statusCode: 400, message: "Bad Request" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const controller: Controller = { getAll, getMagazine };
export default controller;
