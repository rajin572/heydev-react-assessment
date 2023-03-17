import React from "react";
import About from "./About";
import Banner from "./Banner";

const LandingPage = () => {

  // const { user } = useContext(AuthContext);
  // console.log(user);
  // const [log, setLog] = useState('')
  const getName=localStorage.getItem("nameData")
  // setLog(getName)
  console.log(getName);

  return (
    <div>
      <Banner />
      <About />
    </div>
  );
};

export default LandingPage;
