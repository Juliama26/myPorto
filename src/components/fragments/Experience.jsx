import {Link} from "react-router-dom";
import ContentItems from "../elemets/IndexExper";
const FirstExperiment = () => {
  return (
    <Link to={"#"}>
      <ContentItems
        title="Front-End Engineering Bootcamp"
        subTitle="Studi Independen → Ruangguru"
        times="Feb - Juni 2023"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        perferendis fuga aliquid quidem maxime sapiente quas illo excepturi
        assumenda id amet accusamus. Debitis ea laboriosam doloribus sapiente
        omnis vitae rem."
        skills="JavaScript | Tailwind | React"
      />
    </Link>
  );
};
const SecondExperiment = () => {
  return (
    <Link to={"#"}>
      <ContentItems
        title="Asisten Pendata Cagar Budaya"
        subTitle="Magang → Balai Pelestarian Kebudayaan Wilayah XXIII Papua Barat dan Papua Barat Daya"
        times="Agu - Des 2023"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        perferendis fuga aliquid quidem maxime sapiente quas illo excepturi
        assumenda id amet accusamus. Debitis ea laboriosam doloribus sapiente
        omnis vitae rem."
        skills="JavaScript | Tailwind | React"
      />
    </Link>
  );
};
const ThirdExperiment = () => {
  return (
    <Link to={"#"}>
      <ContentItems
        title="Back-End Engineering"
        subTitle="Bootcamp → Binar Academy"
        times="Jan - Juni 2024"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        perferendis fuga aliquid quidem maxime sapiente quas illo excepturi
        assumenda id amet accusamus. Debitis ea laboriosam doloribus sapiente
        omnis vitae rem."
        skills="JavaScript | Tailwind | React"
      />
    </Link>
  );
};
const FourthExperiment = () => {};
const FifthExperiment = () => {};

export {
  FirstExperiment,
  SecondExperiment,
  ThirdExperiment,
  FourthExperiment,
  FifthExperiment,
};
