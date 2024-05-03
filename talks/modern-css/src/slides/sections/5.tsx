import styled from "styled-components";
import { COLORS } from "@ditointernet/uai-foundation";

import Flex from "../../components/Flex";
import Slide, { SlideProps } from "../../components/Slide";
import { H1, H2, H3, Link, Text } from "../../components/Typography";
import Lists from "../../components/Lists";
import Image from "../../components/Image";
import CodeSurfer from "../../components/CodeSurfer";
import SlidingBullets from "../../animations/SlidingBullets";

import { ReactComponent as LinkedinLogo } from "../../images/linkedin-logo.svg";

import { ReactComponent as GithubLogo } from "../../images/github-logo.svg";
import { ReactComponent as SelfUrl } from "../../images/self-url.svg";

import cssInJsSrc from "../../images/css-in-js.png";
import { ReactComponent as StyledSystemLogo } from "../../images/styled-system-logo.svg";
import { ReactComponent as VanillaExtractLogo } from "../../images/vanilla-extract-logo.svg";
import { ReactComponent as WindiLogo } from "../../images/windi-logo.svg";
import { ReactComponent as StitchesLogo } from "../../images/stitches-logo.svg";

const StyledAppearWrapper = styled.div`
  position: absolute;
  width: 37.5rem;
  height: 18.75rem;
  margin-top: 2rem;

  svg {
    width: 4rem;
    height: 4rem;
    position: absolute;

    &:nth-child(1) {
      top: 4rem;
      left: 12rem;
    }

    &:nth-child(2) {
      top: 2rem;
      right: 10rem;
    }

    &:nth-child(3) {
      bottom: 4rem;
      left: 8rem;
    }

    &:nth-child(4) {
      bottom: 3rem;
      right: 6rem;
    }
  }
`;

const slide_1: SlideProps = {
  backgroundUrl: cssInJsSrc,
  padding: "0",
  notes:
    "Só no mundo de CSS in JS temos tantas opções que as vezes é difícil entender qual escolher e porque alguma é mais popular que a outra. \n\n E eu tinha esse slide em 2019, de lá pra cá só aumentaram as opções.",
  children: (index) => (
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
        style={{ width: "37.5rem", height: "18.75rem" }}
        alt="many css in js library logos layed out as a meme"
      />
      <StyledAppearWrapper>
        <SlidingBullets index={index} component={Lists.Unordered}>
          <StyledSystemLogo />
          <VanillaExtractLogo width="8rem" height="8rem" />
          <StitchesLogo />
          <WindiLogo />
        </SlidingBullets>
      </StyledAppearWrapper>
    </Flex>
  ),
};

const slide_2: SlideProps = {
  justify: "center",
  notes:
    "Tudo é preferência pessoal, e o que fará o time em questão trabalhar melhor.",
  children: () => (
    <>
      <H1 weight="regular">Mas nenhuma é</H1>
      <H1 weight="bold" suffix=".">
        melhor que a outra
      </H1>
    </>
  ),
};

const slide_3_steps = [
  {
    code: `const base = "font-sans text-base rounded-full px-2 py-1 "

const variants = {
  primary: 'bg-blue-500 text-white cursor-pointer',
  outline: 'bg-white text-gray-500 border border-gray-500 cursor-pointer',
  disabled: 'bg-gray-500 text-black cursor-not-allowed'
};

const Button = styled.button.attrs(({ variant }) => ({
  className: base + variants[variant]
}))\`
  width: \${(props) => props.width};
\`;`,
    lang: "jsx",
  },
];

const slide_3: SlideProps = {
  palette: "navy",
  notes:
    "Podemos até aproveitar de vários dos avanços da comunidade de CSS em conjunto. \n\n Um exemplo mais básico seria como aproveitar do benefício de performance do CSS atômico/funcional, mas da personalização dinâmica do CSS in JS.",
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        Préprocessador <i>+</i> CSS Atômico <i>+</i> CSS in JS
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_3_steps}
        fontSize="1rem"
        backgroundColor={backgroundColor}
      />
    </>
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
          palette: "green",
          arrow: "right",
          justify: "center",
          shadow: true,
          children: () => (
            <>
              <H2 weight="regular">Concluindo,</H2>
              <H2 weight="bold" suffix="?" suffixColor={COLORS.NAVY_DARK}>
                qual foi o ganho
              </H2>
            </>
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
              placeholderHeight={3.75}
            >
              <Lists.Item suffix=";">
                Atacamos 3 dos maiores problemas em qualquer aplicação
              </Lists.Item>
              <Lists.Item suffix=";">
                Conhecemos a maioria das soluções relevantes no mercado pra CSS
              </Lists.Item>
              <Lists.Item suffix=".">
                Descobrimos alguns prós, contras e pontos de atenção na hora de
                aplicar
              </Lists.Item>
            </SlidingBullets>
          ),
        },
      ]}
    />
  ),
};

const UnorderedLinkList = styled(Lists.Unordered)`
  margin: 0.5rem 0 1rem;

  ${Lists.Item} {
    font-weight: 500;
    margin-bottom: 0.5rem;

    &:before {
      color: ${COLORS.NAVY_DARK};
    }
  }
`;

type LinkItemProps = { href: string; children: React.ReactNode };

const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => (
  <Lists.Item>
    <Link target="_blank" href={href}>
      {children}
    </Link>
  </Lists.Item>
);

const slide_5: SlideProps = {
  palette: "white",
  children: () => (
    <>
      <H3 weight="bold" suffix=":" margin="0 0 1rem 0">
        Links
      </H3>
      <Flex>
        <Flex flow="column" flex="1">
          <Text weight="semibold" size="small" suffix=":">
            Metodologias
          </Text>
          <UnorderedLinkList>
            <LinkItem href="https://smacss.com/">SMACSS</LinkItem>
            <LinkItem href="https://keycdn.com/blog/oocss">OOCSS</LinkItem>
            <LinkItem href="http://getbem.com/">BEM</LinkItem>
          </UnorderedLinkList>
          <Text weight="semibold" size="small" suffix=":">
            Pós-processadores
          </Text>
          <UnorderedLinkList>
            <LinkItem href="https://www.purgecss.com/">PurgeCSS</LinkItem>
            <LinkItem href="https://stylelint.io/">Stylelint</LinkItem>
            <LinkItem href="https://postcss.org/">PostCSS</LinkItem>
          </UnorderedLinkList>
        </Flex>
        <Flex flow="column" flex="1">
          <Text weight="semibold" size="small" suffix=":">
            Pré-processadores
          </Text>
          <UnorderedLinkList>
            <LinkItem href="https://sass-lang.com/">SASS</LinkItem>
            <LinkItem href="http://lesscss.org/">LESS</LinkItem>
            <LinkItem href="http://stylus-lang.com/">Stylus</LinkItem>
          </UnorderedLinkList>
          <Text weight="semibold" size="small" suffix=":">
            Bibliotecas
          </Text>
          <UnorderedLinkList>
            <LinkItem href="https://github.com/css-modules">
              CSS Modules
            </LinkItem>
            <LinkItem href="https://github.com/stereobooster/css-in-js-101">
              CSS in JS 101
            </LinkItem>
            <LinkItem href="https://tachyons.io/">CSS Funcional</LinkItem>
          </UnorderedLinkList>
        </Flex>
      </Flex>
    </>
  ),
};

const SpecialExternalLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  color: ${COLORS.WHITE};

  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }

  svg {
    margin-right: 0.25rem;
  }

  i {
    font-weight: 700;
    font-style: normal;
    color: ${COLORS.GREEN_MAIN};
  }
`;

const slide_6: SlideProps = {
  children: () => (
    <>
      <Flex flex="1" flow="column" justify="center">
        <H1 weight="bold" suffix="!" margin="0 0 0.5rem 0">
          Obrigado
        </H1>
        <Flex flow="column">
          <SpecialExternalLinks target="_blank" href="https://in.uriell.dev">
            <LinkedinLogo width="1rem" height="1rem" />
            <i>in</i>.uriell.dev
          </SpecialExternalLinks>
          <SpecialExternalLinks
            target="_blank"
            href="https://github.uriell.dev"
          >
            <GithubLogo width="1rem" height="1rem" />
            <i>github</i>.uriell.dev
          </SpecialExternalLinks>
          <SpecialExternalLinks
            target="_blank"
            href="https://modern-css.uriell.dev"
          >
            <SelfUrl width="1rem" height="1rem" />
            <i>modern-css</i>.uriell.dev
          </SpecialExternalLinks>
        </Flex>
      </Flex>
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
