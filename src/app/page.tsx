"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import InfoBlock from "./components/info-block";
import NavBar from "./components/nav-bar";
import {
  GemIcon,
  HandCoinsIcon,
  HandshakeIcon,
  LockKeyholeIcon,
} from "lucide-react";
import Reviews from "./components/reviews";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Home() {
  let isSmall = useRef(true);
  useEffect(() => {
    if (window.innerWidth >= 674) {
      isSmall.current = false;
    }
  }, []);
  return (
    <>
      <NavBar />
      <main className="flex flex-col justify-center items-center">
        <div className="flex relative flex-col items-start pt-20 w-full min-h-[1024px] max-md:max-w-full">
          {/* <Image
            src="/background.jpg"
            alt=""
            objectFit="cover"
            layout="fill"
            className="absolute inset-0 size-full w-full h-full"
          /> */}
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src={
                isSmall.current
                  ? "/background-mobile.mp4"
                  : "/background-mobile.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <section className="flex flex-col px-14 py-10 mt-28 max-w-full text-white rounded-3xl backdrop-blur-0 max-md:backdrop-blur-sm w-[724px] max-md:px-5 max-md:mt-10">
            <h1 className="mt-6 text-6xl font-extrabold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              <span className="text-yellow-600">
                Buy, sell, trade cars <br />
              </span>
              <span className="underline text-border">Only the best ones</span>
            </h1>
            <p className="mt-10 mr-7 text-2xl max-md:mr-2.5 max-md:max-w-full text-teal-500 font-extrabold">
              Explore our vehicles catalogue and find the car you have been
              looking for
            </p>
            {/* <button className="justify-center self-start px-12 py-6 mt-10 text-2xl leading-5 text-black whitespace-nowrap bg-teal-300 shadow-sm rounded-[36px] max-md:px-5">
              Explore
            </button> */}
            <Link href={"/catalogue"}>
              <Button className="bg-teal-300 hover:bg-teal-200 text-black self-start px-20 my-5 rounded-xl">
                Explore
              </Button>
            </Link>
          </section>
          <section className="justify-center px-0 py-6 mt-20 border border-solid backdrop-blur-sm  max-md:backdrop-blur-0 max-md:border-transparent border-white border-opacity-80 rounded-[32px]  max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 px-8">
              <InfoBlock
                icon={
                  <LockKeyholeIcon
                    width={56}
                    height={56}
                    className="text-yellow-400"
                  />
                }
                title={
                  <h3 className="mt-2 text-2xl font-extrabold text-yellow-400 text-center">
                    Certified cars
                  </h3>
                }
                description="We only own audited cars so we can bring you the best ones"
              />
              <InfoBlock
                icon={
                  <HandshakeIcon
                    width={56}
                    height={56}
                    className="text-pink-400"
                  />
                }
                title={
                  <h3 className="mt-2 text-2xl font-extrabold text-center text-pink-400">
                    Client oriented
                  </h3>
                }
                description="Our client needs are our priority, we are here to help you"
              />
              <InfoBlock
                icon={
                  <HandCoinsIcon
                    width={56}
                    height={56}
                    className="text-green-400"
                  />
                }
                title={
                  <h3 className="mt-2 text-2xl font-extrabold text-center text-green-400">
                    Save money
                  </h3>
                }
                description="We offer the best prices in the market, you won't find better deals"
              />
              <InfoBlock
                icon={
                  <GemIcon width={56} height={56} className="text-blue-400" />
                }
                title={
                  <h3 className="mt-2 text-2xl font-extrabold text-blue-400 text-center">
                    Quality guarantee
                  </h3>
                }
                description="Our clients are our best reference"
              />
            </div>
            {/* <Reviews /> */}
          </section>
        </div>
      </main>
    </>
  );
}
export default Home;
