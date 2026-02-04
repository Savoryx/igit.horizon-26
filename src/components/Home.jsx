import React from "react";
import Sponsors from "./Sponsors";

function Home() {
  return (
    <div className=" px-0 py-0 w-screen overflow-x-hidden bg-black min-h-0">
      <div className="pt-0">
      </div>
      <div className="relative z-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
        <picture className="block w-full overflow-x-hidden">
          <source
            media="(min-width: 1024px)"
            srcSet="https://res.cloudinary.com/ddpdocy8k/image/upload/f_auto,q_100,w_2560/v1770127451/HORIZON_POSTER_3x_3x_jehs0g.png"
          />
          <img
            src="https://res.cloudinary.com/ddpdocy8k/image/upload/f_auto,q_100,w_1080/v1770143452/LOGO_HORIZON_1_3x_1_zk9pot.png"
            alt="Horizon Hero"
            className="block w-full max-w-full overflow-x-hidden h-auto"
            style={{ maxWidth: '100%' }}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
      <Sponsors />
    </div>
  );
}

export default Home;