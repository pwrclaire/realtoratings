import { useAuth0 } from "@auth0/auth0-react";

const LoginStatus = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated || false;
};

const isAuthenticated = LoginStatus();

export { isAuthenticated };
