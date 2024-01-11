import { useEffect, useRef } from "react";

const useParallax = (backgroundSize) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      parallaxRef.current.style.backgroundPositionY = `${
        window.scrollY * backgroundSize - 350
      }px`;
    };

    window.addEventListener("scroll", handleParallax);

    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return [parallaxRef];
};

export default useParallax;
