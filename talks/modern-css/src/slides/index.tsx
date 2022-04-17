import Slide, { SlideProps } from "../components/Slide";
import { H1, H2, H3, Overline, Text } from "../components/Typography";

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
    children: (
      <>
        <div>
          <H1>Olá Mundo</H1>
          <H2>Olá Mundo</H2>
          <H3>Olá Mundo</H3>
          <Overline suffix="." suffixBlinking>
            Olá Mundo
          </Overline>
          <br />
          <Text size="large">Olá Mundo</Text>
          <br />
          <Text size="normal">Olá Mundo</Text>
          <br />
          <Text size="small">Olá Mundo</Text>
        </div>
      </>
    ),
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
