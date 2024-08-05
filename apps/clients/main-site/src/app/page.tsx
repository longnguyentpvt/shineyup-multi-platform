import Button from "@app/components/button";

import "@app/styles/header.css";

export default function Home(): JSX.Element {
  return (
    <div className="top-cover py-12">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h1 className={ "top-cover__title bg-gradient-to-r"
              + " from-green-2 via-dark-green to-green bg-clip-text text-transparent inline-block" }>
            SOFTWARE TECHNICAL SOLUTIONS
          </h1>

          <h2 className="text-white text-5xl mt-6 mb-8">
            Sharing Experience to Community
          </h2>

          <p className="top-cover__description mb-5">Build Your Own Wonderful Business With Us</p>

          <Button className="text-xl">Get In Touch</Button>
        </div>

      </div>
    </div>
  );
}
