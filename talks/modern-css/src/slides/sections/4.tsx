import CodeSurfer from "../../components/CodeSurfer";
import { SlideProps } from "../../components/Slide";
import { H1, H2, Text } from "../../components/Typography";

const slide_1: SlideProps = {
  palette: "white",
  justify: "center",
  children: () => (
    <>
      <H2 weight="bold" suffix="...">
        Mas então
      </H2>
      <br />
      <H2 weight="regular">Metodologias, pré &amp; pós processadores</H2>
      <H2 weight="bold" suffix="?">
        resolveram os 3 problemas, certo
      </H2>
    </>
  ),
};

const slide_2: SlideProps = {
  justify: "center",
  children: () => (
    <>
      <H1 weight="regular">Sim,</H1>
      <H1 weight="bold" suffix="?">
        mas e na prática
      </H1>
    </>
  ),
};

const slide_3_steps = [
  {
    code: `<template>
</template>

<style scoped>
</style>`,
    lang: "html",
  },
  {
    code: `<template>
  <div class="hello">
    <h2>Essentials</h2>
    <ul>
      <li>Core Docs</li>
      <li class="highlighted">Forum</li>
    </ul>
  </div>
</template>

<style scoped>
</style>`,
    lang: "html",
  },
  {
    code: `<template>
  <div class="hello">
    <h2>Essentials</h2>
    <ul>
      <li>Core Docs</li>
      <li class="highlighted">Forum</li>
    </ul>
  </div>
</template>

<style scoped>
  h1, h2 { font-weight: normal }
  ul { list-style-type: none; padding: 0 }
  a { color: #42b983 }
  .highlighted { font-weight: bold }
</style>`,
    lang: "html",
  },
];

const slide_3: SlideProps = {
  palette: "navy",
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        CSS no Vue
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

const slide_4_steps = [
  {
    code: `const Card = () => (
  <div>
    Content
  </div>
);`,
    lang: "jsx",
  },
  {
    code: `const style = {
  borderRadius: "3px",
  WebkitBackdropFilter: "blur(5px)",
  backgroundColor: "rgba(255, 255, 255, 0.85)"
};

const Card = () => (
  <div style={styleObj}>
    Content
  </div>
);`,
    lang: "jsx",
  },
];

const slide_4: SlideProps = {
  palette: "dark",
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        CSS Inline no React
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_4_steps}
        backgroundColor={backgroundColor}
        fontSize="1.5rem"
      />
    </>
  ),
};

const slide_5: SlideProps = {
  palette: "navy",
  justify: "center",
  children: () => (
    <>
      <H1 weight="regular">Trazendo pro lado do React,</H1>
      <H1 weight="bold" suffix="?">
        o que é mais popular
      </H1>
    </>
  ),
};

const slide_6_steps = [
  {
    code: `const styles = {
};

const { classes } = jss.createStyleSheet(styles).attach();

document.body.innerHTML = \`
  <button>Button</button>
  <button>CTA Button</button>
\`;`,
    lang: "js",
  },
  {
    code: `const styles = {
  button: {
  },
  ctaButton: {
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

document.body.innerHTML = \`
  <button class="\${classes.button}">Button</button>
  <button class="\${classes.ctaButton}">CTA Button</button>
\`;`,
    lang: "js",
  },
  {
    code: `const styles = {
  button: {
    "&:hover": {
      backgroundColor: "blue",
    }
  },
  ctaButton: {
    extend: "button",
    "&:hover": {
      border: "1px solid white"
    }
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

document.body.innerHTML = \`
  <button class="\${classes.button}">Button</button>
  <button class="\${classes.ctaButton}">CTA Button</button>
\`;`,
    lang: "js",
  },
];

const slide_6: SlideProps = {
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        Exemplo do JSS
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_6_steps}
        backgroundColor={backgroundColor}
        fontSize="0.9rem"
      />
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
