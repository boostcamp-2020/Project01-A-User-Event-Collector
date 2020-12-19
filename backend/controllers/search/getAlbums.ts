import { Request, Response } from "express";
import { makeSearchOption } from "../../utils/makePrismaObtion";
import { getAlbumCovers } from "../../models/albums";

const getAlbums = async (req: Request, res: Response): Promise<void> => {
  const albumFilter = makeSearchOption(req.query, "albumName");

  try {
    const result = await getAlbumCovers(albumFilter);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getAlbums;
