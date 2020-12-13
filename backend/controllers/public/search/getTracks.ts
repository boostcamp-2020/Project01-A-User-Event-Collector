import { Request, Response } from "express";
import { makeSearchOption } from "../../../utils/makePrismaObtion";
import { getTrackForSearch } from "../../../models/tracks";

const getTracks = async (req: Request, res: Response): Promise<void> => {
  const trackFilter = makeSearchOption(req.query, "trackName");

  try {
    const result = await getTrackForSearch(trackFilter, req.user);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getTracks;
