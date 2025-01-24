import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      Homepage
      <Link to={"/dashboard"}>Temporary</Link>
    </div>
  );
};

export default Homepage;
