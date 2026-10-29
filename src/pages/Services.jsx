import React from "react";
import Card from "../components/Card";
import Trainer1 from "../assets/Trainer1.png";
import Trainer2 from "../assets/Trainer2.png";
import Trainer3 from "../assets/Trainer3.png"

const Services = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 w-full items-center min-h-screen px-32 rounded-4xl">
        <Card
          pic={Trainer1}
          heading="Strength Trainer"
          content="Bret D. Bowers"
          word="Delivers high-energy trainings using the latest techniques in exercise science, cardio programs and strength training."
          para="Facebook"
          mimi="Twitter"
          indi="Linkden"
          lol="Behance"
        />

        <Card
          pic={Trainer2}
          heading="Muscle Trainer"
          content="Hector T. Daigle"
          word="Ensures effective workouts,identifyingdifferent muscle groups and explaining appropriate methods tostrengthen specific muscles."
          para="Facebook"
          mimi="Twitter"
          indi="Linkden"
          lol="Behance"
        />
        <Card
          pic={Trainer3}
          heading="Power Trainer"
          content="Paul D. Newman"
          word="Leads kinesthetic group exercise classes, design classes to match the skill and learning level of all participants."
          para="Facebook"
          mimi="Twitter"
          indi="Linkden"
          lol="Behance"
        />
      </div>
    </>
  );
};

export default Services;
