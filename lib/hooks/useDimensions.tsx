import { useEffect, useState } from "react";

const useDimensions = () => {
  const [bodyWidth, setBodyWidth] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const { clientWidth: bodyClientWidth, clientHeight: bodyClientHeight } =
      document.body;
    const { innerWidth: windowInnerWidth, innerHeight: windowInnerHeight } =
      window;

    if (windowWidth !== windowInnerWidth) {
      setWindowWidth(windowInnerWidth);
    }
    if (windowHeight !== windowInnerHeight) {
      setWindowHeight(windowInnerHeight);
    }
    if (bodyWidth !== bodyClientWidth) {
      setBodyWidth(bodyWidth);
    }
    if (bodyHeight !== bodyClientHeight) {
      setBodyHeight(bodyHeight);
    }

    const handleResize = () => {
      if (bodyWidth !== document.body.clientWidth) {
        setBodyWidth(document.body.clientWidth);
      }
      if (bodyHeight !== document.body.clientHeight) {
        setBodyHeight(document.body.clientHeight);
      }
      if (windowWidth !== window.innerWidth) {
        setWindowWidth(window.innerWidth);
      }
      if (windowHeight !== window.innerHeight) {
        setWindowHeight(window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("DOMContentLoaded", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [bodyHeight, bodyWidth, windowHeight, windowWidth]);

  return { bodyHeight, bodyWidth, windowHeight, windowWidth };
};

export default useDimensions;
