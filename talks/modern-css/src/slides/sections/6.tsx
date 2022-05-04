import Flex from "../../components/Flex";
import Slide, { SlideProps } from "../../components/Slide";
import { H1, H2, H3, Link, Text } from "../../components/Typography";

import { ReactComponent as DitoLogo } from "../../images/dito-logo.svg";
import { ReactComponent as LinkedinLogo } from "../../images/linkedin-logo.svg";
import styled from "styled-components";
import { COLORS } from "@ditointernet/uai-foundation";

import { ReactComponent as GithubLogo } from "../../images/github-logo.svg";
import { ReactComponent as SelfUrl } from "../../images/self-url.svg";
import Lists from "../../components/Lists";

const slide_1: SlideProps = {
  palette: "white",
  flow: "row",
  padding: "0",
  children: (index) => (
    <Slide.Group
      index={index}
      slides={[
        {
          padding: "7.5vmax",
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
          padding: "10vmax",
          palette: "white",
          justify: "center",
          children: () => (
            <Lists.Unordered>
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
            </Lists.Unordered>
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

const slide_2: SlideProps = {
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
            <LinkItem href="http://getbem.com/.com">BEM</LinkItem>
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

const slide_3: SlideProps = {
  children: () => (
    <>
      <DitoLogo />
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

const section_slides: SlideProps[] = [slide_1, slide_2, slide_3];

export default section_slides;
