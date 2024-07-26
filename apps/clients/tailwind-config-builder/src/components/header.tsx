import Image from "next/image";

function Header(): JSX.Element {
  return (
    <header className="py-8 xl:py-12 border-b-2 border-gray-200 shadow-md bg-slate-50">
      <div className="container flex justify-between items-center">
        <h1 className="text-accent text-4xl font-extrabold">Tailwind Config Builder</h1>
        <div className="relative w-[140px] h-[55px]">
          <Image src="/assets/main-logo-with-text-shineyup.png" alt="" fill />
        </div>
      </div>
    </header>
  );
}

export default Header;
