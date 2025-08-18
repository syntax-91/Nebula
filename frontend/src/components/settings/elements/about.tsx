import { aboutConfig } from "../../../app/config/aboutConfig";
import { modalStore } from "../../../app/store/modalStore";

export function About() {
  const handleClickEmail = () => {
    navigator.clipboard.writeText(aboutConfig.email);
    modalStore.run("скопировано");
  };

  return (
    <div className="about">
      <h2>о проекте</h2>
      <p className="text">{aboutConfig.text}</p>
      <span onClick={handleClickEmail} className="el email cp">
        {aboutConfig.email}
      </span>
    </div>
  );
}
