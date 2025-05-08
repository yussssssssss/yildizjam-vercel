import alpGeven from "../../images/konusmacilar-25/alp_geven.jpg"
import enginUlukurtlar from "../../images/konusmacilar-25/engin_ulukurtlar.jpeg"
import tolgay from "../../images/konusmacilar-25/tolgay.png"
import turkTelekom from "../../images/konusmacilar-25/turk_telekom_adam.jpg"
import umitCakir from "../../images/konusmacilar-25/umit_cakir.jpg"

const Speakers = () => {
  return (
    <div className="overflow-x-hidden w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <div className="flex flex-col relative speakers-box overflow-hidden transition-all">
        <div className="aspect-square w-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            alt="Alp Geven"
            src={alpGeven || "/placeholder.svg"}
          />
        </div>
        <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
          <p className="text-white cursor-pointer text-center konusmaci">Alp Geven</p>
        </div>
      </div>

      <div className="flex flex-col relative speakers-box overflow-hidden transition-all">
        <div className="aspect-square w-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            alt="Engin Ulukurtlar"
            src={enginUlukurtlar || "/placeholder.svg"}
          />
        </div>
        <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
          <p className="text-white cursor-pointer text-center konusmaci">Engin Ulukurtlar</p>
        </div>
      </div>

      <div className="flex flex-col relative speakers-box overflow-hidden transition-all">
        <div className="aspect-square w-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            alt="Tolgay Hıçkıran"
            src={tolgay || "/placeholder.svg"}
          />
        </div>
        <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
          <p className="text-white cursor-pointer text-center konusmaci">Tolgay Hıçkıran</p>
        </div>
      </div>

      <div className="flex flex-col relative speakers-box overflow-hidden transition-all">
        <div className="aspect-square w-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            alt="Recep Bilgin"
            src={turkTelekom || "/placeholder.svg"}
          />
        </div>
        <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
          <p className="text-white cursor-pointer text-center konusmaci">Recep Bilgin</p>
        </div>
      </div>

      <div className="flex flex-col relative speakers-box overflow-hidden transition-all">
        <div className="aspect-square w-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            alt="Ümit Çakır"
            src={umitCakir || "/placeholder.svg"}
          />
        </div>
        <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
          <p className="text-white cursor-pointer text-center konusmaci">Ümit Çakır</p>
        </div>
      </div>
    </div>
  )
}

export default Speakers
