import React from "react";
import styled from "styled-components";
import LOGO from "./../assets/image/logo.png";
import CALL from "./../assets/image/call.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 100%;
  height: auto;
  margin-right: 10px;
`;

const PhoneIconContainer = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid #f2b304;
  box-shadow: 4px 4px 14px 0px #0000000f;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Header: React.FC = () => {
  return (
    <div className="container-fluid px-5">
      <HeaderContainer>
        <LogoContainer>
          <LogoIcon src={LOGO} alt="BHIVE Icon" />
        </LogoContainer>
        <PhoneIconContainer>
          <PhoneIcon src={CALL} alt="Phone" />
        </PhoneIconContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
