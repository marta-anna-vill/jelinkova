import { TopImage } from "../modules/TopImage";
import topImagePhoto from '../images/top-image-photo.png';

const Home = () => {
    return (
        <TopImage
            title="Welcome"
            marker="Beauty studio"
            perex="to Slow Beauty Eco Salon, an Organic Beauty Salon in New York"
            ctaName="Contact us"
            ctaUrl="/about"
            image={topImagePhoto}
        />

        // dalši komponenty ...
    );
};
  
  export default Home;