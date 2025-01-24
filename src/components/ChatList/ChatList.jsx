import { Link } from "react-router-dom";
import "./chatList.css";
// import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["userChats"],
  //   queryFn: () =>
  //     fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
  //       credentials: "include",
  //     }).then((res) => res.json()),
  // });

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">
        Create a new Chat{" "}
        <span
          style={{
            width: "25px",
            height: "25px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #fff",
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "bolder" }}>+</span>
        </span>
      </Link>
      <Link to="/">Explore Chatly AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {/* {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))} */}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Lama AI Pro(Coming Soon)</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
