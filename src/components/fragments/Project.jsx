import {Link} from "react-router-dom";
import ContentItems from "../elemets/IndexProj";

const FirstProject = () => {
  return (
    <Link to={"#"}>
      <ContentItems
        title="Front-End Engineering Bootcamp"
        subTitle="Studi Independen → Ruangguru"
        src="./logo.png"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        perferendis fuga aliquid quidem maxime sapiente quas illo excepturi
        assumenda id amet accusamus. Debitis ea laboriosam doloribus sapiente
        omnis vitae rem."
        skills="JavaScript | Tailwind | React"
      />
    </Link>
  );
};
const SecondProject = () => {
  return (
    <Link to={"#"}>
      <ContentItems
        title="Front-End Engineering Bootcamp"
        subTitle="Studi Independen → Ruangguru"
        src="./logo.png"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        perferendis fuga aliquid quidem maxime sapiente quas illo excepturi
        assumenda id amet accusamus. Debitis ea laboriosam doloribus sapiente
        omnis vitae rem."
        skills="JavaScript | Tailwind | React"
      />
    </Link>
  );
};
const ThirdProject = () => {
  return (
    <Link to={"#"}>
      <ContentItems
        title="Front-End Engineering Bootcamp"
        subTitle="Studi Independen → Ruangguru"
        src="./logo.png"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        perferendis fuga aliquid quidem maxime sapiente quas illo excepturi
        assumenda id amet accusamus. Debitis ea laboriosam doloribus sapiente
        omnis vitae rem."
        skills="JavaScript | Tailwind | React"
      />
    </Link>
  );
};
const FourthProject = () => {};
const FifthProject = () => {};

export {FirstProject, SecondProject, ThirdProject, FourthProject, FifthProject};
