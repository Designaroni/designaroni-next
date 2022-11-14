import useDimensions from "@/lib/hooks/useDimensions";

const useIsMobile = () => {
  const { windowWidth: width } = useDimensions();
  const isMobile = width < 1200;

  return { isMobile };
};

export default useIsMobile;
