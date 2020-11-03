import React from "react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "./Profile";

const Header = ({ props }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav>
        <div className="nav-wrapper teal">
          <a href="/" className="brand-logo center hide-on-small-only">
            Rate My Realtor.com
          </a>
          <a href="/" className="brand-logo center hide-on-med-and-up">
            RMR.com
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to={"/realtor"}>Realtors</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {" "}
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton style={{ paddingLeft: "70px" }} />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </>
  );
};

export default Header;
