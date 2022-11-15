import '../App.css';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Chat from './Chat';
import { useState } from 'react';
import Navbar from '../components/Navbar';

function App() {
  const [isLogged,setisLogged] = useState(false);
  const [registerSetter, setregisterSetter] = useState(false);
  
  if(isLogged){
    return(
      <Chat setisLogged={setisLogged} isLogged={isLogged} />
    )
  }
  else{
    if(registerSetter){
      return <RegisterScreen setregisterSetter={setregisterSetter}/>
    }
    else {
      return(
        <LoginScreen setisLogged={setisLogged} setregisterSetter={setregisterSetter}/>
      )
    }
  }

}
export default App;
