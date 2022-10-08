import axios from "axios";
import {
  ENDPOINT_WITH_USERS,
  TIME,
  USERLIST_MAX_MESSAGE_LENGTH,
  USERLIST_NO_TIME_INFO,
  USERS_COUNT,
} from "../constants";

export const getStringToDifference = (difference: number): string => {
  let day = 24,
    hour = 60,
    min = 60,
    sec = 1000;

  if (difference >= day * hour * min * sec) {
    return Math.round(difference / (hour * min * sec)) + TIME.DAYS;
  }

  if (difference >= hour * min * sec) {
    return Math.round(difference / (hour * min * sec)) + TIME.HOURS;
  }

  if (difference >= min * sec) {
    return Math.round(difference / (min * sec)) + TIME.MINS;
  }

  if (difference >= sec) {
    return Math.round(difference / sec) + TIME.SECS;
  }

  return USERLIST_NO_TIME_INFO;
};

export const getHourAndMinuteOf = (date: Date) => {
  const hour = date.getHours().toString();
  const min = date.getMinutes().toString();

  return `${hour.padStart(2, "0")}:${min.padStart(2, "0")}`;
};

export const differenceBetweenDates = (
  oldDate: Date,
  newDate: Date
): string => {
  return getStringToDifference(newDate.getTime() - oldDate.getTime());
};

export const getFormattedMessage = (message: string) => {
  if (message.length > USERLIST_MAX_MESSAGE_LENGTH) {
    return message.substring(0, USERLIST_MAX_MESSAGE_LENGTH) + "...";
  } else {
    return message;
  }
};

export const fetchUsers = async () => {
  const { data } = await axios.get(`${ENDPOINT_WITH_USERS}${USERS_COUNT}`);

  return data;
};
