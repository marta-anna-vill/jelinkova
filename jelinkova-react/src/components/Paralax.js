import { useEffect } from "react";

export const Parallax = (nodeRef, nodeName) => {

    const handleScroll = () => {
        // const scrolled = window.pageXOffset
        // const initY = nodeRef.getBoundingClientRect().top;
        // const height = nodeRef.clientHeight;
        // const endY = initY + nodeRef.clientHeight;

        // const visible = isInViewport(nodeRef);
        
        // if (visible) {
        //     const diff = scrolled - initY;
        //     const ratio = Math.round((diff / height) * 200 * -1);

        //     switch(nodeName) {
        //         case 'img': {
        //             nodeRef.style.objectPosition = 'center ' + parseInt(-(ratio * 0.8)) + 'px';
        //             break;
        //         }
        //         case 'div': {
        //             nodeRef.style.backgroundPosition = 'center ' + parseInt(-(ratio * 0.8)) + 'px';
        //             break;
        //         }
        //     }
        // }

        // function isInViewport(node) {
        //     const rect = node.getBoundingClientRect();
        //     return (
        //         (rect.height > 0 || rect.width > 0) &&
        //         rect.bottom >= 0 &&
        //         rect.right >= 0 &&
        //         rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        //         rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        //     )
        // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}