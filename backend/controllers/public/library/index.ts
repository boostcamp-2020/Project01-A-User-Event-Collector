import { Request, Response } from "express";
import getLibArtists from "./artists";
import getLibAlbums from "./albums";
import getLibTracks from "./tracks";
import getLibPlaylists from "./playlsits";

interface Controller {
  getLibArtists(req: Request, res: Response): Promise<void>;
  getLibAlbums(req: Request, res: Response): Promise<void>;
  getLibTracks(req: Request, res: Response): Promise<void>;
  getLibPlaylists(req: Request, res: Response): Promise<void>;
}

const controller: Controller = {
  getLibAlbums,
  getLibArtists,
  getLibTracks,
  getLibPlaylists,
};
export default controller;
