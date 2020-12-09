import { Request, Response } from "express";
import { getLibArtists, postLibArtists, deleteLibArtists } from "./artists";
import { getLibAlbums, postLibAlbums, deleteLibAlbums } from "./albums";
import { getLibTracks, postLibTracks, deleteLibTracks } from "./tracks";
import {
  getLibPlaylists,
  postLibPlaylists,
  deleteLibPlaylists,
} from "./playlsits";

interface Controller {
  getLibArtists(req: Request, res: Response): Promise<void>;
  getLibAlbums(req: Request, res: Response): Promise<void>;
  getLibTracks(req: Request, res: Response): Promise<void>;
  getLibPlaylists(req: Request, res: Response): Promise<void>;

  postLibArtists(req: Request, res: Response): Promise<void>;
  postLibAlbums(req: Request, res: Response): Promise<void>;
  postLibTracks(req: Request, res: Response): Promise<void>;
  postLibPlaylists(req: Request, res: Response): Promise<void>;

  deleteLibArtists(req: Request, res: Response): Promise<void>;
  deleteLibAlbums(req: Request, res: Response): Promise<void>;
  deleteLibTracks(req: Request, res: Response): Promise<void>;
  deleteLibPlaylists(req: Request, res: Response): Promise<void>;
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
  deleteLibArtists,
  deleteLibAlbums,
  deleteLibTracks,
  deleteLibPlaylists,
};
export default controller;
