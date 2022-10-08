import styled from "styled-components";
import { MenuItemProps } from "../../types";

export const NavbarWrapper = styled.div`
  width: 8vh;
  height: 100vh;
  background-color: #4287f5;
`;

export const MenuWrapper = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.button<MenuItemProps>`
  width: 100%;
  height: 8vh;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(255,255,255, 0.15)" : "transparent"};
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5vw;
  border-bottom: 0.05vw solid rgba(255, 255, 255, 0.6);
  outline: none;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
    cursor: pointer;
  }
`;
