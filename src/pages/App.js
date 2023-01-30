import "../App.css";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import Chat from "./Chat";
import { useState } from "react";
import Navbar from "../components/Navbar";
import YourProfile from "./YourProfile";

function App() {
  const [isLogged, setisLogged] = useState(false);
  const [registerSetter, setregisterSetter] = useState(false);
  const [profileComp, setprofileComp] = useState(false);

  if (isLogged) {
    if (profileComp) {
      return <YourProfile setprofileComp={setprofileComp} />;
    } else {
      return (
        <Chat
          setisLogged={setisLogged}
          isLogged={isLogged}
          setprofileComp={setprofileComp}
        />
      );
    }
  } else {
    if (registerSetter) {
      return <RegisterScreen setregisterSetter={setregisterSetter} />;
    } else {
      return (
        <LoginScreen
          setisLogged={setisLogged}
          setregisterSetter={setregisterSetter}
        />
      );
    }
  }
}
export default App;
