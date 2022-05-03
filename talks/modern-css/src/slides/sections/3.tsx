import { SlideProps } from "../../components/Slide";
import { H1, H2, H3, Overline, Text } from "../../components/Typography";

const slide_1: SlideProps = {
  palette: "navy",
  children: () => (
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
        <br />
        <Text>Olá Mundo</Text>
      </div>
    </>
  ),
};

const section_slides: Array<SlideProps | SlideProps[]> = [slide_1];

export default section_slides;
