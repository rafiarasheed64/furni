import React from "react";

const Third = () => {
  return (

    <div className="bg-white  sm:py-48 lg:py-20 p-7">
      <div className=" flex justify-around flex-wrap">
        {/* Pics */}
        <div className="xl:w-[50%] lg:w-[50%] md:w-[90%] flex relative ">
          <img
            className=" w-[70%] rounded-xl  left-0 top-0"
            src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
            alt=""
          />
          <img
            className="h-[33%] mx-[2%]  w-[28%] rounded-xl"
            src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
            alt=""
          />
          <img
            className="absolute left-[60%] lg:top-[35%] md:top-[35%] sm:top-[38%] xs:top-[40%] w-[40%] xl:h-[72%] lg:h-[70%] md:h-[73%] sm:h-[70%] rounded-xl"
            src="https://themewagon.github.io/furni/images/img-grid-3.jpg"
            alt=""
          />
        </div>
        {/* Content */}
        <div className="lg:w-[40%] md:w-[80%] mt-10  p-10">
          <p className="font-semibold text-4xl">
            We Help You Make Modern Interior Design
          </p>
          <p className="mt-5 text-[rgb(118,119,124)]">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada
          </p>
          <ul className="text-[rgb(118,119,124)] flex flex-wrap justify-between custom-list my-4">
            <li className="sm:w-[45%] xs:[100%] mt-4">
              # Donec vitae odio quis nisl dapibus malesuada
            </li>
            <li className="sm:w-[45%] xs:[100%] mt-4">
              # Donec vitae odio quis nisl dapibus malesuada
            </li>
            <li className="sm:w-[45%] xs:[100%] mt-4">
              # Donec vitae odio quis nisl dapibus malesuada
            </li>
            <li className="sm:w-[45%] xs:[100%] mt-4">
              # Donec vitae odio quis nisl dapibus malesuada
            </li>
          </ul>
          <button className="rounded-full bg-[#141414] hover:bg-black text-white py-3 px-10 text-lg">
            Explore
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap mt-[120px]">
        <div className="flex  lg:w-[33%] md:w-[75%] mt-5">
          <img
            className="h-[170px]"
            src="https://themewagon.github.io/furni/images/product-1.png"
            alt=""
          />
          <div>
            <p className="font-bold">Nordic Chair</p>
            <p className="text-[rgb(106,106,149)] lg:text-lg md:text-sm">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </p>
            <button className="text-black hover:text-[grey]">Read More</button>
          </div>
        </div>
        <div className="flex lg:w-[33%] md:w-[75%] mt-5">
          <img
            className="h-[170px]"
            src="https://themewagon.github.io/furni/images/product-2.png"
            alt=""
          />
          <div>
            <p className="font-bold">Nordic Chair</p>
            <p className="text-[rgb(106,106,149)] lg:text-lg md:text-sm">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </p>
            <button className="text-black hover:text-[grey]">Read More</button>
          </div>
        </div>
        <div className="flex  lg:w-[33%] md:w-[75%] mt-5">
          <img
            className="h-[170px]"
            src="https://themewagon.github.io/furni/images/product-3.png"
            alt=""
          />
          <div>
            <p className="font-bold">Nordic Chair</p>
            <p className="text-[rgb(106,106,149)] lg:text-lg md:text-sm">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </p>
            <button className="text-black hover:text-[grey]">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
