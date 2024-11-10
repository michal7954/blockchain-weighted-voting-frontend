import { useEffect, useRef } from "react";

export default function useDynamicHeightChange() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (!contentRef.current) return;

        const contentHeight = contentRef.current.clientHeight;
        containerRef.current.style.height = `${contentHeight}px`;
    });

    return { containerRef, contentRef };
}
