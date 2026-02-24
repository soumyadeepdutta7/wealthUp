"use client";

import React from "react";
import Image from "next/image";

interface Fund {
    name: string;
    return: string;
    logo: string;
}

interface RoadmapCardProps {
    step: number;
    status: string;
    title: string;
    description: string;
    isLocked?: boolean;
    points?: number;
    funds?: Fund[];
    commitment?: number;
    buttonText: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({
    step,
    status,
    title,
    description,
    isLocked = false,
    points,
    funds,
    commitment,
    buttonText
}) => {
    // Hide status if it's "Optimize" or "Growth" as per user request
    const showStatus = status !== "Optimize" && status !== "Growth";

    return (
        <div className={`group relative flex flex-col p-6 rounded-[24px] border transition-all duration-300 ease-in-out ${isLocked ? 'bg-gray-50 border-gray-200' : 'bg-white border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1'} w-full min-h-[420px] font-urbanist`}>
            <div className="flex flex-col gap-1 mb-4">
                <span className={`text-[12px] font-extrabold uppercase tracking-[0.15em] font-urbanist ${isLocked ? 'text-gray-400 opacity-60' : 'text-[#FF6969]'}`}>
                    Step {step}{showStatus ? `: ${status}` : ''}
                </span>
                <h3 className={`text-[20px] font-extrabold leading-[1.2] font-urbanist text-[#294F7C] ${isLocked ? 'opacity-80' : ''}`}>
                    {title}
                </h3>
            </div>

            <div className="flex-grow">
                <p className={`text-[12px] leading-[1.6] mb-6 font-medium font-urbanist text-[#294F7C]`}>
                    {description}
                </p>
            </div>

            {!isLocked && commitment && (
                <div className="mb-6">
                    <div className="text-[10px] text-[#294F7C] font-bold mb-2 font-urbanist">I can commit to saving <span className="text-[#294F7C] font-extrabold underline">₹{commitment}</span> monthly</div>
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                        {[500, 1000, 5000, 6000].map(val => (
                            <button key={val} className={`px-3 py-1.5 rounded-lg text-[10px] border transition-colors font-urbanist ${val === commitment ? 'bg-blue-50 border-wealthup-blue-light text-wealthup-blue-light font-extrabold' : 'border-gray-200 text-gray-500 font-bold hover:bg-gray-50'}`}>
                                ₹{val.toLocaleString()}
                            </button>
                        ))}
                        <div className="px-3 py-1.5 rounded-lg text-[10px] border border-gray-200 text-gray-400 italic bg-gray-50 flex items-center font-bold font-urbanist cursor-pointer hover:border-[#294F7C]/30">
                            ₹ Enter amount
                        </div>
                    </div>

                    <div className="text-[14px] text-[#374E6A] font-semibold mb-4 font-urbanist text-center leading-none uppercase tracking-wide">Recommended Funds ( Top performers)</div>
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                        {funds?.map((fund, i) => (
                            <div key={i} className="flex items-center gap-4 p-2 px-3 border border-gray-100 rounded-xl min-w-[170px] bg-gray-50/50 hover:bg-white hover:border-[#294F7C]/20 transition-all cursor-pointer">
                                <div className="relative w-[45px] h-[45px] flex-shrink-0">
                                    {fund.logo ? (
                                        <Image src={fund.logo} alt={fund.name} fill className="object-contain" />
                                    ) : (
                                        <div className="w-full h-full bg-blue-100 rounded-full"></div>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-extrabold text-[#294F7C] leading-tight font-urbanist">{fund.name}</span>
                                    <span className="text-[10px] text-green-500 font-extrabold font-urbanist">{fund.return}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-auto">
                {/* Refined Button with +Pts Pill inside as requested */}
                <button
                    disabled={isLocked}
                    className={`group/btn w-full py-3.5 rounded-[90px] text-[16px] font-extrabold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-md font-urbanist relative overflow-hidden
                        ${isLocked
                            ? 'bg-gradient-to-r from-[#294F7C] to-[#4B90E2] text-white/70 cursor-not-allowed border-none opacity-80'
                            : 'bg-wealthup-button text-white hover:brightness-105 hover:shadow-lg'}`}
                >
                    <span className="flex-grow text-center ml-8">{buttonText}</span>
                    <span className={`mr-2 bg-white px-3 py-1.5 rounded-full text-[12px] font-extrabold flex items-center text-[#00BA00] border border-white/30 transition-transform group-hover/btn:scale-105`}>
                        +{points}pts
                    </span>
                </button>

                {!isLocked && (
                    <div className="flex items-center justify-center gap-2 mt-4 text-[12px] text-[#294F7C] font-bold font-urbanist bg-[#EEF6FF] rounded-[90px] w-full max-w-[254px] h-[26px] mx-auto hover:bg-[#D5E9FF] transition-colors cursor-default">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 3a1 1 0 011 1v2a1 1 0 11-2 0V4.414l-4.293 4.293a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 00-1.414 0L3.293 8.586a1 1 0 11-1.414-1.414l2.586-2.586a1 1 0 011.414 0L7.293 6l4.293-4.293A1 1 0 0113 3z" /></svg>
                        <span className="whitespace-nowrap">Express setup: <span className="text-gray-400 font-medium">Complete in under 3 minutes</span></span>
                    </div>
                )}

                {isLocked && (
                    <div className="flex items-center justify-center gap-2 mt-4 text-[12px] text-[#294F7C] font-bold font-urbanist bg-gray-100 rounded-[90px] w-full max-w-[254px] h-[26px] mx-auto opacity-60">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                        <span className="whitespace-nowrap">Complete step 1 (critical) to unlock</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoadmapCard;
