import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../components/ChatList/ChatList";
// import ChatList from "../../components/chatList/ChatList";

const DashboardLayout = () => {
  // a new hook for navigation
  const navigate = useNavigate();
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
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
          fontSize: "32px",
          fontFamily: "monospace",
          fontWeight: "900",
        }}
      >
        Loading...
        <i className="fa fa-spin" aria-hidden="true" />{" "}
      </div>
    );

  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
