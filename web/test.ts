import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

const getTrackCardData = async (id :number) => {
  const track : any = await prisma.tracks.findUnique({ 
    where: { id: id },
    include:{Albums:true} 
  })

  // relation -> table
  const artistIdArr = await prisma.artists_Tracks.findMany({where: { trackId: id }})
  track.Artists = await Promise.all(
    artistIdArr.map((elem) => prisma.artists.findUnique({ where: { id: elem.artistId } }))
  );
  console.log(track)
  return track
};


const getPlaylistPageData = async (id : number) => {
  const playlist : any = await prisma.playlists.findUnique({where:{id:id}})
  //author 나중에
  
  const trackIdArr = await prisma.playlists_Tracks.findMany({where:{playlistId:id}})
  playlist.Tracks = await Promise.all(
    trackIdArr.map((elem) => getTrackCardData(elem.trackId))
    )
    
  console.log(playlist)
  return playlist
}
  
  const getArtistPageData = async (id :number) => {
    const artist : any = await prisma.artists.findUnique({where:{id:id}})
    artist.Albums = await prisma.albums.findMany({where:{artistId:id}})
    
    const trackIdArr = await prisma.artists_Tracks.findMany({where:{artistId:id}})
    artist.Tracks = await Promise.all(
      trackIdArr.map((elem) => getTrackCardData(elem.trackId))
      )
    
    console.log(artist)
    return artist
  }


// getTrackCardData(1)
// getPlaylistPageData(1)
// getArtistPageData(1)

export {getPlaylistPageData, getArtistPageData}