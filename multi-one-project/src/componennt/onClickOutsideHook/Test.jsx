import React, { useRef, useState } from "react";
import { useOutSideClickHook } from "./Index";

const OnClickOutsideTest = () => {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();

    useOutSideClickHook(ref, () => setShowContent(false));

    return (
        <div >
            {showContent ? (
                <div ref={ref}>
                    <h1>this is random content</h1>
                    <p>Click outside to close</p>
                </div>
            ) : (
                <div>
                    <button onClick={() => setShowContent(true)}>clickMe</button>
                </div>
            )}
        </div>
    );
};

export default OnClickOutsideTest;
