import "./Styles.scss";
import { Input } from "../../shared/UI/Input";
import { useEffect, useState } from "react";
import { useDebounce } from "../../shared/utils/hooks/useDebounce";
import { QueryAPI } from "./api";
import { HeaderPage } from "../../Widgets/HeaderPage/HeaderPage";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../shared/UI/Loader";
import clsx from "clsx";
import { userStore } from "../../app/store/user/userStore";

interface IRes {
  username: string;
  ava: string;
}

export default function SearchPage() {
  const n = useNavigate();

  const [res, setRes] = useState<IRes[]>([]);

  const [query, setQuery] = useState("");
  const queryDebounced = useDebounce(query, 300);

  useEffect(() => {
    if (query.length) {
      QueryAPI(query, "user").then((res) => {
        setRes(res);
      });
    }
  }, [queryDebounced]);

  const handleClickRes = (username: string) => {
    n(`/u/${username}`);
  };

  return (
    <div>
      <HeaderPage
        isChWFull={true}
        ch={
          <Input
            className="w_full"
            value={query}
            onChange={(e) => setQuery(e)}
          />
        }
      />

      <div
        className={clsx("resContainer", userStore.isBlockBackground && "bb")}
      >
        {/* res */}
        {res.map((e, idx) => (
          <div
            onClick={() => handleClickRes(e.username)}
            className="el cp ttb resEl"
            key={idx}
          >
            <div className="ava"></div>
            <div className="username">{e.username}</div>
          </div>
        ))}

        {query.length === 0 && res.length === 0 && (
          <div>
            <h2>Введите текст..</h2>
          </div>
        )}

        {query.length > 0 && res.length === 0 && (
          <div>
            <h2>ничего не найдено..</h2>
          </div>
        )}
      </div>
    </div>
  );
}
