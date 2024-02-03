import React, { useEffect, useState } from "react";
import { PiArrowUpBold } from "react-icons/pi";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
    };

    useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
    <div className="flex justify-center items-center relative z-11">
        {isVisible && (
        <div className="text-3xl w-12 h-12 text-white bg-purple-600  rounded-full fixed bottom-14 md:bottom-4 right-4 z-50 flex justify-center items-center cursor-pointer" onClick={goToBtn}>
            <PiArrowUpBold  className="animate-bounce transition duration-300 ease-in-out text-2xl" />
        </div>
        )}
    </div>
    );
};

export default GoToTop;