import React from 'react'
import '../index.css'
import { useState, useEffect } from 'react'
import TrackVisibility from 'react-on-screen';
import makeagame from '../images/makeagame.png'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const toRotate = ["SEMİNERLER", "YARIŞMA", "FUAYE", "Ödül"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            // setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            // setIndex(1);
            setDelta(300);
        } else {

            // setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="bg-cover bg-center home-section h-[90vh] md:h-[90vh]  " >
            <div className="h-screen w-full  flex justify-center items-center">
                <TrackVisibility >
                    {({ isVisible }) =>
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center mb-20 mt-[10vh] md:mt-50 sm:mt-25  ">

                            <div className="animate__animated animate__backInDown md:m-5 p-5  pb-5 md:pb-1 md:mt-50 sm:mt-25" >
                                <h2 className='md:text-[5vh] text-[4vh] primarycolor  text-center font-bold '>SKY LAB KULÜBÜ'nden </h2>
                                <h2 className='md:text-[4vh] text-[3vh] primarycolor  text-center'>YILDIZ JAM Oyun Geliştirme Zirvesi ve Yarışması</h2>
                                <h5 className='md:text-[3vh] text-[3vh] text-gray-200 secondarycolor m-3 text-center'>YILDIZ JAM'de {<br />} neler var?</h5>
                                <div className="thirdcolor h-0 text-[5vh] md:text-[10vh] p-3 text-center mt-6 mb-20">
                                    <span className='lexend'>{text}</span>
                                </div>
                                <div className="thirdcolor h-0 text-[5vh] md:text-[10vh] p-3 text-center mt-6 ">
                                    <a href='https://skyl.app/yildizjam-katilimci-formu' target={"_blank"} className='border p-2 m-4 text-black border-r-6 border-black w-48 text-3xl text-center'>KAYIT OL</a>
                                </div>
                            </div>
                            <div className='justify-center items-center flex  drop-shadow-4xl animate__animated animate__backInDown'>
                                <img className="md:mt-[3vh] md:max-h-[90vh] md:max-w-[90vh] max-h-[40vh] max-w-[40vh] " src={makeagame} alt="images" />
                            </div>
                        </div>
                    }
                </TrackVisibility>
            </div>
        </section >
    )
}

export default Banner       