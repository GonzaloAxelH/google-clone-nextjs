import React from "react";
import styled from "styled-components";
import ApplicationIcon from "../Icons/ApplicationIcon";
import ButtonRounded from "../Buttons/ButtonRounded/ButtonRounded";
const ApplicationModal = styled.div``;
const Aplications = () => {
  return (
    <ButtonRounded>
      <ApplicationIcon width="24px" />
      {/*<ApplicationModal></ApplicationModal> */}
    </ButtonRounded>
  );
};

export default Aplications;
