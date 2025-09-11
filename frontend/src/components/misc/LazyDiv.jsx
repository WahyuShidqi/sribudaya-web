import React, { useState, useEffect, useRef } from "react";

const LazyDiv = ({
  children,
  className = "",
  animation = "animate-fade-up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // trigger when 10% is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : "opacity-0"}`}
    >
      {isVisible && children}
    </div>
  );
};

export default LazyDiv;
