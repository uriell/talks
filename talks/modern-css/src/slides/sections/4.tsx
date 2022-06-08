import { COLORS } from "@ditointernet/uai-foundation";
import styled from "styled-components";
import CodeSurfer from "../../components/CodeSurfer";
import { SlideProps } from "../../components/Slide";
import { H1, H2, Overline, Text } from "../../components/Typography";
import { transparentize } from "../../utils/functional";

const slide_1: SlideProps = {
  palette: "white",
  justify: "center",
  children: () => (
    <>
      <H2 weight="bold" suffix="...">
        Mas então
      </H2>
      <br />
      <H2 weight="regular">
        Metodologias, <br /> pré &amp; pós processadores
      </H2>
      <H2 weight="bold" suffix=",">
        endereçam o que foi <br /> mencionado
      </H2>
      <H2 weight="bold" suffix="?">
        certo
      </H2>
    </>
  ),
};

const slide_2: SlideProps = {
  justify: "center",
  children: () => (
    <>
      <H1 weight="regular">Em partes,</H1>
      <H1 weight="bold" suffix="...">
        vamos ver exemplos <br />
        das <i>frameworks</i> mais <br />
        populares
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
  <h1>Essentials</h1>
  <ul>
    <li>Core Docs</li>
    <li class="highlighted">Forum</li>
  </ul>
</template>

<style scoped>
</style>`,
    lang: "html",
  },
  {
    code: `<template>
  <h1>Essentials</h1>
  <ul>
    <li>Core Docs</li>
    <li class="highlighted">Forum</li>
  </ul>
</template>

<style scoped>
  h1 { font-weight: normal }
  ul { list-style-type: none; padding: 0 }
  .highlighted { font-weight: bold }
</style>`,
    lang: "html",
  },
  {
    code: `<template>
  <h1 data-v-790151bc>Essentials</h1>
  <ul data-v-4fe9b7bd>
    <li>Core Docs</li>
    <li class="highlighted" data-v-23306c50>Forum</li>
  </ul>
</template>

<style scoped>
  h1[data-v-790151bc] { font-weight: normal }
  ul[data-v-4fe9b7bd] { list-style-type: none; padding: 0 }
  .highlighted[data-v-23306c50] { font-weight: bold }
</style>`,
    lang: "html",
  },
];

const slide_3: SlideProps = {
  palette: "navy",
  notes:
    "No Vue podemos trabalhar o template HTML, lógica em JS e estilização CSS no mesmo arquivo. \n\n Mas o mais interessante é que ele oferece por padrão CSS com escopo local, deixando seus seletores específicos suficiente de maneira que não vão conflitar mais tarde.",
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        CSS no Vue
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_3_steps}
        fontSize="1.25rem"
        backgroundColor={backgroundColor}
      />
    </>
  ),
};

const slide_4_steps = [
  {
    code: `<p class="title">Styled!</p>

<style>
  p.title {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>`,
    lang: "html",
  },
  {
    code: `<p class="title svelte-15xksmp">Styled!</p>

<style>
  p.title.svelte-15xksmp {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>`,
    lang: "html",
  },
];

const slide_4: SlideProps = {
  palette: "dark",
  notes:
    "O Svelte, que também ganhou muita popularidade nos últimos anos oferece uma abordagem muito parecida ao Vue.",
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        CSS no Svelte
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

const slide_5_steps_1 = [
  {
    code: `.error {
  background-color: red;
}`,
    lang: "css",
  },
  {
    code: `.Button_error_ax7yz {
  background-color: red;
}`,
    lang: "css",
  },
];

const slide_5_steps_2 = [
  {
    code: `import styles from './Button.module.css';
    
const Button = () => (
  <button className={styles.error}>Button</button>
);`,
    lang: "jsx",
  },
  {
    code: `import styles from './Button.module.css';
    
const Button = () => (
  <button className="Button_error_ax7yz">Button</button>
);`,
    lang: "jsx",
  },
];

const StyledCodeBlock = styled.div`
  padding: 0.5rem;
  background-color: ${COLORS.NAVY_DARK};
  box-shadow: 0.25rem 0.25rem 0 ${transparentize(COLORS.NAVY_DARK, 0.5)};
  margin-bottom: 1rem;
`;

const StyledOverline = styled(Overline).attrs({
  weight: "bold",
  suffix: ":",
})`
  padding: 0.5rem;
  background-color: ${COLORS.NAVY_DARK};
  border-top: 0.125rem solid ${COLORS.GREEN_MAIN};
  box-shadow: 0.25rem 0.25rem 0 ${transparentize(COLORS.NAVY_DARK, 0.5)};
  max-width: fit-content;
`;

const slide_5: SlideProps = {
  palette: "navy",
  notes:
    "Popularizado pelo React, CSS Modules também resolve o escopo local gerando classnames específicos, mas mantém seus estilos em arquivos separados.",
  children: (index) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        CSS Modules no React
      </Text>
      <StyledOverline>Button.module.css</StyledOverline>
      <StyledCodeBlock>
        <CodeSurfer
          index={index}
          steps={slide_5_steps_1}
          backgroundColor={COLORS.NAVY_DARK}
          fontSize="1rem"
        />
      </StyledCodeBlock>
      <StyledOverline>Button.jsx</StyledOverline>
      <StyledCodeBlock>
        <CodeSurfer
          index={index}
          steps={slide_5_steps_2}
          backgroundColor={COLORS.NAVY_DARK}
          fontSize="1.25rem"
        />
      </StyledCodeBlock>
    </>
  ),
};

const slide_6_steps = [
  {
    code: `// estilização inline
<div style="border: 2px solid red"></div>`,
    lang: "jsx",
  },
  {
    code: `// estilização inline
<div style="border: 2px solid red"></div>

// folha de estilo comum
import './styles.css';
// ou
<link rel="stylesheet" href="./styles.css" />

<div class="outlined"></div>`,
    lang: "jsx",
  },
  {
    code: `// estilização inline
<div style="border: 2px solid red"></div>

// folha de estilo comum
import './styles.css';
// ou
<link rel="stylesheet" href="./styles.css" />

<div class="outlined"></div>

// css modules
import styles from './styles.module.css';

<div className={styles.outlined}></div>`,
    lang: "jsx",
  },
  {
    code: `// estilização inline
<div style="border: 2px solid red"></div>

// folha de estilo comum
import './styles.css';
// ou
<link rel="stylesheet" href="./styles.css" />

<div class="outlined"></div>

// css modules
import styles from './styles.module.css';

<div className={styles.outlined}></div>

// css in js
const Outlined = styled.div\`
  border: 2px solid red;
\`;

<Outlined></Outlined>`,
    lang: "jsx",
  },
  {
    code: `// estilização inline
<div style="border: 2px solid red"></div>

// folha de estilo comum
import './styles.css';
// ou
<link rel="stylesheet" href="./styles.css" />

<div class="outlined"></div>

// css modules
import styles from './styles.module.css';

<div className={styles.outlined}></div>

// css in js
const Outlined = styled.div\`
  border: 2px solid red;
\`;

<Outlined></Outlined>

// estilização atômica/funcional
<div class="border-2 border-solid border-red-500"></div>`,
    lang: "jsx",
  },
];

const slide_6: SlideProps = {
  notes:
    "Podemos usar desde as formas mais simples de estilização, até as mais modernas e populares. Vou dar alguns exemplos aqui: \n\n Um destaque interessante é a estilização atômica/funcional, que na minha versão de 2019 desta palestra, eu considerava algo polêmico e controverso, mas hoje já é disseminado e com forte adoção.",
  children: (index) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        Maneiras diferentes de obter o <i>"mesmo"</i> resultado
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_6_steps}
        backgroundColor={COLORS.NAVY_DARK}
        fontSize="0.725rem"
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
