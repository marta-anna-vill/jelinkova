import { contentHandler } from "./content/ContentHandler";
import { homeContentData } from "./content/HomeContent";
import { Crosslink } from "../modules/Crosslink";
import { ContentImage } from "../modules/ContentImage";
import { massageContentData } from "./content/MassagesContent";

const About = () => {
  return (
    <>
      <div className="base-container">
        <h1>About</h1>
      </div>

      {/* <Crosslink data={contentHandler(homeContentData, "Crosslink", 1)} /> */}

      <div className="base-container">
        <div className="about-content">
          <h2>Renata Jelínková</h2>
          Lorem ipsum dolor sit amet...
        </div>
      </div>

      {/* <ContentImage data={contentHandler(massageContentData, "ContentImage", 1)} />

    <ContentImage data={contentHandler(massageContentData, "ContentImage", 2)} />

    <ContentImage data={contentHandler(massageContentData, "ContentImage", 3)} />  */}

    </>
  );
};

export default About;