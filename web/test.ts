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
  
  const trackIdArr = await prisma.playlists_Tracks.findMany({
    where:{playlistId:id},
    orderBy: {playlistTrackNumber: 'asc'},
  })
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

const getMagazinePageData = async (id :number) => {
  const magazine : any = await prisma.magazines.findUnique({ where: { id: id }}) 

  const playlistTracks : any = await prisma.playlists_Tracks.findMany({
    where: {playlistId: magazine.playlistId},
    orderBy: {playlistTrackNumber: 'asc'},
  })
  magazine.Tracks = await Promise.all(
    playlistTracks.map((elem)=>getTrackCardData(elem.trackId))
  );

  console.log(magazine);
  return magazine
};

// getTrackCardData(1)
// getPlaylistPageData(1)
// getArtistPageData(1)

export {getPlaylistPageData, getArtistPageData,getMagazinePageData}