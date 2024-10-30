export default function Home() {
  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
      <article className="flex flex-col items-center text-white bg-black p-6 md:p-10 rounded-lg shadow-lg space-y-6 md:space-y-6 lg:space-y-0 md:flex-col lg:flex-row lg:space-x-6 max-w-xs md:max-w-lg lg:max-w-2xl">
        
        <section className="w-32 -ml-19 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-48 lg:h-48 overflow-hidden flex-shrink-0 transition-all duration-300 rounded-full md:rounded-lg lg:rounded-lg md:mt-0 lg:ml-0">
          <img
            src="/imagen.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </section>


        <section className="mt-6 md:mt-4 lg:mt-0 space-y-2 text-center md:text-center lg:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Jess Wilson</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">UX Engineer</p>
          <p className="text-xs md:text-sm lg:text-base text-gray-400">
            Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
          </p>

          <section className="flex justify-center md:justify-center lg:justify-start space-x-4 mt-4">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-xs md:text-sm lg:text-base hover:bg-white hover:text-black transition">
              Profile
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full text-xs md:text-sm lg:text-base hover:bg-gray-200 transition">
              Follow
            </button>
            </section>
        </section>
      </article>
    </main>
  );
}
