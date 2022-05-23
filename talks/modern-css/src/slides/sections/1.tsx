import Slide, { SlideProps } from "../../components/Slide";
import { H1, H2, H3, Overline, Text } from "../../components/Typography";
import Flex from "../../components/Flex";
import Hr from "../../components/Hr";
import Avatar from "../../components/Avatar";
import Image from "../../components/Image";

import mePhotoSrc from "../../images/me.png";
import peterCssSrc from "../../images/peterCss.gif";
import olderBrowserCssSrc from "../../images/olderBrowserCss.png";
import ie5ForMacSrc from "../../images/ie5-for-mac.png";
import CodeSurfer from "../../components/CodeSurfer";
import RandomWave from "../../animations/RandomWave";
import ImageSwap from "../../animations/ImageSwap";
import Lists from "../../components/Lists";
import SlidingBullets from "../../animations/SlidingBullets";

const slide_1: SlideProps = {
  palette: "dark",
  notes: "abc",
  children: () => (
    <Flex flow="column" justify="center" flex="1">
      <Overline>as diversas formas do</Overline>
      <H1 suffix="." weight="bold">
        CSS Moderno
      </H1>
      <Hr width="6rem" />
      <Flex padding="1rem 0 0 0">
        <Avatar src={mePhotoSrc} margin="0 0.5rem 0 0" />
        <H3 weight="bold">Uriell Viana</H3>
      </Flex>
      <RandomWave />
    </Flex>
  ),
};

const slide_2: SlideProps = {
  backgroundUrl: peterCssSrc,
  padding: "0",
  children: () => (
    <Flex
      flex="1"
      justify="center"
      align="center"
      className="has-blurred-background"
    >
      <Image
        src={peterCssSrc}
        style={{ width: "20rem", height: "15rem" }}
        alt="peter griffin playing with a blindshield as if it were css"
      />
    </Flex>
  ),
};

const steps = [
  {
    code: `<MULTICOL COLS="3" GUTTER="25">
</MULTICOL>`,
    lang: "html",
  },
  {
    code: `<MULTICOL COLS="3" GUTTER="25">
</MULTICOL>`,
    focus: "1[11:30]",
    lang: "html",
  },
  {
    code: `<MULTICOL COLS="3" GUTTER="25">
  <P>
    <FONT SIZE="4" COLOR="RED">
      Texto quebrado em colunas
    </FONT>
  </P>
</MULTICOL>`,
    lang: "html",
  },
  {
    code: `<MULTICOL COLS="3" GUTTER="25">
  <P>
    <FONT SIZE="4" COLOR="RED">
      Texto quebrado em colunas
    </FONT>
  </P>
</MULTICOL>`,
    focus: "3[11:31]",
    lang: "html",
  },
];

const slide_3: SlideProps = {
  children: (index) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        Antes do CSS
      </Text>
      <CodeSurfer index={index} steps={steps} />
    </>
  ),
};

const slide_4: SlideProps = {
  padding: "0",
  children: (index) => (
    <ImageSwap
      index={index}
      images={[
        {
          src: olderBrowserCssSrc,
          alt: "apple website in 1997, where only basic css features were available",
          width: "20rem",
          height: "15rem",
        },
        {
          src: ie5ForMacSrc,
          alt: "internet explorer 5 featuring near complete css spec exhibiting google's search website",
          width: "31rem",
          height: "18rem",
        },
      ]}
    />
  ),
};

const slide_5: SlideProps = {
  justify: "center",
  children: () => (
    <>
      <H1 weight="regular">
        Só que, alguns dos <br /> problemas da época,
      </H1>
      <H1 weight="bold" suffix=".">
        acontecem até hoje
      </H1>
    </>
  ),
};

const slide_6: SlideProps = {
  palette: "white",
  flow: "row",
  padding: "0",
  children: (index) => (
    <Slide.Group
      index={index}
      slides={[
        {
          padding: "4.5rem",
          palette: "navy",
          arrow: "right",
          justify: "center",
          shadow: true,
          children: () => (
            <H2 weight="bold" suffix=":">
              3 Problemas persistentes do CSS
            </H2>
          ),
        },
        {
          padding: "6rem",
          palette: "white",
          justify: "center",
          children: (index) => (
            <SlidingBullets index={index} component={Lists.Unordered}>
              <Lists.Item>Namespace global</Lists.Item>
              <Lists.Item>Isolamento</Lists.Item>
              <Lists.Item>Arquivos muito grandes</Lists.Item>
            </SlidingBullets>
          ),
        },
      ]}
    />
  ),
};

const section_slides: SlideProps[] = [
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  slide_6,
];

export default section_slides;
