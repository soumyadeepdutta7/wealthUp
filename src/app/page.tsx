import Image from "next/image";
import Gauge from "@/components/Gauge";
import ProgressBar from "@/components/ProgressBar";
import RoadmapCard from "@/components/RoadmapCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F8FB] pb-20 font-urbanist">
      {/* Header */}
      <header className="flex justify-center py-6 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="relative w-[140px] h-[32px]">
          <Image
            src="/wealthup-new-whitelogo 1.png"
            alt="wealthup"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="font-inter">
            <h1 className="text-[28px] font-normal text-[#294F7C] leading-none mb-2">
              Good Morning, <span className="font-bold">Ankit!</span>
            </h1>
            <p className="text-[18px] text-[#294F7C]">
              At <span className="text-[#294F7C] font-bold">28</span>, your income is strong, but your wealth efficiency is lagging.
            </p>
          </div>
          <div className="relative w-[150px] h-[40px]">
            <Image
              src="/Verified.png"
              alt="Verified Analysis"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Boxed Score Section */}
        <div className="bg-white rounded-[32px] p-10 border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Gauge */}
            <div className="flex flex-col items-center">
              <Gauge score={43} />
            </div>

            {/* Right: Stats & Breakdown */}
            <div className="flex flex-col">
              <div className="mb-10">
                <h2 className="text-[20px] font-normal text-[#294F7C] mb-6 font-urbanist leading-none">Financial independence age</h2>
                <div className="flex gap-4">
                  <div className="bg-white border border-gray-100 shadow-[0_4px_15px_rgb(0,0,0,0.03)] px-10 py-6 rounded-2xl text-center">
                    <div className="text-[10px] text-gray-400 mb-1 font-bold">Current Trajectory</div>
                    <div className="text-[42px] font-extrabold text-[#294F7C] leading-none">65</div>
                    <div className="text-[10px] text-gray-400 mt-2 font-bold max-w-[100px] mx-auto">Based on current savings you have</div>
                  </div>
                  <div className="bg-[#EEF6FF] border border-[#D5E9FF] px-10 py-6 rounded-2xl text-center relative flex flex-col justify-center">
                    {/* Sooner Arrow Image */}
                    <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                      <Image src="/sooner.png" alt="Sooner" width={125} height={24} className="object-contain" />
                    </div>
                    <div className="text-[10px] text-[#4B90E2] mb-1 font-extrabold uppercase tracking-wider font-urbanist">Your Potential</div>
                    <div className="text-[42px] font-extrabold text-[#4B90E2] leading-none font-urbanist">38</div>
                    <div className="text-[10px] text-[#4B90E2] mt-2 font-extrabold max-w-[120px] mx-auto leading-tight font-urbanist">By following our personalized roadmap</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[20px] font-medium text-[#294F7C] mb-8 font-urbanist leading-none">Your score breakdown</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 font-bold">
                  <ProgressBar label="Emergency Funds" value={0} max={20} />
                  <ProgressBar label="Liquidity" value={11} max={20} />
                  <ProgressBar label="Investments" value={20} max={20} />
                  <ProgressBar label="Health Insurance" value={20} max={20} />
                  <ProgressBar label="Life Insurance" value={7} max={20} />
                  <ProgressBar label="Savings" value={16} max={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boxed Roadmap Section */}
        <div className="bg-white rounded-[32px] p-10 border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <h2 className="text-[24px] font-medium text-[#294F7C] mb-10 font-urbanist leading-none">
            Your personalized roadmap to <span className="font-extrabold">70+ WealthUp</span> score
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoadmapCard
              step={1}
              status="Critical"
              title="Build your safety net (Emergency fund)"
              description="Ankit, avoid a potential 2-year setback. Build your emergency fund to be risk-free within the next 6 months."
              commitment={500}
              points={20}
              funds={[
                { name: "HDFC Mid-Cap Fund", return: "26.8% (3Y)", logo: "/HDFC-bank.png" },
                { name: "Bandhan Small Ca..", return: "32% (3Y)", logo: "/bandhan-bank.png" }
              ]}
              buttonText="Start Investing Today"
            />
            <RoadmapCard
              step={2}
              status="Optimize"
              title="Optimize investments"
              description="Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile."
              isLocked={true}
              points={12}
              buttonText="Begin Investing"
            />
            <RoadmapCard
              step={3}
              status="Growth"
              title="Maximize growth"
              description="Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles."
              isLocked={true}
              points={8}
              buttonText="Analyse your Mutual Funds"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
