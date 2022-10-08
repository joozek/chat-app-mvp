import styled, { keyframes } from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: none;
  border: 5px solid transparent;
  border-left: 5px solid #4287f5;
  border-right: 5px solid #4287f5;
  animation: ${CircleAnimation} 1s ease-in-out infinite;
`;
