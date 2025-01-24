import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // a new hook for navigation
  const navigate = useNavigate();

  const { userId, isLoaded } = useAuth();
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/login");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded)
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  return <div>Dashboard</div>;
};

export default Dashboard;
