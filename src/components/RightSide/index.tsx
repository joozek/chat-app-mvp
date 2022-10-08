import { RightSideProps } from "../../types";
import {
  RightSideWrapper,
  UserImage,
  UserImageWrapper,
  UserInfo,
  UserInfoText,
  UserName,
} from "./index.styles";

const RightSide = ({ actualUser }: RightSideProps) => {
  const {
    name: { first, last },
    location: {
      street: { name, number },
      city,
    },
    email,
    cell,
    phone,
    picture: { medium },
  } = actualUser;

  return (
    <RightSideWrapper>
      <UserImageWrapper>
        <UserImage src={medium} alt={first + " " + last} layout="fill" />
      </UserImageWrapper>
      <UserInfo>
        <UserName>{first + " " + last}</UserName>
        <UserInfoText>{email}</UserInfoText>
        <UserInfoText>{name + " " + number + " " + city}</UserInfoText>
        <UserInfoText>{cell}</UserInfoText>
        <UserInfoText>{phone}</UserInfoText>
      </UserInfo>
    </RightSideWrapper>
  );
};

export default RightSide;
