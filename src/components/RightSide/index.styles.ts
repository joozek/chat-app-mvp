import Image from "next/image";
import styled from "styled-components";

export const RightSideWrapper = styled.div`
  width: calc(100% - (300px + 60% + 8vh));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const UserInfoText = styled.p`
  margin: 0;
  margin-bottom: 0.5vh;
  color: rgba(0, 0, 0, 0.5);
`;

export const UserName = styled.p`
  font-size: 3vh;
  font-weight: bold;
  margin: 2vh;
  margin-top: 1vh;
  color: #4287f5;
`;
