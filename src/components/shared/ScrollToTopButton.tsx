import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#0C9",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            zIndex: "1000",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
