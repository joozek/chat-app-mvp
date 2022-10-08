import { ChangeEventHandler } from "react";

export type User = {
  login: {
    uuid: string;
    username: string;
  };
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
    medium: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  phone: string;
  cell: string;
  messages: Message[];
  photoURL: string;
  isFavourite: boolean;
};

export type Message = {
  content: string;
  createdAt: Date;
  createdBy: string;
};

export type ChatMessageWrapperProps = {
  isReverse: boolean;
  isWriting?: boolean;
};

export type ChatMessageContentProps = {
  isReverse?: boolean;
};

export type DotProps = {
  delay: string;
};

export type ChatProps = {
  actualUser: User | undefined;
  setFavourite: Function;
  sendMessage: Function;
  isWriting: boolean;
};

export type MenuItemProps = {
  isActive?: boolean;
};

export type RightSideProps = {
  actualUser: User;
};

export type UsersListItemProps = {
  isActive?: boolean;
};

export type UserListProps = {
  users: User[];
  setActualUser: Function;
  actualUser: User;
  handleSearchUser: ChangeEventHandler<HTMLInputElement>;
};

export type Time = {
  uuid: string;
  time: string;
};
