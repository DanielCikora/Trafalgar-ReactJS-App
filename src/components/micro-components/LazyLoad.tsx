import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { GridLoader } from "react-spinners";
interface lazyLoadType {
  children: ReactNode;
}
export default function LazyLoad({ children }: lazyLoadType) {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1600));
      } catch {
        console.log("response");
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [location]);
  return (
    <div className='loader-wrapper'>
      {isLoading ? (
        <div className='loader'>
          <GridLoader color='#458ff6' />
        </div>
      ) : (
        children
      )}
    </div>
  );
}
