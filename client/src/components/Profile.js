import React from "react";
import styled from "@emotion/styled";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogoutButton";

const ProfileWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.img`
  width: 60px;
  height: 60px;
  padding-right: 5px;
`;

const EmailWrapper = styled.p`
  line-height: 0px;
`;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <ProfileWrapper>
        <ImageWrapper src={user.picture} alt={user.name} />
        <EmailWrapper>{user.email}</EmailWrapper>
        <LogoutButton />
      </ProfileWrapper>
    )
  );
};

export { Profile };
