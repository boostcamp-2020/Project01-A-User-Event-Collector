import { Request, Response } from "express";
import { getLibArtists, postLibArtists } from "./artists";
import { getLibAlbums, postLibAlbums } from "./albums";
import { getLibTracks, postLibTracks } from "./tracks";
import { getLibPlaylists, postLibPlaylists } from "./playlsits";

interface Controller {
  getLibArtists(req: Request, res: Response): Promise<void>;
  getLibAlbums(req: Request, res: Response): Promise<void>;
  getLibTracks(req: Request, res: Response): Promise<void>;
  getLibPlaylists(req: Request, res: Response): Promise<void>;

  postLibArtists(req: Request, res: Response): Promise<void>;
  postLibAlbums(req: Request, res: Response): Promise<void>;
  postLibTracks(req: Request, res: Response): Promise<void>;
  postLibPlaylists(req: Request, res: Response): Promise<void>;
}

const controller: Controller = {
  getLibAlbums,
  getLibArtists,
  getLibTracks,
  getLibPlaylists,
  postLibArtists,
  postLibAlbums,
  postLibTracks,
  postLibPlaylists,
};
export default controller;
