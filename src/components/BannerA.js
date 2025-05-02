import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import makeagame from "../images/makeagame.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const toRotate = ["SEMİNERLER", "YARIŞMA", "FUAYE", "Ödül"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(300);
    } else {
      // setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="bg-cover bg-center home-section min-h-[90vh] md:h-[90vh]">
      <div className="w-full flex justify-center items-center py-10 md:py-0">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-10 md:mt-20 gap-8">
              {/* Sol Metin Alanı */}
              <div className="animate__animated animate__backInDown md:mx-5 p-5">
                <h2 className="md:text-[5vh] text-[4vh] primarycolor text-center font-bold">
                  SKY LAB KULÜBÜ'nden
                </h2>
                <h2 className="md:text-[4vh] text-[3vh] primarycolor text-center">
                  YILDIZ JAM Oyun Geliştirme Zirvesi ve Yarışması
                </h2>
                <h5 className="md:text-[3vh] text-[3vh] text-gray-200 secondarycolor m-3 text-center">
                  YILDIZ JAM'de <br /> neler var?
                </h5>
  
                <div className="thirdcolor h-[12vh] md:h-[18vh] px-3 text-center flex justify-center items-center overflow-hidden">
  <span className="lexend text-[6vh] md:text-[8vh] leading-none">{text}</span>
</div>
  
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                  <a
                    href="https://skyl.app/yildizjam-katilimci-formu"
                    target="_blank"
                    className="border px-4 py-2 text-black border-black text-xl md:text-2xl text-center w-[80vw] md:w-48"
                  >
                    ZİRVEYE KAYIT OL
                  </a>
                  <a
                    href="https://skyl.app/yildizjam-yarisma-basvuru-formu"
                    target="_blank"
                    className="border px-4 py-2 text-black border-black text-xl md:text-2xl text-center w-[80vw] md:w-48"
                  >
                    YARIŞMAYA KAYIT OL
                  </a>
                </div>
              </div>
  
              {/* Sağ Görsel */}
              <div className="flex justify-center items-start md:items-center animate__animated animate__backInDown">
                <img
                  className="max-h-[40vh] max-w-[40vh] md:max-h-[80vh] md:max-w-[80vh] mt-0 md:mt-[3vh]"
                  src={makeagame}
                  alt="images"
                />
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
}  

export default Banner;
