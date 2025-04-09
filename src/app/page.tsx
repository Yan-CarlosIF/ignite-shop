import Image from "next/image";
import Link from "next/link";
import Shirt1 from "@/assets/shirts/Shirt-1.png";
import Shirt2 from "@/assets/shirts/Shirt-2.png";
import Shirt3 from "@/assets/shirts/Shirt-3.png";

export default function Home() {
  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))] gap-12">
      <Link
        href={"/product/1"}
        className="group relative flex transform items-center justify-center overflow-hidden rounded-lg p-1"
        style={{
          background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        }}
      >
        <Image
          src={Shirt1}
          width={520}
          height={480}
          alt="Shirt"
          className="object-cover"
        />
        <footer className="absolute right-1 bottom-1 left-1 flex translate-y-[110%] transform items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camiseta X</strong>
          <span className="text-2xl font-bold text-green-300">R$ 99,90</span>
        </footer>
      </Link>
      <Link
        href={"/product/2"}
        className="group relative flex transform items-center justify-center overflow-hidden rounded-lg p-1"
        style={{
          background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        }}
      >
        <Image
          src={Shirt2}
          width={520}
          height={480}
          alt="Shirt"
          className="object-cover"
        />
        <footer className="absolute right-1 bottom-1 left-1 flex translate-y-[110%] transform items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camiseta X</strong>
          <span className="text-2xl font-bold text-green-300">R$ 99,90</span>
        </footer>
      </Link>
      <Link
        href={"/product/3"}
        className="group relative flex transform items-center justify-center overflow-hidden rounded-lg p-1"
        style={{
          background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        }}
      >
        <Image
          src={Shirt3}
          width={520}
          height={480}
          alt="Shirt"
          className="object-cover"
        />
        <footer className="absolute right-1 bottom-1 left-1 flex translate-y-[110%] transform items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-xl">Camiseta X</strong>
          <span className="text-2xl font-bold text-green-300">R$ 99,90</span>
        </footer>
      </Link>
    </main>
  );
}
