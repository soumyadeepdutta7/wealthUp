"use client";

import React, { useEffect, useState } from "react";

interface GaugeProps {
  score: number;
  maxScore?: number;
}

const Gauge: React.FC<GaugeProps> = ({ score, maxScore = 70 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const width = 340;
  const height = 180;
  const strokeWidth = 28;
  const radius = (width - strokeWidth) / 2;
  const centerX = width / 2;
  const centerY = height - 10;

  // Angle for the score (0 to 100 becomes 180 to 0 degrees)
  const angle = 180 - (score / 100) * 180;
  const targetAngle = 180 - (maxScore / 100) * 180;

  // Convert angle to radians for coordinates
  const rad = (angle * Math.PI) / 180;
  const targetRad = (targetAngle * Math.PI) / 180;

  // Point on the arc for the dotted line
  const pointX = centerX + radius * Math.cos(rad);
  const pointY = centerY - radius * Math.sin(rad);

  // Point on the arc for the target marker
  const targetX = centerX + radius * Math.cos(targetRad);
  const targetY = centerY - radius * Math.sin(targetRad);

  return (
    <div className="relative flex flex-col items-center justify-center font-urbanist w-full max-w-[340px] mx-auto pt-12">
      {/* Target Tooltip */}
      <div
        className="absolute z-10 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-xl px-4 py-3 border border-gray-100 text-[14px] leading-[20px] whitespace-nowrap transition-all duration-1000 font-inter text-center"
        style={{
          top: mounted ? '0px' : '-20px',
          opacity: mounted ? 1 : 0,
        }}
      >
        <div className="font-normal text-gray-500">
          You need <span className="font-bold text-black">+27 points</span> to<br />
          reach a <span className="font-bold text-[#7EFF7E]">good</span> score of <span className="font-bold text-black">70</span>
        </div>
        {/* Pointer down */}
        <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-r border-b border-gray-100 rotate-45"></div>
      </div>

      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="z-0 overflow-visible">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6969" />
            <stop offset="15%" stopColor="#FF6969" />
            <stop offset="40%" stopColor="#FFBC70" />
            <stop offset="70%" stopColor="#7EFF7E" />
            <stop offset="100%" stopColor="#7EFF7E" />
          </linearGradient>
        </defs>

        {/* Background Grey Arc */}
        <path
          d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
          fill="none"
          stroke="#F3F4F6"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Gradient Progress Arc */}
        <path
          d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${radius * Math.PI} ${radius * Math.PI}`}
          style={{
            strokeDashoffset: mounted ? radius * Math.PI * (1 - score / 100) : radius * Math.PI,
            transition: 'stroke-dashoffset 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        />

        {/* Dotted Line from center to score marker */}
        {mounted && (
          <>
            <line
              x1={centerX}
              y1={centerY - strokeWidth / 2}
              x2={pointX}
              y2={pointY + (strokeWidth / 2 * Math.sin(rad))}
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="transition-all duration-1000"
            />
            {/* Darker indicator line head */}
            <circle cx={pointX} cy={pointY} r="4" fill="#6B7280" />
          </>
        )}

        {/* Target Marker at 70 points */}
        <circle cx={targetX} cy={targetY} r="5" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" />
      </svg>

      {/* Center Text Container */}
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-center group">
        <div
          className="text-[96px] font-extrabold text-[#FF6969] leading-none transition-all duration-700 font-urbanist group-hover:scale-110 group-hover:brightness-110 cursor-default"
          style={{
            transform: mounted ? 'scale(1)' : 'scale(0.8)',
            opacity: mounted ? 1 : 0
          }}
        >
          {score}
        </div>
        <div className="text-[18px] font-extrabold text-[#294F7C] whitespace-nowrap mt-2 font-urbanist transition-colors duration-300 group-hover:text-[#4B90E2]">
          Current WealthUp Score
        </div>
      </div>

      <div className="mt-14 text-gray-400 italic text-[14px] font-bold font-urbanist">
        Better than <span className="text-black">46%</span> of peers
      </div>
    </div>
  );
};

export default Gauge;
