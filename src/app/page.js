import { clsx } from "clsx";
// import { inter } from '@/app/ui/fonts';
import Image from "next/image";
import { inter } from "./fonts";
import Link from "next/link";

export default function Home({ status }) {
  return (
    <div className="bg-black font-extrabold text-9xl grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className={`${inter.className} flex flex-col gap-8 row-start-2 items-center sm:items-start`}>
        <Link href={'/ui/dashboard'}>Dashboard</Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
