import Slide, { SlideProps } from "../components/Slide";

const slides: Array<SlideProps | SlideProps[]> = [
  [
    {
      palette: "dark",
      children: "Hello World",
      arrow: "bottom",
      shadow: true,
    },
    {
      palette: "navy",
      children: "Hello World",
      arrow: "bottom",
      shadow: true,
    },
    {
      palette: "white",
      children: "Hello World",
    },
  ],
  {
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
  },
  {
    palette: "navy",
    children: "Olá Mundo",
  },
  {
    palette: "green",
    children: "Hola Mundo",
  },
  {
    palette: "white",
    children: "Привет, мир",
  },
];

export default slides;
