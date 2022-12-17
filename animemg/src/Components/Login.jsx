import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import { userExists, registerNewUser } from "../firebaseConfig";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { AppContext } from "../App";
import { useEffect } from "react";
import { Alert, AlertTitle, Typography } from "@mui/material";

export default function Login() {
  const { login, user } = React.useContext(AppContext);
  const [openLogin, setOpenLogin] = login;
  // const auth = getAuth();
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = user;
  // eslint-disable-next-line
  const [state, setCurrentState] = React.useState(0);
  const [showAlert, setshowAlert] = React.useState(0);
  // const [alertType, setAlertType] = React.useState("");
  const [alertMsg, setAlertMsg] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  useEffect(() => {
    setCurrentState(1);
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        if (isRegistered) {
          setCurrentState(2);
          console.log("Logueado");
        } else {
          setCurrentState(3);
          console.log("Sin registrar");
        }
        console.log(user.displayName);
      } else {
        setCurrentState(4);
        console.log("No hay nadie logueado");
      }
    }); // eslint-disable-next-line
  }, [getAuth()]);
  /**
   * state 0: initialized
   * state 1: loading
   * state 2: logged in
   * state 3: logged in but unregistered
   * state 4: not logged in
   */
  // async function handleUserStateChanged(user){
  //   if(user){
  //     const isRegistered = await userExists(user.uid)
  //     if(isRegistered){
  //       setCurrentState(2)
  //       console.log("Logueado")
  //     }else{
  //       setCurrentState(3)
  //       console.log("Sin registrar")
  //     }
  //     console.log(user.displayName)
  //   }else{
  //     setCurrentState(4)
  //     console.log("No hay nadie logueado")
  //   }
  // };

  const handleClose = () => {
    setOpenLogin(false);
    setshowAlert(false);
    setAlertMsg("");
  };
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }
  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(getAuth(), googleProvider);
      setCurrentUser(res.user);
      registerNewUser(res.user)
      console.log(res);
      handleClose();
    } catch (error) {
      setshowAlert(true);
      // setAlertType("error");
      setAlertMsg(error.message);
      console.error(error);
    }
  }
  async function signIn(email, password) {
    try {
      const res = await signInWithEmailAndPassword(getAuth(), email, password);
      setCurrentUser(res.user);
      console.log(res);
      handleClose();
    } catch (error) {
      setshowAlert(true);
      // setAlertType("error");
      setAlertMsg(error.message);
      console.error(error);
    }
  }
  async function createUser(email, password) {
    try {
      const res = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      setCurrentUser(res.user);
      console.log(res);
      handleClose();
    } catch (error) {
      setshowAlert(true);
      // setAlertType("error");
      setAlertMsg(error.message);
      console.error(error);
    }
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <Dialog open={openLogin} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        {showAlert && (
          <Alert severity="error" onClose={() => setshowAlert(false)}>
            <AlertTitle>Error</AlertTitle>
            <Typography>{alertMsg}</Typography>
          </Alert>
        )}
        <DialogContent>
          {/* <DialogContentText>
            Login
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleEmailChange}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handlePasswordChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => signIn(email, password)}>Login</Button>
          <Button onClick={()=>handleOnClick()}>Login with Google</Button>
          <Button onClick={() => createUser(email, password)}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
