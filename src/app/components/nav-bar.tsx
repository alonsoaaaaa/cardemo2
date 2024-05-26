import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <header className="flex flex-col px-5 pt-2 pb-2 w-full text-blue-200 bg-slate-500 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-start gap-1 sm:gap-5 text-sm font-bold leading-4 max-md:flex-wrap">
        <div className="self-center">
          <Link href={"/"}>
            <Image
              src="/allamerica-logo.jpg"
              alt="Logo"
              className="rounded-full"
              width={100}
              height={100}
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
            href={"https://maps.app.goo.gl/SUSF9YXo2bpZ1dRu7"}
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
            href={"https://www.facebook.com/AllAmericanAutoNampa/"}
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
            <div className="mt-1.5 ">Facebook</div>
          </Link>
        </div>
      </div>
      {/* </nav> */}
    </header>
  );
}

export default NavBar;
