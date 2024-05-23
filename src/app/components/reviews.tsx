import Image from "next/image";
import React from "react";

function Reviews() {
  return (
    <section className="flex flex-col items-center self-center relative z-20 gap-4 min-w-[90%]">
      <h1 className="text-2xl text-blue-500 font-bold">Reviews</h1>
      <Image
        src={"/rev-ratio.png"}
        alt=""
        width={300}
        height={300}
        className="max-md:w-[50%] w-auto h-auto content-center self-center mb-5 rounded-xl max-md:scale-x-125"
      />
      <div className="flex flex-col gap-9 max-md:gap-7 items-center justify-center content-center">
        <Image
          src={"/review1.png"}
          alt=""
          width={500}
          height={500}
          className="max-md:w-[80%] w-auto h-auto self-start content-center max-md:self-center rounded-2xl max-md:scale-125"
        />
        <Image
          src={"/review2.png"}
          alt=""
          width={500}
          height={500}
          className="max-md:w-[80%] w-auto h-auto self-start content-center max-md:self-center rounded-2xl max-md:scale-125"
        />
        <Image
          src={"/review3.png"}
          alt=""
          width={500}
          height={500}
          className="max-md:w-[80%] w-auto h-auto self-start content-center max-md:self-center rounded-2xl max-md:scale-125"
        />
      </div>
    </section>
  );
}

export default Reviews;
