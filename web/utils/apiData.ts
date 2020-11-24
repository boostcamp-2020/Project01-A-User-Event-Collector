// import {} from "../db/models"

// const getTrackCardData = async (id: number) => {
//     const trackResolve = await Tracks.findOne({ where: { id: id } });                          //1. access track table           
//     const result = trackResolve.toJSON();
  
//     const albumResolve = await Albums.findOne({ where: { id: result.albumId } });              //1. access album table
    
//     const relationResolve = await Artists_Tracks.findAll({where: { trackId: id }});            //1. access artist_track relation table
//     const artistIdArr = relationResolve.map((relation:any) => relation.toJSON().artistId);     //2. extract only artist_id
//     const artistResolve = await Promise.all(                                                   //3. access artists table (with aritst_id)
//       artistIdArr.map((artistId:number) => Artists.findOne({ where: { id: artistId } }))
//     );
    
//     result.Aritst = artistResolve.map((artist:any) => artist.toJSON());                         
//     result.Album = albumResolve.toJSON();                                                       
//     return result;
// };

// export {getTrackCardData}
export default undefined