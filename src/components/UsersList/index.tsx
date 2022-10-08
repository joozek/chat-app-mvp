import { useEffect, useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import {
  USERLIST_NO_MESSAGE_INFO,
  USERLIST_NO_TIME_INFO,
  USERLIST_SEARCH_PLACEHOLDER,
} from "../../constants";
import { Message, Time, User, UserListProps } from "../../types";
import { differenceBetweenDates, getFormattedMessage } from "../../utils";
import Loading from "../Loading";
import {
  BasicInfo,
  SearchInputIconWrapper,
  TimeSpan,
  UserImage,
  UserImageWrapper,
  UserInputWithSearchIconWrapper,
  UserSearchInput,
  UserSearchInputWrapper,
  UsersListItem,
  UsersListWrapper,
  UserStar,
} from "./index.styles";

const UsersList = ({
  users,
  actualUser,
  setActualUser,
  handleSearchUser,
}: UserListProps) => {
  const [times, setTimes] = useState<Time[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimes: Time[] = users.map((user: User) => {
        if (user.messages.length > 0) {
          return {
            uuid: user.login.uuid,
            time: differenceBetweenDates(
              user.messages[user.messages.length - 1].createdAt,
              new Date()
            ),
          };
        } else return { uuid: "", time: USERLIST_NO_TIME_INFO };
      });

      setTimes(newTimes);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [users]);

  return (
    <UsersListWrapper>
      <UserSearchInputWrapper>
        <UserInputWithSearchIconWrapper>
          <SearchInputIconWrapper>
            <FaSearch />
          </SearchInputIconWrapper>
          <UserSearchInput
            onChange={handleSearchUser}
            type="search"
            placeholder={USERLIST_SEARCH_PLACEHOLDER}
          />
        </UserInputWithSearchIconWrapper>
      </UserSearchInputWrapper>
      {users.length > 0 ? (
        users.map((user) => {
          const fullName = user.name.first + " " + user.name.last;
          const lastMessage: Message = user.messages[user.messages.length - 1];

          return (
            <UsersListItem
              key={user.login.uuid}
              isActive={user.login.uuid === actualUser.login.uuid}
              onClick={() => setActualUser(user)}
            >
              <UserImageWrapper>
                <UserImage
                  src={user.picture.thumbnail}
                  alt={fullName}
                  width="100%"
                  height="100%"
                />
                <UserStar>{user.isFavourite ? <FaStar /> : null}</UserStar>
              </UserImageWrapper>

              <BasicInfo>
                <strong>{fullName}</strong>
                {user.messages.length > 0
                  ? getFormattedMessage(lastMessage.content)
                  : USERLIST_NO_MESSAGE_INFO}
              </BasicInfo>
              <TimeSpan>
                {lastMessage
                  ? times.find((time) => time.uuid === user.login.uuid)?.time
                  : USERLIST_NO_TIME_INFO}
              </TimeSpan>
            </UsersListItem>
          );
        })
      ) : (
        <Loading />
      )}
    </UsersListWrapper>
  );
};

export default UsersList;
