import { KeyboardEvent, useState } from "react";
import {
  FaPaperclip,
  FaPaperPlane,
  FaPhone,
  FaRegStar,
  FaStar,
  FaVideo,
} from "react-icons/fa";
import { MdInsertEmoticon } from "react-icons/md";
import { ChatProps } from "../../types";
import Loading from "../Loading";
import {
  ChatName,
  ChatTopbar,
  ChatWrapper,
  ChatMenu,
  ChatMenuItem,
  ChatFooter,
  ChatMessagesWrapper,
  ChatInput,
  ChatFooterItem,
  ChatFooterSender,
  ChatImage,
  ChatImageWrapper,
  ChatMessageWrapper,
  ChatMessageContent,
} from "./index.styles";
import { getHourAndMinuteOf } from "../../utils";
import { ChatWritingAnimation } from "./index.styles";
import {
  CHAT_INPUT_PLACEHOLDER,
  DEFAULT_SENDER,
  SEND_KEY,
} from "../../constants";

const Chat = ({
  actualUser,
  setFavourite,
  sendMessage,
  isWriting,
}: ChatProps) => {
  const [message, setMessage] = useState<string>("");

  if (actualUser && actualUser.messages) {
    const { messages, isFavourite } = actualUser;

    const handleKeyClick = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        if (e.key === SEND_KEY) {
          setMessage("");
          sendMessage(message);
        }
      }
    };

    return (
      <ChatWrapper>
        <ChatTopbar>
          Chat with
          <ChatName>
            {actualUser.name.first + " " + actualUser.name.last}
          </ChatName>
          <ChatMenu>
            <ChatMenuItem>
              <FaPhone />
            </ChatMenuItem>
            <ChatMenuItem>
              <FaVideo />
            </ChatMenuItem>
            <ChatMenuItem onClick={() => setFavourite(actualUser)}>
              {isFavourite ? <FaStar /> : <FaRegStar />}
            </ChatMenuItem>
          </ChatMenu>
        </ChatTopbar>
        <ChatMessagesWrapper>
          {messages.length > 0 &&
            messages.map(({ content, createdBy, createdAt }) => (
              <ChatMessageWrapper
                key={createdBy + "-" + createdAt}
                isReverse={createdBy === DEFAULT_SENDER}
                isWriting={false}
              >
                <ChatImageWrapper>
                  <ChatImage
                    src={
                      createdBy !== DEFAULT_SENDER
                        ? actualUser.picture.thumbnail
                        : "/favicon.ico"
                    }
                    alt={actualUser.name.first}
                    width="100%"
                    height="100%"
                  />
                  {getHourAndMinuteOf(createdAt)}
                </ChatImageWrapper>
                <ChatMessageContent isReverse={createdBy === DEFAULT_SENDER}>
                  {content}
                </ChatMessageContent>
              </ChatMessageWrapper>
            ))}
          {isWriting && (
            <ChatMessageWrapper isReverse={false} isWriting={isWriting}>
              <ChatImageWrapper>
                <ChatImage
                  src={actualUser.picture.thumbnail}
                  alt={actualUser.name.first}
                  width="100%"
                  height="100%"
                />
              </ChatImageWrapper>
              <ChatMessageContent>
                <ChatWritingAnimation />
              </ChatMessageContent>
            </ChatMessageWrapper>
          )}
        </ChatMessagesWrapper>
        <ChatFooter onSubmit={(e) => e.preventDefault()}>
          <ChatInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => handleKeyClick(e)}
            placeholder={CHAT_INPUT_PLACEHOLDER}
          />
          <ChatFooterItem>
            <FaPaperclip />
          </ChatFooterItem>
          <ChatFooterItem>
            <MdInsertEmoticon />
          </ChatFooterItem>
          <ChatFooterSender
            onClick={(e) => {
              e.preventDefault();
              setMessage("");
              sendMessage(message);
            }}
          >
            <FaPaperPlane />
          </ChatFooterSender>
        </ChatFooter>
      </ChatWrapper>
    );
  } else {
    return <Loading />;
  }
};

export default Chat;
