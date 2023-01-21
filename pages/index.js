import ProfilePic from "../public/kp.jpeg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-[4000px] bg-gray-800 text-white flex flex-col  gap-20 items-center justify-start">
      <Image
        src="/kp.jpeg"
        alt="me"
        width="600"
        height="600"
        className="mt-[200px]"
      />
      <h1 className="text-4xl xl:text-5xl">Kuldeep Singh Pasla</h1>
      <div className="flex gap-20 items-start justify-center ">
        <div className="flex flex-col gap-10 text-white text-3xl  items-center justify-center">
          <h1>Age: 28</h1>
          <h1>Lathrop CA</h1>
          <h1>Volleyball / Tennis / Badminton</h1>
        </div>
      </div>
    </div>
  );
}
