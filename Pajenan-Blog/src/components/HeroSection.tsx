
export function HeroSection() {
    return (
      <main className=" py-10  bg[#F9F8F6] flex flex-col justify-center  mx-auto xl:mx-20 xl:ml-20">
        <div className=" flex flex-col xl:flex-row items-center  ">
          <article>
            <section className="  m-5  ">
              <h1 className="  text-black text-5xl text-center  xl:text-right font-semibold ">
                Stay <br className="hidden lg:block" /> Informed, <br /> Stay
                Inspired
              </h1>
            </section>
            <section className=" m-2 pl-3">
              <h2 className=" text-center text-gray-500 text-wrap xl:text-right font-light text-lg ">
                Discover a World of Knowledge at Your Fingertips. Your Daily Dose
                of Inspiration and Information.
              </h2>
            </section>
          </article>
          <img
           src="./src/assets/Thomaspic.png" 
            alt="Personalpic"
            className="h-[500px] w-[350px] xl:w-[400px] object-cover rounded-lg shadow-lg xl:w-1/3 mx-4 mb-8 mt-5 xl:mb-0"
          />
  
          <section className="py-1 w-23 m-4 ">
            <div className=" py-2">
              <span className="text-xs font-normal"> -Author </span>
              <h3 className="text-lg font-semibold"> Thompson P. </h3>
            </div>
            <article className="py-2 ">
              <p>
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
              </p>
              <p className="pt-5">
                When i’m not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </p>
            </article>
          </section>
        </div>
      </main>
    );
  }

  export default HeroSection