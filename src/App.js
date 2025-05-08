// import logo from './logo.svg';
import NavBar from "./components/NavBar";
import BannerA from "./components/BannerA";
import Speakers from "./components/speakers/Speakers";
import SpeakersBar from "./components/speakers/SpeakersBar";
import Sponsors from "./components/sponsors/Sponsors";
import SponsorsBar from "./components/sponsors/SponsorsBar";
import EventBar from "./components/speakers/EventBar";
import Events from "./components/speakers/Events";
import Reason from "./components/Reason";
import Footer from "./components/Footer";
import questions from "./faq.json";

import JuryBar from "./components/speakers/JuryBar";
import Jury from "./components/speakers/Jury";

// import MiddleNav from "./components/MiddleNav";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import './index.css'

import "./fonts/ARCADE_N.TTF"

import useWindowDimensions from "./components/customhook/useWindowDimension";
import Marque from "./components/Marque";
import MentorsBar from "./components/speakers/MentorsBar";
import Mentors from "./components/speakers/Mentors";
import StantBarı from "./components/speakers/StantBarı";
import Stants from "./components/speakers/Stants";
import Banner from "./Banner";
import Prize from "./components/Prize";





function App() {

  const { height, width } = useWindowDimensions();




  return (
    <div className="App">

      <NavBar />
      <BannerA />
      <Marque />
      <Reason />
      <Prize />
      <SpeakersBar />
      <Speakers />
      <EventBar/>
      <Events/>
      <JuryBar/>
      <Jury/>
      <MentorsBar/>
      <Mentors/>
      <SponsorsBar />
      <Sponsors />

      <Banner>
    <Banner.Header>Sıkça Sorulan Sorular</Banner.Header>
  {questions.map((question) => (
    <Banner.Entity key={question.id}>
      <Banner.Question>{question.question}</Banner.Question>
      <Banner.Text>
        {question.isLink ? (
          <a
            href={question.link}
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            {question.linkText}
          </a>
        ) : question.isMultiLink ? (
          <>
            {question.links.map((link, idx) => (
              <div key={idx}>
                <a
                  href={link.href}
                  target="_blank"
                  style={{ textDecoration: "underline" }}
                >
                  {link.text}
                </a>
              </div>
            ))}
          </>
        ) : (
          question.answer
        )}
      </Banner.Text>
    </Banner.Entity>
  ))}
  <h4>
        Sorularınız için bize <a href="mailto:info@yildizskylab.com">info@yildizskylab.com</a> mail adresinden ulaşabilirsiniz.
  </h4>
</Banner>

      <Footer />
      
    </div>
  );
}

export default App;
