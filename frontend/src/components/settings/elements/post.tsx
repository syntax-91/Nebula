import { Switcher } from "../../../shared/UI/Switcher";

export default function PostSettings() {
  return (
    <div className="postSettings">
      <p>посты</p>

      <Switcher value={true} />
    </div>
  );
}
