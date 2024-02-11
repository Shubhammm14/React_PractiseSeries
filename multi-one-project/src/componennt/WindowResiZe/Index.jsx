import { useState, useEffect } from "react";

export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Attach the event listener on component mount
        window.addEventListener('resize', handleResize);

        // Detach the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return windowSize;
}
