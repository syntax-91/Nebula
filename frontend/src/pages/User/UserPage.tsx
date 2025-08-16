import { useParams } from "react-router-dom";
import { HeaderPage } from "../../Widgets/HeaderPage/HeaderPage";
import UserCard from "../../Widgets/Cards/userCard/userCard";
import "./styles.scss";
import { useEffect, useState } from "react";
import type { IPosts } from "../../shared/types/types";
import { userDataAPI } from "./api";

export default function UserPage() {
  const { username } = useParams();
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [lastPostId, setLastPostId] = useState<number>();

  useEffect(() => {
    userDataAPI({
      username: username || "",
      setPosts: setPosts,
      setLastPostId: setLastPostId,
    });
  }, []);

  return (
    <div className="userPage">
      <HeaderPage isBack={true} ch={<h2>{username}</h2>} />

      <div className="center cardContainer">
        <UserCard username={username || ""} />
      </div>
    </div>
  );
}
