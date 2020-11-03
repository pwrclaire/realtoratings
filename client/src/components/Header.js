import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton";

const Nav = styled.nav`
  display: flex;
  background-color: teal;
  justify-content: space-between;
`;

const NavChild = styled.span`
  padding: 2px;
`;

const Header = ({ props }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Nav>
      <NavChild>
        {" "}
        {isAuthenticated ? (
          <>
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}
      </NavChild>
      <NavChild>
        <a href="/" className="brand-logo center hide-on-small-only">
          Rate My Realtor.com
        </a>
        <a href="/" className="brand-logo center hide-on-med-and-up">
          RMR.com
        </a>
      </NavChild>

      <NavChild>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to={"/realtor"}>Realtors</Link>
          </li>
        </ul>
      </NavChild>
    </Nav>
  );
};

export default Header;
