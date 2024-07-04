import {useState, useEffect, useRef, RefObject} from 'react'

interface IElementSize {
  width: number | undefined
	height: number | undefined
	elementRef?: RefObject<HTMLElement>
}


export const useElementSize = (): IElementSize => {
	const elementRef = useRef() as RefObject<HTMLElement>;
  const [elementSize, setElementSize] = useState<IElementSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      elementRef?.current && setElementSize({
        width: elementRef.current.offsetWidth,
        height: elementRef.current.offsetHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
   
    return () => window.removeEventListener("resize", handleResize);
  },
    []); 
  
  return {width: elementSize.width, height: elementSize.height, elementRef} ;
}