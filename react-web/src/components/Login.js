import { Box, Layer } from "grommet";

import { auth } from "../config/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { StyledFirebaseAuth } from "react-firebaseui";

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

/**
 * Sign In Layer
 * @param  {toggleDialog} toggleDialog should toggle between view/hide this dialog.
 */
const Login = ({ toggleDialog }) => {
  return (
    <Layer position="center" onClickOutside={toggleDialog} onEsc={toggleDialog}>
      <Box
        pad="medium"
        gap="small"
        width="medium"
        justify="center"
        align="center"
        direction="column"
        fill
      >
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          pad={{ top: "medium", bottom: "small" }}
        >
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
        </Box>
      </Box>
    </Layer>
  );
};

export default Login;
