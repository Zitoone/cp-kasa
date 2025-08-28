import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type PicsProps = {
    pictures: string[];
};
const Carousel = ({ pictures }: PicsProps) => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {pictures.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}/>              
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;