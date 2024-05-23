import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <header className="flex flex-col px-5 pt-2 pb-2 w-full text-blue-200 bg-gray-800 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-start gap-1 sm:gap-5 text-sm font-bold leading-4 max-md:flex-wrap">
        <div className="self-center">
          <Link href={"/"}>
            <Image
              src="/chromecars-logo.jpg"
              alt="Logo"
              className="rounded-full"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="flex flex-col self-center md:flex-row px-2 py-px my-auto sm:gap-4">
          <Link className="text-center" href={"/"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              HOME
            </Button>
          </Link>
          <Link className="text-center" href={"/catalogue"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              CATALOGUE
            </Button>
          </Link>
          <Link className="text-center" href={"/sell"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              SELL YOUR CAR
            </Button>
          </Link>
          <Link className="text-center" href={"/about"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              KNOW US
            </Button>
          </Link>
        </div>
        <div className="flex gap-0 self-center mt-4 text-xs sm:ml-auto leading-4 whitespace-nowrap">
          <Link
            href={
              "https://www.google.com/maps/place/Chrome+Reflections+MotorCars/@32.5132856,-94.698515,15z/data=!4m12!1m5!8m4!1e2!2s117002377140721818380!3m1!1e1!3m5!1s0x863647173d08aef1:0x48a9b98573087737!8m2!3d32.5031203!4d-94.6752722!16s%2Fg%2F11h837p6th?entry=ttu"
            }
            className="flex flex-col px-2 self-center"
          >
            <Image
              src={"/ubicacion.svg"}
              priority
              alt="ubicacion"
              width={30}
              height={30}
              className="self-center aspect-square"
            />
            <div className="mt-1.5 ">Adress</div>
          </Link>
          <Link
            href={
              "https://www.google.com/search?q=classic+certified+used+cars+longview+texas+usa&oq=Classic+Certified+Used+Cars+longview+texas&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCDc2MTdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcFB5YVdkNXRjUXdyQUZacTd0bWJSU0I5RTBWc3Jmdi1aN0FyZ1h0&rlimm=5235920024606635831"
            }
            className="flex flex-col px-2"
          >
            <Image
              src={"/hablando.svg"}
              priority
              alt="lupa"
              width={30}
              height={30}
              className="self-center aspect-square"
            />
            <div className="mt-1.5 ">Reviews</div>
          </Link>
        </div>
      </div>
      {/* </nav> */}
    </header>
  );
}

export default NavBar;
