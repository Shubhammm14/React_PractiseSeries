import { useEffect } from "react";

export function useOutSideClickHook(ref, handler) {
    useEffect(() => {
        function listener(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler(event);
            }
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener, { passive: true });

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
