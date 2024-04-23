import Image from "next/image";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/main-bg.webp)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-bold font-italic">
            BAIJU JOSEPH  <br />
            <span className="text-transparent text-bold bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Full-Stack Developer, <br/>AWS Cloud Practitioner & <br/>Certified Developer
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
