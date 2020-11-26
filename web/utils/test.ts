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

  const trackIdArr : any = await prisma.playlists_Tracks.findMany({
    where: {playlistId: magazine.playlistId},
    orderBy: {playlistTrackNumber: 'asc'},
  })
  magazine.Tracks = await Promise.all(
    trackIdArr.map((elem)=>getTrackCardData(elem.trackId))
  );

  console.log(magazine);
  return magazine
};

const getAlbumPageData = async (id:number) => {
  const album : any = await prisma.albums.findUnique({where:{id:id}})
  const trackIdArr : any = await prisma.playlists_Tracks.findMany({
    where: {playlistId: album.playlistId},
    orderBy: {playlistTrackNumber: 'asc'},
  })
  album.Tracks = await Promise.all(
    trackIdArr.map((elem)=>getTrackCardData(elem.trackId))
  );
  console.log(album)
  return album
}

const getGenrePageData = async (id) => {
  const genre : any = await prisma.genres.findUnique({where:{id:id}});
  const trackIds : any = await prisma.tracks_Genres.findMany({where:{genreId: id}});
  genre.Tracks = await Promise.all(
    trackIds.map((elem: any)=>getTrackCardData(elem.trackId))
  );
  const albumIds: any = await prisma.albums_Genres.findMany({where:{genreId: id}});
  genre.Albums = await Promise.all(
    albumIds.map((elem: any)=> prisma.albums.findMany({where:{id: elem.albumId}}))
  );
  const artistIds : any = await prisma.artists_Genres.findMany({where:{genreId: id}});
  genre.Artists = await Promise.all(
    artistIds.map((elem: any)=>prisma.artists.findMany({where:{id: elem.artistId}}))
  );


  return genre;
}

const getNewsPageData = async (id:number) => {
  const news : any = await prisma.news.findUnique({where:{id:id}})
  console.log(news)
  const trackIdArr : any = await prisma.playlists_Tracks.findMany({
    where: {playlistId: news.playlistId},
    orderBy: {playlistTrackNumber: 'asc'},
  })
  news.Tracks = await Promise.all(
    trackIdArr.map((elem)=>getTrackCardData(elem.trackId))
  );

  console.log(news);
  return news
}


// getTrackCardData(1)
// getPlaylistPageData(1)
// getArtistPageData(1)
// getAlbumPageData(1)

export {getPlaylistPageData, getArtistPageData,getMagazinePageData,getAlbumPageData, getGenrePageData, getNewsPageData}
