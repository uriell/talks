import { SlideProps } from "../../components/Slide";
import { H1, H3, Overline } from "../../components/Typography";

import Flex from "../../components/Flex";
import Hr from "../../components/Hr";
import Avatar from "../../components/Avatar";

import meSrc from "../../images/me.png";

const slide_1: SlideProps = {
  palette: "dark",
  children: (
    <Flex flow="column" justify="center" flex="1">
      <Overline>as diversas formas do</Overline>
      <H1 suffix="." weight="bold">
        CSS Moderno
      </H1>
      <Hr width="6rem" />
      <Flex padding="1rem 0 0 0">
        <Avatar src={meSrc} margin="0 0.5rem 0 0" />
        <H3 weight="bold">Uriell Viana</H3>
      </Flex>
    </Flex>
  ),
};

const section_slides: Array<SlideProps | SlideProps[]> = [slide_1];

export default section_slides;
