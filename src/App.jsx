import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Privateroute from "./routes/Privateroute";
import ChatScreen from "./component/ChatScreen";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/">

          
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={< Privateroute component={< ChatScreen />} />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
