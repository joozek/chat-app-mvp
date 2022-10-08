import { MenuItem, MenuWrapper, NavbarWrapper } from "./index.styles";
import {
  FaHome,
  FaPencilAlt,
  FaUser,
  FaCommentAlt,
  FaCopy,
} from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <MenuWrapper>
        <MenuItem>
          <FaHome />
        </MenuItem>
        <MenuItem>
          <FaPencilAlt />
        </MenuItem>
        <MenuItem>
          <FaUser />
        </MenuItem>
        <MenuItem isActive={true}>
          <FaCommentAlt />
        </MenuItem>
        <MenuItem>
          <FaCopy />
        </MenuItem>
        <MenuItem>
          <IoIosSettings />
        </MenuItem>
      </MenuWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
