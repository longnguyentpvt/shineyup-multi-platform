import Image from "@app/components/custom-image";

import "@app/styles/header.css";

function Header(): JSX.Element {
  return (
    <header className="top-menuber py-4 border-b border-white/25">
      <div className="container">
        <Image
          className="top-menuber__logo"
          src="/assets/main-logo-with-text-shineyup.png" alt="ShineYup - Logo" width={ 828 } height={ 288 } />
      </div>
    </header>
  );
}

export default Header;
