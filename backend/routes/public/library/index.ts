import { Router, Request, Response } from "express";
import libraryController from "../../../controllers/public/library";

const router = Router();
router.get("/albums", libraryController.getLibAlbums);
router.get("/artists", libraryController.getLibArtists);
router.get("/playlists", libraryController.getLibPlaylists);
router.get("/tracks", libraryController.getLibTracks);

const test = (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  res.end();
};
router.post("/albums/:id", test);
router.post("/artists/:id", test);
router.post("/playlists/:id", test);
router.post("/tracks/:id", test);
export default router;
