import React from "react";
import ncse from "../utils/Img/ncse.jpeg";

const About = () => {
  return (
    <div>
      {/* About cse dept */}
      <div className="grid grid-cols-1 m-2">
        <h2>About our NCSE Symbosium</h2>
        <img src={ncse} alt="about cse image" className="w-full" />
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptatem asperiores modi nulla labore possimus corrupti provident
          beatae molestiae dolorum accusantium quaerat nostrum repellat eum
          laboriosam veniam porro impedit iste deserunt pariatur voluptatibus
          reiciendis, consequatur laborum. Corrupti rem unde placeat.
        </p>
      </div>
    </div>
  );
};

export default About;
