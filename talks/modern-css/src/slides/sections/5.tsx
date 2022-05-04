import CodeSurfer from "../../components/CodeSurfer";
import Flex from "../../components/Flex";
import Image from "../../components/Image";
import { SlideProps } from "../../components/Slide";
import { Link, Text } from "../../components/Typography";

import cssInJsSrc from "../../images/css-in-js.png";

const slide_1_steps = [
  {
    code: `<div class="Grid_Grid__3Y92C">
  <div class="Grid_GridRow__2KjFd">
    <div class="Grid_GridColumn__2Du6a"></div>
    <div class="Grid_GridColumn__2Du6a"></div>
    <div class="Grid_GridColumn__2Du6a"></div>
  </div>
  <div class="Grid_GridRow__2KjFd">
    <div class="Grid_GridColumn__2Du6a"></div>
    <div class="Grid_GridColumn__2Du6a"></div>
    <div class="Grid_GridColumn__2Du6a"></div>
  </div>
  <div class="Grid_GridRow__2KjFd">
    <div class="Grid_GridColumn__2Du6a"></div>
    <div class="Grid_GridColumn__2Du6a"></div>
    <div class="Grid_GridColumn__2Du6a"></div>
  </div>
</div>`,
    lang: "html",
  },
];

const slide_1: SlideProps = {
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        Resultado gerado pelo CSS Modules
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_1_steps}
        backgroundColor={backgroundColor}
        fontSize="0.9rem"
      />
    </>
  ),
};

const slide_2: SlideProps = {
  backgroundUrl: cssInJsSrc,
  padding: "0",
  children: () => (
    <Flex
      flex="1"
      flow="column"
      justify="center"
      align="center"
      className="has-blurred-background"
    >
      <Link
        target="_blank"
        href="https://github.com/stereobooster/css-in-js-101"
      >
        github.com/stereobooster/css-in-js-101
      </Link>
      <Image
        src={cssInJsSrc}
        margin="1rem 0 0 0"
        width="1200"
        height="600"
        alt="many css in js library logos layed out as a meme"
      />
    </Flex>
  ),
};

const section_slides: SlideProps[] = [slide_1, slide_2];

export default section_slides;
