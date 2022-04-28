import Slide, { SlideProps } from "../../components/Slide";

const slide_1: SlideProps = {
  padding: "0",
  // flexFlow: "column",
  children: (
    <Slide.Group
      slides={[
        {
          palette: "dark",
          children: "Hello World",
          arrow: "right",
          shadow: true,
        },
        {
          palette: "navy",
          children: "Hello World",
          arrow: "right",
          shadow: true,
        },
        {
          palette: "white",
          children: "Hello World",
        },
      ]}
    />
  ),
};

const section_slides: Array<SlideProps | SlideProps[]> = [slide_1];

export default section_slides;
