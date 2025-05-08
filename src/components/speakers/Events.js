import stratera from "../../images/konusmacilar-25/stratera.jpg";
import dilaraozden from "../../images/konusmacilar-25/dilara_ozden.jpg";

const Events = () => {
  return (
    // Flex container ile merkezleme
    <div className="overflow-x-hidden w-full flex flex-wrap justify-center gap-2">
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
            className="w-full h-full object-cover object-center"
            alt="Dilara Özden"
            src={dilaraozden || "/placeholder.svg"}
          />
        </div>
        <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
          <p className="text-white cursor-pointer text-center konusmaci">
            Dilara Özden
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;