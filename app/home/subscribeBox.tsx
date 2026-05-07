export default function SubscribeBox() {
  return (
    <div className="app-container w-full bg-gray-300 p-0 flex justify-center items-center my-30">
      <div className="w-full h-full bg-[#40DDB6BF] px-10 sm:px-20 py-10 md:py-15 flex flex-col justify-center items-center">
        <div className="lg:w-180 text-center">
          {" "}
          <div className="flex items-center justify-center gap-1">
            <div className="point bg-button "></div>
            <div className="text-primary font-medium text-sm sm:text-lg ">
              Subscribe Whitecollar
            </div>
          </div>
          <h1 className="text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading[1.2] text-center ">
            Need An Experienced <span className="text-white">Whitecollar</span> job Service? Contact Us
          </h1>
          <p className="text-primary text-sm sm:text-lg leading-[1.4] text-center">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinkingfurther the overal.
          </p>

          <button className="text-white bg-button p-3 sm:py-5 sm:px-8 font-semibold text-lg mt-5">Get Started</button>
        </div>
      </div>
    </div>
  );
}
