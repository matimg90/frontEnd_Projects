import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { auth, userExists } from "../firebaseConfig";
import {GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { AppContext } from '../App';
import { useEffect } from 'react';

export default function Register() {
    const {login, user} = React.useContext(AppContext)
    const [openLogin, setOpenLogin] = login;
    const [currentUser, setCurrentUser] = user;
    const [state, setCurrentState] = React.useState(0)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    useEffect(() => {
      setCurrentState(1)
      onAuthStateChanged(auth, async(user)=>{
        if(user){
          const isRegistered = await userExists(user.uid)
          if(isRegistered){
            setCurrentState(2)
            console.log("Logueado")
          }else{
            setCurrentState(3)
            console.log("Sin registrar")
          }
          console.log(user.displayName)
        }else{
          setCurrentState(4)
          console.log("No hay nadie logueado")
        }
      })
    }, [auth]);
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
    };
    async function handleOnClick(){
      const googleProvider = new GoogleAuthProvider();
      await signInWithGoogle(googleProvider);
  }
  async function signInWithGoogle(googleProvider){
      try {
          const res = await signInWithPopup(auth, googleProvider);
          handleClose();
        } catch (error) {
          console.error(error);
      }
  }
  async function register(email, password){
      try {
          const res = await regist  //(auth, email, password);
          console.log(res)
          handleClose();
        } catch (error) {
          console.error(error);
      }
  }
  function handleEmailChange(event){
    setEmail(event.target.value)
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
  }
  
    return (
      <div>
        <Dialog open={openLogin} onClose={handleClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Login
            </DialogContentText>
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
              autoFocus
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
            <Button onClick={()=>register(email, password)}>Register</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }