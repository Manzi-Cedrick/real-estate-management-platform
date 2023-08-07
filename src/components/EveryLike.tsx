import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const EveryLike = () => {

    interface NavItem {
        name: string;
        number: number;
    }

    const NAV: NavItem[] = [
        {
            name: "Sale Price",
            number: 6785,
        },
        {
            name: "Montly Prices",
            number: 345,
        },
        {
            name: "Daily Prices",
            number: 43,
        },
    ];

    return (
        <div >

            <div className="nc-BackgroundSection inset-y-0 xl:max-w-screen 2xl:max-w-screen-2xl left-1/2 rounded-xl z-0 px-4 bg-orange-50 dark:bg-black dark:bg-opacity-20 
            ">
                <div className="row text-center py-3 py-md-5">
                    <div className="col-sm-12">
                        <p className="mb-4 deco-underline centered text-3xl font-semibold">
                            What everyone likes
                        </p>
                        <p className="lead text-lg">
                            If you’re looking for a new home, an investment property or to explore the area we’ll help you find exactly what you’re looking for.
                        </p>
                    </div>
                </div>
                <div className="row text-center justify-between pn-3 pb-md-3 bg-digital-dark-gold-light-tint mx-1 flex py-5 w-full">
                    {NAV.map((item, index) => {
                        return (
                            <div key={index} className="w-full pb-6 pt-5  mx-1 bg-slate-200 dark:bg-slate-400 cursor-pointer rounded-xl hover:bg-black/10 dark:hover:bg-white/10">
                                <span className="number mx-auto my-2 text-2xl font-semibold dark:text-white">
                                    ${item.number}
                                </span>
                                <p className="text-black overview-link text-xl font-semibold  dark:text-white">
                                    {item.name}
                                </p>
                            </div>
                        );
                    })
                    }

                </div>
            </div>
        </div>
    );
};

export default EveryLike;
