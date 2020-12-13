import myAxios from "./myAxios";

const fetchLike = async (trackId: number): Promise<boolean> => {
  try {
    await myAxios.post("/tracks/like", { trackId });
    return true;
  } catch (err) {
    return false;
  }
};

const fetchUnlike = async (trackId: number): Promise<boolean> => {
  try {
    await myAxios.post("/tracks/unlike", { trackId });
    return true;
  } catch (err) {
    return false;
  }
};

export { fetchLike, fetchUnlike };
