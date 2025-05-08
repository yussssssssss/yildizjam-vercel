import React from 'react'
import aliGhadiri from '../../images/konusmacilar-25/ali_ghadiri.jpg'
import birsenDemirkir from '../../images/konusmacilar-25/birse_demirkir.jpg'
import denizEvrensel from '../../images/konusmacilar-25/deniz_evrensel.jpg'
import mazharMustafaoglu from '../../images/konusmacilar-25/mazhar_mustafaoglu.png'
import hazarSarisaltik from '../../images/konusmacilar-25/hazar_sarisaltik.jpg'
import mertVanlioglu from '../../images/konusmacilar-25/mert_vanlioglu.jpg'
import osmanYalin from '../../images/konusmacilar-25/osman_yalin.jpg'
import umitCakir from '../../images/konusmacilar-25/umit_cakir.jpg'
import toprakSeyyid from '../../images/konusmacilar-25/toprak_seyid_dogan.jpg'

const Mentors = () => {
    return (
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-6xl px-4">
          {/* Konuşmacı 1 */}
          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                alt='Birsen Demirkır'
                src={birsenDemirkir || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Birsen Demirkır
              </p>
            </div>
          </div>
  
          {/* Konuşmacı 2 */}
          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Deniz Evrensel"
                src={denizEvrensel || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Deniz Evrensel
              </p>
            </div>
          </div>

          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Mazhar Mustafaoglu"
                src={mazharMustafaoglu || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Mazhar Mustafaoglu
              </p>
            </div>
          </div>

          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Hazar Sarısaltık"
                src={hazarSarisaltik || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Hazar Sarısaltık
              </p>
            </div>
          </div>

          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Mert Vanlıoğlu"
                src={mertVanlioglu || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Mert Vanlıoğlu
              </p>
            </div>
          </div>

          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Osman Yalın"
                src={osmanYalin || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Osman Yalın
              </p>
            </div>
          </div>

          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Ümit Çakır"
                src={umitCakir || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Ümit Çakır
              </p>
            </div>
          </div>

          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Toprak Seyyid Doğan"
                src={toprakSeyyid || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Toprak Seyyid Doğan
              </p>
            </div>
          </div>

          <div className="flex flex-col relative speakers-box overflow-hidden transition-all w-[calc(50%-0.5rem)] sm:w-[180px] md:w-[200px] lg:w-[300px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                alt="Ali Ghadiri"
                src={aliGhadiri  || "/placeholder.svg"}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden">
              <p className="text-white cursor-pointer text-center konusmaci">
                Ali Ghadiri
              </p>
            </div>
          </div>
  
         
        </div>
      </div>
    );
  };
  
  export default Mentors;