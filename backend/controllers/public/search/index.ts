import { Request, Response } from "express";
import getAll from "./getAll";
import getTracks from "./getAlbums";
import getAlbums from "./getTracks";
import getArtists from "./getArtists";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getTracks(req: Request, res: Response): Promise<void>;
  getAlbums(req: Request, res: Response): Promise<void>;
  getArtists(req: Request, res: Response): Promise<void>;
}

const controller: Controller = {
  getAll,
  getTracks,
  getAlbums,
  getArtists,
};
export default controller;
