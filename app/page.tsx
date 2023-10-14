import AuthForm from "@/app/auth-form";
import engineer from "@/assets/software_engineer.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="row relative w-full">
      <div className="col-6 text-zinc-300">
        <h1 className="header w-full text-[2.5rem] mb-5">Flash Your Way to Mastery</h1>
        <p className="text-2xl">
            Unlock Learning with Interactive Flashcards
        </p>
      <Image src={engineer} alt="software engineer" width={771} height={449} className="mt-7"/>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}
