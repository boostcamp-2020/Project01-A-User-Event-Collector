import React, { FC, useState } from "react";
import styled from "styled-components";

const StyleCheckBox = styled.div`
  padding: 10px;
`;

const CheckBox: any = () => {
  const test = () => console.log("test");
  return (
    <StyleCheckBox>
      <input type="checkbox" onChange={test} />
    </StyleCheckBox>
  );
};

export default CheckBox;
