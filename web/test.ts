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
};
getTrackCardData(1)

  // const abc:any = await prisma.artists_Tracks.findMany({
  //   where : { trackId : id},
  // })
  // const abc2:any = await prisma.artists_Tracks.findMany({
  //   select : {artists : true},
  //   where : { trackId : id},
  // })
  // console.log(abc)
  // console.log(abc2)

  