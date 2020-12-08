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
  width: 964px;
`;

const StyledPagetitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin: 2em 0em 1em 0em;
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
  margin-top: 2.75em;
  margin-bottom: 4.5em;
`;

const StyledHotMagOverlay = styled.div`
  position: absolute;
  background-color: #f2f2f2;
  width: calc(100vw - 15em);
  top: -4em;
  z-index: 1;
  height: 30em;
`;

const StyledSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(33%, auto));
  grid-template-rows: repeat(auto-fill, minmax(20%, auto));
  grid-auto-flow: row;
  row-gap: 1rem;
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

const IndexPage = memo(({ magazines, className }: any) => {
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
        <HotMagCard />
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

  const VIBE_ID = 1;
  const dataLength = 10;

  try {
    const res = await fetch(`${apiUrl}:${apiPort}/api/magazines?limit=${dataLength}`);
    const magazines = await res.json();

    return {
      props: {
        magazines: magazines.Magazines,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return { props: {} };
}
