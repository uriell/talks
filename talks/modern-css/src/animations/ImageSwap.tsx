import Flex from "../components/Flex";
import Image from "../components/Image";
import Slide from "../components/Slide";
import SubSlideRouter from "../components/SubSlideRouter";

type ImageItem = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

type ImageSwapProps = {
  index: number;
  images: ImageItem[];
};

const ImageSwap: React.FC<ImageSwapProps> = ({ index, images }) => (
  <SubSlideRouter index={index} stepsCount={images.length}>
    {(currentSubSlide) => {
      const image = images[currentSubSlide - 1];

      return (
        <Slide
          index={currentSubSlide}
          data-index={currentSubSlide}
          backgroundUrl={image.src}
          padding="0"
        >
          {() => (
            <Flex
              flex="1"
              justify="center"
              align="center"
              className="has-blurred-background"
            >
              <Image
                src={image.src}
                alt={image.alt}
                style={{ width: image.width, height: image.height }}
              />
            </Flex>
          )}
        </Slide>
      );
    }}
  </SubSlideRouter>
);

export default ImageSwap;
