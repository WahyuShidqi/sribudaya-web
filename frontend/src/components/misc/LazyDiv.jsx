import { useInView } from "react-intersection-observer";

const LazyDiv = ({
  children,
  className = "",
  // optional placeholder element or height to reserve space until mount
  placeholder = null,
  placeholderHeight = "500px",
  threshold = 0.3,
  triggerOnce = true,
  rootMargin = "0px",
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return (
    <div ref={ref} className={className}>
      {inView
        ? children
        : // keep layout so IntersectionObserver can detect it
          placeholder ?? <div style={{ minHeight: placeholderHeight }} />}
    </div>
  );
};

export default LazyDiv;
