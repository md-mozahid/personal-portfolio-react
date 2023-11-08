import { useState } from "react";
import { Switch } from "@headlessui/react";
import SingleSkill from "./singleSkill";
import Animated from "./animated";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SkillsSection = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 uppercase">
            My Skills
          </h2>
        </div>
        <div className="pt-10 pb-20 text-center">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-orange-700" : "bg-rose-700"}
          relative inline-flex h-[38px] w-[150px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-28" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>

        {enabled ? (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {array.map((item, index) => (
              <SingleSkill key={index} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <Animated />
          </div>
        )}

        <button className="btn btn-outline flex-center mt-16 mx-auto">
          Show More
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
