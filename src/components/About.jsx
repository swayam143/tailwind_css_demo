import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen  text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[900px] w-full ">
          <div className="text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
            {/* <p className="heading">heading</p> */}
          </div>
        </div>
        <div className="max-w-[1000px] w-full row ">
          <div className="col-sm-6">
            <p className="sm:text-right text-4xl font-bold pb-4">
              Hi I,m Client , nice to meet you. Please take a look around{" "}
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
