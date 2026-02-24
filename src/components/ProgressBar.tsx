"use client";

import React from "react";

interface ProgressBarProps {
    label: string;
    value: number;
    max: number;
    showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max, showLabel = true }) => {
    const percentage = (value / max) * 100;

    return (
        <div className="flex flex-col gap-2 w-full font-urbanist">
            <div className="flex justify-between items-center font-urbanist leading-none gap-2">
                <span className="text-[16px] font-bold text-[#294F7C] whitespace-nowrap">{label}</span>
                <span className="text-[12px] font-medium text-gray-400 whitespace-nowrap">{value} / {max}</span>
            </div>
            <div className="relative w-full h-[16px] bg-gray-100 rounded-[30px] overflow-hidden">
                {/* Vertical Segmentation Lines */}
                <div className="absolute inset-0 flex justify-between px-0 z-10 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="h-full w-[1px] bg-white/30" style={{ marginLeft: i === 0 ? '-1px' : '0' }}></div>
                    ))}
                </div>

                <div
                    className="h-full rounded-[30px] transition-all duration-1000 ease-out relative z-0"
                    style={{
                        width: `${percentage}%`,
                        background: 'linear-gradient(90deg, #FF6969 0%, #FF6969 12.58%, #FFBC70 25.48%, #FFBC70 53.97%, #7EFF7E 65%, #7EFF7E 94.23%)'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
