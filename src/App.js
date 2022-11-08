import './App.css';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Chat from './components/Chat';
import { useState } from 'react';

function App() {
  const [isLogged,setisLogged] = useState(false);
  
  if(isLogged){
    return(
      <Chat />
    )
  }
  else{
    return(
      <LoginScreen setisLogged={setisLogged} isLogged={isLogged} />
    )
  }

}
export default App;
