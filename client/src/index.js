import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="pwrclaire.auth0.com" // TODO: move to ENV file
    clientId="espS1Vjw3w2H2ITbIRFe0o2otPAR0Fop"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
