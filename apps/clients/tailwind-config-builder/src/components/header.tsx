import { Button } from "./ui/button";

function Header(): JSX.Element {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-accent text-4xl font-extrabold">Tailwind Config Builder</h1>
        <Button>Generate</Button>
      </div>
    </header>
  );
}

export default Header;
