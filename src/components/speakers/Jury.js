import stratera from "../../images/konusmacilar-25/stratera.jpg";
import birsenDemirkir from "../../images/konusmacilar-25/birse_demirkir.jpg";
import tolgay from "../../images/konusmacilar-25/tolgay.png";

const Jury = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-6xl px-4">
        {/* Konuşmacı 1 */}
        <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
          <div className="aspect-square w-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              alt='Dora "Stratera" Özsoy'
              src={stratera || "/placeholder.svg"}
            />
          </div>
          <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
            <p className="text-white cursor-pointer text-center konusmaci">
              Dora "Stratera" Özsoy
            </p>
          </div>
        </div>

        {/* Konuşmacı 2 */}
        <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
          <div className="aspect-square w-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              alt="Birsen Demirkır"
              src={birsenDemirkir || "/placeholder.svg"}
            />
          </div>
          <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
            <p className="text-white cursor-pointer text-center konusmaci">
              Birsen Demirkır
            </p>
          </div>
        </div>

        {/* Konuşmacı 3 */}
        <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
          <div className="aspect-square w-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              alt="Tolgay Hıçkıran"
              src={tolgay || "/placeholder.svg"}
            />
          </div>
          <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
            <p className="text-white cursor-pointer text-center konusmaci">
              Tolgay Hıçkıran
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jury;