import React, { ChangeEvent, memo, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import HotMagCard from "../../components/HotMagCard";
import {
  AllMagLabel,
  GenreMagLabel,
  PickMagLabel,
  SpecialMagLabel,
} from "../../components/MagLabel";
import { Magazine } from "../../interfaces";

const MagazineContainer = styled.div`
  width:  100%;
`;

const StyledPagetitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0rem 1rem 0rem;
`;

const StyledMagazineRadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  & input {
    display: none;
  }
`;

const StyledHotMag = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2.75rem 1rem 3rem 1rem;
`;

const StyledSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(33%, auto));
  grid-template-rows: repeat(auto-fill, minmax(20%, auto));
  grid-auto-flow: row;
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const AllMagLabelToggle = styled(AllMagLabel)<{ magType: string; className: string }>`
  background-color: ${({ magType }) => (magType === "ALL" ? "#FF0350" : "#fff")};
  color: ${({ magType }) => (magType === "ALL" ? "#fff" : "#000")};
  border: ${({ magType }) => (magType === "PICK" ? "1px solid transparent" : "1px solid #dddddd")};
`;

const SpecialMagLabelToggle = styled(SpecialMagLabel)<{ magType: string; className: string }>`
  background-color: ${({ magType }) => (magType === "SPECIAL" ? "" : "#fff")};
  background-image: ${({ magType }) => (magType === "SPECIAL" ? "linear-gradient(#e66465, #9198e5)" : "none")};
  color: ${({ magType }) => (magType === "SPECIAL" ? "#fff" : "#000")};
  border: ${({ magType }) => (magType === "SPECIAL" ? "1px solid transparent" : "1px solid #dddddd")};
`;

const PickMagLabelToggle = styled(PickMagLabel)<{ magType: string; className: string }>`
  background-color: ${({ magType }) => (magType === "PICK" ? "#FF0350" : "#fff")};
  color: ${({ magType }) => (magType === "PICK" ? "#fff" : "#000")};
  border: ${({ magType }) => (magType === "PICK" ? "1px solid transparent" : "1px solid #dddddd")};
`;

const GenreMagLabelToggle = styled(GenreMagLabel)<{ magType: string; className: string }>`
  background-color: ${({ magType }) => (magType === "GENRE" ? "#8B02ED" : "#fff")};
  color: ${({ magType }) => (magType === "GENRE" ? "#fff" : "#000")};
  border: ${({ magType }) => (magType === "GENRE" ? "1px solid transparent" : "1px solid #dddddd")};
`;

const IndexPage = memo(({ magazines, HotMag, className }: any) => {
  const [magType, setMagType] = useState("ALL");

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMagType(e.target.value);
  };

  return (
    <MagazineContainer>
      <StyledPagetitle>VIBE MAG</StyledPagetitle>
      <StyledMagazineRadioContainer>
        <label htmlFor="magazineAll">
          <AllMagLabelToggle magType={magType} className={className} />
          <input
            type="radio"
            name="magazine-radio"
            value="ALL"
            id="magazineAll"
            checked={magType === "ALL"}
            onChange={handleTypeChange}
          />
        </label>
        <label htmlFor="magazineSpecial">
          <SpecialMagLabelToggle magType={magType} className={className} />
          <input
            type="radio"
            name="magazine-radio"
            value="SPECIAL"
            id="magazineSpecial"
            checked={magType === "SPECIAL"}
            onChange={handleTypeChange}
          />
        </label>
        <label htmlFor="magazinePick">
          <PickMagLabelToggle magType={magType} className={className} />
          <input
            type="radio"
            name="magazine-radio"
            value="PICK"
            id="magazinePick"
            checked={magType === "PICK"}
            onChange={handleTypeChange}
          />
        </label>
        <label htmlFor="magazineGenre">
          <GenreMagLabelToggle magType={magType} className={className} />
          <input
            type="radio"
            name="magazine-radio"
            value="GENRE"
            id="magazineGenre"
            checked={magType === "GENRE"}
            onChange={handleTypeChange}
          />
        </label>
      </StyledMagazineRadioContainer>
      <StyledHotMag>
        <HotMagCard magazine={HotMag} />
      </StyledHotMag>
      <StyledSection>
        {magazines
          .filter((value: Magazine) => magType === "ALL" || value.magazineType === magType)
          .map((value: Magazine) => (
            <Card varient="magazineBig" dataType="magazine" rawData={value} />
          ))}
      </StyledSection>
    </MagazineContainer>
  );
});

export default IndexPage;

export async function getStaticProps() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const dataLength = 10;

  try {
    const res = await fetch(`${apiUrl}:${apiPort}/api/magazines?limit=${dataLength}`);
    const magazines = await res.json();

    const HotMag = magazines.Magazines.shift();

    return {
      props: {
        magazines: magazines.Magazines,
        HotMag
      },
    };
  } catch (err) {
    console.log(err);
  }
  return { props: {} };
}
