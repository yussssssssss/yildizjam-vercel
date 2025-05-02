import React from 'react'
import rocket from '../../images/rocket.png'

const SpeakersBar = () => {
    return (
        <nav className="w-full bg-white shadow h-[10vh] sticky top-[18vh] items-center flex justify-center z-50 opacity-90 overflow-hidden">

            <div className="flex justify-center">
                <h2 className="font-bold text-[30px] border-b-[3px] border-b-second speaker">KONUŞMACILAR</h2>
            </div>

            {/* // ROCKET */}
            <div className='speakersBar-rocket absolute left-0'>
                <img alt='rocket' src={rocket} className=' w-[20vh] rocket-image' />
            </div>
        </nav>
    )
}

export default SpeakersBar