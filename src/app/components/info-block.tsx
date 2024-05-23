import { LockIcon, LockKeyholeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type InfoBlockProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
};
export default function InfoBlock({
  icon,
  title,
  description,
}: InfoBlockProps) {
  return (
    <section className="flex flex-col items-center justify-center">
      <article className="flex flex-col text-white items-center">
        {icon}
        {title}
        <p className="mt-2 text-lg text-center">{description}</p>
      </article>
    </section>
  );
}
