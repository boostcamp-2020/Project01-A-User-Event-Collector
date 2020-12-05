import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Slidebar, { SlidebarProps } from ".";

export default {
  title: "Slidebar",
  component: Slidebar,
};

const Template: Story<SlidebarProps> = (args) => <Slidebar {...args} />;

export const todayMagazineSlider = Template.bind({});
todayMagazineSlider.args = {
  varient: "todayBig",
  dataType: "magazine",
  title: "매거진",
  titleLink: "",
  data: [
    {
      id: 1,
      magazineName: "월간 아이들 1호",
      magazineType: "PICK",
      description:
        '아이들 그들의 뮤즈는 누구인가? 아이들학 석사인 이유택 석사는 그에 대해 이렇게 말했다. "아이들은 천재입니다. 그들의 음악성은 아이돌 그 이상이에요."',
      createdAt: "2020-11-26T07:25:13.000Z",
      playlistId: 1,
      cover:
        "https://music-phinf.pstatic.net/20201203_154/1606978862122bn04O_JPEG/0-%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720",
    },
    {
      id: 2,
      magazineName: "월간 아이들 2호",
      magazineType: "PICK",
      description: '우기의 남자친구가 이유택으로 밝혀져..."',
      createdAt: "2020-11-26T07:25:13.000Z",
      playlistId: 2,
      cover:
        "https://music-phinf.pstatic.net/20201201_172/1606819171387beBJx_JPEG/5094136.jpg?type=w720",
    },
    {
      id: 3,
      magazineName: "유택아 그만해라",
      magazineType: "PICK",
      description: "유택아 제발, 데모해야 된다.",
      createdAt: "2020-11-27T00:42:09.000Z",
      playlistId: 2,
      cover:
        "https://music-phinf.pstatic.net/20201130_235/1606723204878shGox_JPEG/0-%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720",
    },
    {
      id: 4,
      magazineName: "넓은 음악적 스펙트럼을\n자랑하는 황소윤\n",
      magazineType: "PICK",
      description:
        "매주 목요일 저녁 8시에 진행되는 네이버 NOW. 자이언티의 <SAP>. 게스트와 함께 삽질하는 이야기를 나누는 <SAP>을 찾은 황소윤을 두고 호스트 자이언티는 흥미로운 아티스트이자 인물이라고 소개했다.",
      createdAt: "2020-11-29T00:42:09.000Z",
      playlistId: 5,
      cover:
        "https://music-phinf.pstatic.net/20201119_255/1605768990292DkTAH_JPEG/%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720",
    },
    {
      id: 5,
      magazineName: "가을이 가기 전 들어야 할\n싱어송라이터 : 기브온, 호프 탈라\n",
      magazineType: "PICK",
      description:
        "가을은 바야흐로 알앤비의 계절. 한동안 잠잠했던 알앤비/소울 아티스트들이 신보와 새로운 싱글을 하나둘씩 들 나오며 음악팬들의 마음을 따뜻하게 만들었다. 이 중에는 SNS를 통해 입소문을 얻으며 한국에서도 인지도를 서서히 쌓아가고 있는 이들이 있다. 이번 기사에서는 가을 날씨와 함께 들으면 좋을 일곱 명의 싱어송라이터를 알아보자. - 힙합엘이",
      createdAt: "2020-11-14T00:42:09.000Z",
      playlistId: 6,
      cover: "https://musicmeta-phinf.pstatic.net/artist/003/980/3980296.jpg?type=r720Fll",
    },
    {
      id: 6,
      magazineName: "가을에 듣는 인디 앨범 :\n김뜻돌, 공중그늘\n",
      magazineType: "PICK",
      description:
        "코로나로 외부 활동을 멈춘 인디 음악가들이 최근 앨범 작업에 매진하고 있다. 덕분에 좋은 앨범이 많이 쏟아졌다. 곡을 듣고 마음에 들면 꼭 앨범으로 듣길. 가을이 더 풍성해질 것이다. -하박국\n",
      createdAt: "2020-11-18T00:42:09.000Z",
      playlistId: 7,
      cover:
        "https://music-phinf.pstatic.net/20201116_25/1605515795782Xy0Kf_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6-%C1%A4%B9%E6%C7%FC_11.jpg?type=w720",
    },
    {
      id: 7,
      magazineName: "New Release #11 :\n그리프, 골든차일드\n",
      magazineType: "PICK",
      description:
        "혼네와 콜라보한 촉망받는 신예 그리프, 청량하고 명랑한 기운을 가득 내뿜으며 돌아온 골든 차일드. 네이버 NOW. <6시 5분 전>에서 소개한 신곡부터, 놓쳐서는 안 될 핫한 신곡까지! 지금 주목해야 할 트렌디하고 멋진 신곡들을 VIBE 매거진에서 확인하세요. 글 : 박희아, 이대화\n",
      createdAt: "2020-11-11T00:42:09.000Z",
      playlistId: 8,
      cover: "https://musicmeta-phinf.pstatic.net/artist/000/369/369038.jpg?type=r720Fll",
    },
    {
      id: 8,
      magazineName: "This is the\nBLACKPINK Album\n",
      magazineType: "PICK",
      description:
        "블랙핑크가 데뷔 5년 만에 첫 정규 앨범을 발매한다. 없는 길도 만들어 걸어온 위대한 소녀들은 음악사에 새로 쓰일 역사 대신 네 명 모두가 마음에 든 음악이 나올 때까지 오직 블랙핑크다운 것만 고민했다.\n",
      createdAt: "2020-11-26T00:42:09.000Z",
      playlistId: 9,
    },
    {
      id: 9,
      magazineName: "이달의 NEXTREND :\nXydo (시도)\n",
      magazineType: "PICK",
      description:
        "NEXTREND는 VIBE가 야심차게 준비한 신인 아티스트 발굴 프로젝트입니다. VIBE 사용자들의 청취이력을 바탕으로 매월 주목할만한 신인 아티스트를 선정합니다. 그 첫 번째 주인공은 알앤비/어반의 시대를 직접 이끌 주역으로 발돋움 하고 있는 매력적인 아티스트, Xydo (시도) 입니다.\n",
      createdAt: "2020-11-05T00:42:09.000Z",
      playlistId: 10,
    },
  ],
};
