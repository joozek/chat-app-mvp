import Image from "next/image";
import styled from "styled-components";
import { UsersListItemProps } from "../../types";

export const UsersListWrapper = styled.div`
  width: 20vw;
  height: 100vh;
  min-width: 300px;
  color: black;
  overflow-y: scroll;
  background-color: #f5f7fa;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UsersListItem = styled.button<UsersListItemProps>`
  width: 100%;
  height: 10vh;
  max-height: 12vh;
  padding: 10% 7.5%;
  border: none;
  font-size: 1.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(255,255,255, 0.5)" : "transparent"};
  box-shadow: ${({ isActive }) =>
    isActive ? "0 5px 10px rgba(0, 0, 0, 0.15)" : "none"};
  border-right: ${({ isActive }) => (isActive ? "8px solid #4287f5" : "none")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const UserImageWrapper = styled.div`
  position: relative;
  width: 4vh;
  height: 4vh;
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const UserStar = styled.span`
  position: absolute;
  bottom: -0.75vh;
  right: -0.5vh;
  color: #ffd700;
  font-size: 2vh;
`;

export const UserSearchInputWrapper = styled.div`
  width: 20vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover,
  &:focus {
    cursor: default;
    background-color: transparent;
  }
`;

export const UserInputWithSearchIconWrapper = styled.div`
  width: 80%;
  height: 4vh;
  position: relative;
`;

export const SearchInputIconWrapper = styled.div`
  position: absolute;
  padding: 1vh 2vh;
  font-size: 1.8vh;
  color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const UserSearchInput = styled.input`
  z-index: 1;
  position: absolute;
  padding: 1vh 2vh;
  padding-left: 5vh;
  font-size: 1.5vh;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  border-radius: 1vh;

  &:hover,
  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
`;

export const BasicInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 10px;
`;

export const TimeSpan = styled.span`
  background-color: rgba(255, 255, 255, 1);
  padding: 0.5vh 1vh;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 10px;
  width: 60px;
`;
