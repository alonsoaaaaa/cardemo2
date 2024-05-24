import Image from "next/image";
import React from "react";

function Reviews() {
  return (
    <section className="flex flex-col items-center self-center relative z-20 gap-4 min-w-[90%] mt-8">
      {/* <div className="flex flex-col gap-9 max-md:gap-7 items-center justify-center content-center"> */}
      <h3 className="text-2xl font-bold pb-3">Our customer opinions:</h3>
      <div className="flex justify-center">
        <Image
          src={"/review1.png"}
          alt=""
          width={500}
          height={500}
          className="w-auto h-auto content-center px-1 m-1 self-center rounded-2xl max-sm:scale-125 "
        />
      </div>
      {/* <Image
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
        /> */}
      {/* </div> */}
    </section>
  );
}

export default Reviews;
