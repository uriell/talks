import Slide, { SlideProps } from "../../components/Slide";
import { H1, H3, Overline, Text } from "../../components/Typography";
import Flex from "../../components/Flex";
import Hr from "../../components/Hr";
import Avatar from "../../components/Avatar";
import Image from "../../components/Image";
import { Item, Unordered } from "../../components/Lists";

import meSrc from "../../images/me.png";
import peterCssSrc from "../../images/peterCss.gif";
import olderBrowserCssSrc from "../../images/olderBrowserCss.png";
import CodeSurfer from "../../components/CodeSurfer";

const slide_1: SlideProps = {
  palette: "dark",
  children: () => (
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
        width="640"
        height="480"
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
  backgroundUrl: olderBrowserCssSrc,
  padding: "0",
  children: () => (
    <Flex
      flex="1"
      justify="center"
      align="center"
      className="has-blurred-background"
    >
      <Image
        src={olderBrowserCssSrc}
        width="640"
        height="480"
        alt="older browser styled before css was created"
      />
    </Flex>
  ),
};

const slide_5: SlideProps = {
  justify: "center",
  children: () => (
    <H1 suffix=".">
      Só que, alguns dos <br /> problemas da época, <br />
      <strong>acontecem até hoje</strong>
    </H1>
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
          padding: "10vmax",
          palette: "navy",
          arrow: "right",
          shadow: true,
          children: () => (
            <H3 weight="bold" suffix=":">
              3 Problemas persistentes do CSS
            </H3>
          ),
        },
        {
          padding: "10vmax",
          palette: "white",
          children: () => (
            <Unordered>
              <Item>Namespace global</Item>
              <Item>Isolamento</Item>
              <Item>Arquivos muito grandes</Item>
            </Unordered>
          ),
        },
      ]}
    />
  ),
};

const section_slides: Array<SlideProps | SlideProps[]> = [
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  slide_6,
];

export default section_slides;
