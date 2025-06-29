import "@/assets/css/font.css";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="container w-full px-8 mx-auto overflow-hidden md:h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="h-[90%] flex flex-row-reverse max-md:flex-col items-center justify-center">
          <div>
            <Image src="/me_.jpg" width="560" height="560" alt="me.jpg" className="max-md:w-64 max-md:pb-5" />
          </div>
          <div className="text-center max-md:text-sm max-md:mb-3">
            <p>
            Wanna work with me? Wanna make a project with me? Feel free to DM.
            </p>
            <Link href="mailto:kirill@krasnikov.ru" className="font-medium underline">kirill@krasnikov.ru</Link>
          </div>
        </div>
      <div className="max-md:mt-16">
        <Footer />
      </div>
      </div>
    </section>
  );
}
