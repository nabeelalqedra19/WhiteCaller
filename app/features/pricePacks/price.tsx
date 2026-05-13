export default function Price() {
  return (
    <div className="app-container my-30">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-1">
          <div className="point"></div>
          <div className="text-primary font-medium text-sm sm:text-lg ">
            Simple Pricing Option
          </div>
        </div>

        <h1 className="text-primary font-bold text-2xl sm:text-3xl md:text-[40px] leading[1.2] text-center ">
          Choose the Right Plan for Your and Your Team
        </h1>
      </div>

      <div className="text-primary grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="px-5 py-10 bg-[#F4F4F4] flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl font-bold leading-[1.1] text-center ">
            Basic
          </h1>

          <div className="text-center p-5 border-y-1 border-[#D3D3D3]">
            <div className="text-5xl font-bold leading-[1.1] mb-5">
              $7.99 / <span className="text-xl">month</span>
            </div>
            <button className="text-button text-lg leading-[1.6] py-3 px-6 bg-secondary">
              Billed as $96 per year
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-sm md:text-lg text-[#7D7D7D] font-bold leading-[1.3] text-center">
              Unlimited members
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              <span className="text-primary font-bold">Unlimited</span> feedback
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Weekly team Feedback Friday
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Custom Kudos <span className="text-primary font-bold">+9 illustration</span>
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Team feedback history (30 items)
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Personal feedback{" "}
            </span>
          </div>

          <button className="px-10 py-5 bg-button text-white text-xl text-semibold cursor-pointer">Get Started</button>
        </div>
        <div className="px-5 py-10 bg-button text-white flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl font-bold leading-[1.1] text-center ">
            Advanced
          </h1>

          <div className="text-center p-5 border-y-1 border-[#D3D3D3]">
            <div className="text-5xl font-bold leading-[1.1] mb-5">
              $9.99 / <span className="text-xl">month</span>
            </div>
            <button className="text-button text-lg leading-[1.6] py-3 px-6 bg-white">
              Billed as $199 per yearr
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-lg leading-[1.3] text-center">
              Unlimited members
            </span>
            <span className="text-lg leading-[1.3] text-center">
              <span className="text-secondary">Unlimited</span> feedback
            </span>
            <span className="text-lg leading-[1.3] text-center">
              Weekly team Feedback Friday
            </span>
            <span className="text-lg leading-[1.3] text-center">
              Custom Kudos <span className="text-secondary">+9 illustration</span>
            </span>
            <span className="text-lg leading-[1.3] text-center">
              Team feedback history (30 items)
            </span>
            <span className="text-lg leading-[1.3] text-center">
              Personal feedback{" "}
            </span>
          </div>

          <button className="px-10 py-5 bg-white text-button text-xl text-semibold cursor-pointer">Get Started</button>
        </div>
        <div className="px-5 py-10 bg-[#F4F4F4] flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl font-bold leading-[1.1] text-center ">
            Pro
          </h1>

          <div className="text-center p-5 border-y-1 border-[#D3D3D3]">
            <div className="text-5xl font-bold leading-[1.1] mb-5">
              $9.99 / <span className="text-xl">month</span>
            </div>
            <button className="text-button text-lg leading-[1.6] py-3 px-6 bg-secondary">
              Billed as $199 per year
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Unlimited members
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              <span className="text-primary font-bold">Unlimited</span> feedback
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Weekly team Feedback Friday
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Custom Kudos <span className="text-primary font-bold">+9 illustration</span>
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Team feedback history (30 items)
            </span>
            <span className="text-lg text-[#7D7D7D] leading-[1.3] text-center">
              Personal feedback{" "}
            </span>
          </div>

          <button className="px-10 py-5 bg-button text-white text-xl text-semibold cursor-pointer">Get Started</button>
        </div>
      </div>
    </div>
  );
}
