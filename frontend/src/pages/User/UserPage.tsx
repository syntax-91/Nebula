import { useParams } from "react-router-dom";
import { HeaderPage } from "../../Widgets/HeaderPage/HeaderPage";
import UserCard from "../../Widgets/Cards/userCard/userCard";
import "./styles.scss";
import { useEffect, useState } from "react";
import { userDataAPI } from "./api";
import { modalStore } from "../../app/store/modalStore";
import { Modal } from "../../components/modal/modal";
import { observer } from "mobx-react-lite";

interface IUserData {
  displayName: string;
  username: string;
  bio: string;
}

function UserPage() {
  const { username } = useParams();
  //const [posts, setPosts] = useState<IPosts[]>([]);
  //const [lastPostId, setLastPostId] = useState<number>();
  //const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState<IUserData>();

  useEffect(() => {
    userDataAPI({
      username: username || "",
      setPosts: [],
      setLastPostId: 0,
    }).then((e) => {
      setRes(e);
    });
  }, []);

  return (
    <div className="userPage">
      {modalStore.isOpenModal && <Modal />}
      <HeaderPage isBack={true} ch={<h2>{username}</h2>} />

      <div className="center cardContainer">
        <UserCard
          displayName={res?.displayName || ""}
          username={username || ""}
          bio={res?.bio || ""}
        />
      </div>
    </div>
  );
}

export default observer(UserPage);
