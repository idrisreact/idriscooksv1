import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-screen-xl p-3">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            src="/idris.jpg"
            alt="Idriscooks Logo"
            className="bor"
            width={100}
            height={24}
            priority
          />
        </div>
      </section>
    </main>
  );
}
