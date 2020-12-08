import { Request, Response } from "express";
import { makeSearchOption } from "../../../utils/makePrismaObtion";
import { getArtistCovers } from "../../../models/artists";

const getArtists = async (req: Request, res: Response): Promise<void> => {
  const artistFilter = makeSearchOption(req.query, "artistName");

  try {
    const result = await getArtistCovers(artistFilter);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getArtists;
