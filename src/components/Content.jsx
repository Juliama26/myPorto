import React from "react";
import {
  FirstExperiment,
  SecondExperiment,
  ThirdExperiment,
} from "./fragments/Experience";
import {FirstProject, SecondProject, ThirdProject} from "./fragments/Project";

export default function Content() {
  return (
    <div className="flex flex-col min-h-screen gap-y-5 px-2 md:px-14 lg:pr-28 lg:pl-0 pb-7 md:pb-14 lg:pb-28">
      <section className="flex flex-col gap-y-3 lg:h-screen pt-10 lg:pt-32">
        <h2 className="uppercase py-2 font-semibold bg-0% sticky top-0 lg:hidden">
          About
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          illo animi pariatur consequuntur id voluptatum libero, harum dolore
          nostrum corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          illo animi pariatur consequuntur id voluptatum libero, harum dolore
          nostrum corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          illo animi pariatur consequuntur id voluptatum libero, harum dolore
          nostrum corporis!
        </p>
      </section>
      <section className="flex flex-col gap-y-3 md:gap-y-6 lg:gap-y-9">
        <h2 className="uppercase py-2 font-semibold bg-0% sticky top-0 lg:hidden">
          Experience
        </h2>
        <ThirdExperiment />
        <SecondExperiment />
        <FirstExperiment />
      </section>
      <section className="flex flex-col gap-y-3 md:gap-y-6 lg:gap-y-9">
        <h2 className="uppercase py-2 font-semibold bg-0% sticky top-0 lg:hidden">
          Project
        </h2>
        <FirstProject />
        <SecondProject />
        <ThirdProject />
      </section>
    </div>
  );
}
