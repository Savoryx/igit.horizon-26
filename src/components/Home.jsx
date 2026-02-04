import React from "react";
import confetti from "canvas-confetti";
import Sponsors from "./Sponsors";
import Events from "./Events";
import Merch from "./Merch";

function Home() {
  React.useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    let interval;
    let startTimeout; // Declare startTimeout here

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Start fireworks after 2ms delay
    startTimeout = setTimeout(() => {
      interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }, 2);

    // Stop on scroll
    const handleScroll = () => {
      if (window.scrollY > 10) {
        clearTimeout(startTimeout); // Clear the timeout if scroll happens before start
        clearInterval(interval);
        confetti.reset();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(startTimeout); // Ensure timeout is cleared on unmount
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <Events />
      <Merch />
    </div>
  );
}

export default Home;