import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import {
  ChatMessageContentProps,
  ChatMessageWrapperProps,
  DotProps,
} from "../../types";

export const ChatWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 100vh;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-top: none;
  border-bottom: none;
`;

export const ChatTopbar = styled.div`
  position: relative;
  width: 100%;
  height: 8vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

export const ChatName = styled.a`
  text-decoration: underline;
  margin-left: 5px;
  color: #4287f5;
  font-weight: bold;
`;

export const ChatMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 8vh;
  display: flex;
`;

export const ChatMenuItem = styled.button`
  width: 8vh;
  height: 8vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-left: 0.1vw solid rgba(0, 0, 0, 0.15);
  color: #4287f5;
  font-size: 2.4vh;
  outline: none;
  transition: opacity 0.15s ease-in-out;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ChatFooter = styled.form`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  border-top: 0.1vh solid rgba(0, 0, 0, 0.15);
`;

export const ChatMessagesWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 2vh 2.5vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatInput = styled.textarea`
  width: 85%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 1.5vh;
  padding: 2vh 2.5vh;
  font-size: 2vh;
  outline: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatFooterItem = styled.button`
  width: 6vh;
  height: 8vh;
  padding: 0;
  margin: 0;
  font-size: 3vh;
  color: rgba(0, 0, 0, 0.4);
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ChatFooterSender = styled(ChatFooterItem)`
  margin: 1vh;
  width: 6vh;
  height: 6vh;
  color: white;
  border-radius: 50%;
  text-align: center;
  font-size: 2vh;
  background-color: #4287f5;

  &:hover,
  &:focus {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const ChatMessageWrapper = styled.div<ChatMessageWrapperProps>`
  width: 100%;
  display: flex;
  align-items: ${({ isWriting }) => (isWriting ? "flex-end" : "flex-start")};
  justify-content: ${({ isReverse }) => (isReverse ? "flex-start" : "none")};
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "none")};
  margin-bottom: 1vh;
`;

export const ChatMessageContent = styled.div<ChatMessageContentProps>`
  margin-left: 1vw;
  margin-right: 1vw;
  padding: 2vh 2vh;
  max-width: 80%;
  background-color: ${({ isReverse }) => (isReverse ? "#4287f5" : "#c7d7f2")};
  display: flex;
  overflow-wrap: anywhere;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.8vh;
  border-radius: 10px;

  ${({ isReverse }) =>
    isReverse
      ? "border-bottom-right-radius: 0;"
      : "border-bottom-left-radius: 0;"}
  justify-self: flex-end;
`;

export const ChatImageWrapper = styled.div`
  width: 50px;
  text-align: center;
`;

export const ChatImage = styled(Image)`
  border-radius: 50%;
`;

const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }

  25% {
    margin-bottom: 5px;
  }

  50% {
    margin-bottom: 0;
  }

  75% {
    margin-top: 5px;
  }

  100% {
    margin-top: 0;
  }
`;

export const ChatAnimationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 10px;
`;

export const Dot = styled.span<DotProps>`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 5px;
  background-color: white;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

export const ChatWritingAnimation = () => {
  return (
    <ChatAnimationWrapper>
      <Dot delay="0s" />
      <Dot delay=".15s" />
      <Dot delay=".3s" />
    </ChatAnimationWrapper>
  );
};
