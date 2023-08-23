import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import UserName from "./Components/UserName/UserName";
import Password from "./Components/Password/Password";
import Reset from "./Components/Reset/Reset";
import Recovery from "./Components/Recovery/Recovery";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserName/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/username" element={<UserName />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="/password" element={<Password />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
