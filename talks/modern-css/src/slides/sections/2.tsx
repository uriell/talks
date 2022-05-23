import SlidingBullets from "../../animations/SlidingBullets";
import Image from "../../components/Image";
import Lists from "../../components/Lists";
import Slide, { SlideProps } from "../../components/Slide";
import { H1, H2, Link } from "../../components/Typography";

import meThinkingSrc from "../../images/me-thinking.png";

const slide_1: SlideProps = {
  justify: "center",
  children: () => (
    <>
      <H1 weight="regular">Mas como esses problemas</H1>
      <H1 weight="bold" suffix="?">
        foram resolvidos
      </H1>
    </>
  ),
};

const slide_2: SlideProps = {
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
              Metodologias comumente utilizadas
            </H2>
          ),
        },
        {
          padding: "6rem",
          palette: "white",
          justify: "center",
          children: () => (
            <SlidingBullets
              index={index}
              component={Lists.Unordered}
              placeholderHeight={3.25}
            >
              <Lists.Item>
                SMACSS
                <Lists.ItemDesc>
                  Guia <i>&amp;</i> boas práticas
                </Lists.ItemDesc>
                <Lists.ItemDesc>
                  Escalável <i>&amp;</i> modular
                </Lists.ItemDesc>
              </Lists.Item>
              <Lists.Item>
                OOCSS
                <Lists.ItemDesc>
                  Estrutura <i>!==</i> aparência
                </Lists.ItemDesc>
                <Lists.ItemDesc>
                  Princípio de responsabilidade <i>única</i>
                </Lists.ItemDesc>
              </Lists.Item>
              <Lists.Item>
                BEM
                <Lists.ItemDesc>
                  Escopo <i>controlado</i>
                </Lists.ItemDesc>
                <Lists.ItemDesc>
                  Estrutura simples e <i>robusta</i>
                </Lists.ItemDesc>
              </Lists.Item>
            </SlidingBullets>
          ),
        },
      ]}
    />
  ),
};

const slide_3: SlideProps = {
  justify: "center",
  children: () => (
    <H1 weight="regular">
      Veio a necessidade de fazer <br /> <i>MORE</i> with <i>LESS</i> 😎
    </H1>
  ),
};

const slide_4: SlideProps = {
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
              Pré-processamento de CSS
            </H2>
          ),
        },
        {
          padding: "6rem",
          palette: "white",
          justify: "center",
          children: () => (
            <SlidingBullets
              index={index}
              component={Lists.Unordered}
              placeholderHeight={2.25}
            >
              <Lists.Item>
                S(A|C)SS
                <Lists.ItemDesc>
                  <Link target="_blank" href="https://sass-lang.com">
                    sass-lang.com
                  </Link>
                </Lists.ItemDesc>
              </Lists.Item>
              <Lists.Item>
                LESS
                <Lists.ItemDesc>
                  <Link target="_blank" href="https://lesscss.org">
                    lesscss.org
                  </Link>
                </Lists.ItemDesc>
              </Lists.Item>
              <Lists.Item>
                Stylus
                <Lists.ItemDesc>
                  <Link target="_blank" href="https://stylus-lang.com">
                    stylus-lang.com
                  </Link>
                </Lists.ItemDesc>
              </Lists.Item>
            </SlidingBullets>
          ),
        },
      ]}
    />
  ),
};

const slide_5: SlideProps = {
  justify: "center",
  children: () => (
    <>
      <H1 weight="regular">Com isso veio o hype de</H1>
      <H1 weight="bold" suffix=".">
        variáveis, aninhamento, <br />
        mixins e funções
      </H1>
    </>
  ),
};

const slide_6: SlideProps = {
  palette: "navy",
  justify: "center",
  children: () => (
    <>
      <Image
        src={meThinkingSrc}
        alt="a memoji of myself thinking"
        style={{
          boxShadow: "none",
          position: "absolute",
          right: "10rem",
          width: "13.125rem",
          filter: "drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5))",
        }}
      />
      <div>
        <H1 weight="regular">Mas nós acabamos</H1>
        <H1 weight="bold" suffix="...">
          duplicando código
        </H1>
      </div>
    </>
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
