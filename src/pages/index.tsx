import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEventHandler, useEffect, useState } from "react";
import Chat from "../components/Chat";
import Loading from "../components/Loading";
import RightSide from "../components/RightSide";
import UsersList from "../components/UsersList";
import {
  APP_TITLE,
  AUTO_REPLAY_PREFFIX,
  AUTO_SENDER,
  DEFAULT_SENDER,
  ICON_FILE,
  SITE_DESCRIPTION,
} from "../constants";
import BasicLayout from "../layouts/BasicLayout";
import { User } from "../types";
import { fetchUsers } from "../utils";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [actualUser, setActualUser] = useState<User>();
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isWriting, setIsWriting] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        const users = data.results.map((user: User) => {
          return { ...user, messages: [], isFavourite: false };
        });

        setUsers(users);
        setActualUser(users[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearchUser: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filteredUsers = users.filter(({ name: { first, last } }) => {
      return (
        !(first + " " + last).search(e.target.value) ||
        !first.search(e.target.value) ||
        !last.search(e.target.value)
      );
    });

    setFilteredUsers(filteredUsers);
  };

  const handleSetFavourite = (userToFavourite: User) => {
    const usersWithFavourite = users
      .map((user) => {
        const {
          login: { uuid },
          isFavourite,
        } = user;

        if (uuid === userToFavourite.login.uuid) {
          return { ...user, isFavourite: !isFavourite };
        } else {
          return { ...user };
        }
      })
      .sort((a) => (a.isFavourite ? -1 : 1));

    setUsers(usersWithFavourite);
    setFilteredUsers(usersWithFavourite);
    setActualUser(
      usersWithFavourite.find(
        (user) => user.login.uuid === userToFavourite.login.uuid
      )
    );
  };

  const handleSetActualUser = (user: User) => {
    setActualUser(
      users.find(({ login: { uuid } }) => uuid === user.login.uuid)
    );
  };

  const handleSendMessage = (message: string, toAnswer: boolean = true) => {
    if (message.length <= 0) return;

    if (actualUser) {
      const messages = actualUser.messages;

      messages.push({
        createdBy: toAnswer ? DEFAULT_SENDER : AUTO_SENDER,
        createdAt: new Date(),
        content: message,
      });

      const userWithMessages = {
        ...actualUser,
        messages,
      };

      const newUsersWithActualMessages = users.map((user) => {
        if (user.login.uuid === actualUser.login.uuid) {
          return userWithMessages;
        } else {
          return user;
        }
      });

      setUsers(newUsersWithActualMessages);
      setFilteredUsers(newUsersWithActualMessages);
      setActualUser(userWithMessages);

      setIsWriting(true);

      if (toAnswer) {
        const generateTime = 5000 + Math.random() * 10 * 500;

        setTimeout(() => {
          handleSendMessage(AUTO_REPLAY_PREFFIX + message, false);
          setIsWriting(false);
        }, generateTime);
      }
    }
  };

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={ICON_FILE} />
      </Head>
      <BasicLayout>
        {users && actualUser ? (
          <>
            <UsersList
              users={filteredUsers.length > 0 ? filteredUsers : users}
              actualUser={actualUser}
              setActualUser={handleSetActualUser}
              handleSearchUser={handleSearchUser}
            />
            <Chat
              actualUser={actualUser}
              setFavourite={handleSetFavourite}
              sendMessage={handleSendMessage}
              isWriting={isWriting}
            />
            <RightSide actualUser={actualUser} />
          </>
        ) : (
          <Loading />
        )}
      </BasicLayout>
    </>
  );
};

export default Home;
