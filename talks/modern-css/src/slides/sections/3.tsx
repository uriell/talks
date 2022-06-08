import styled from "styled-components";

import CodeSurfer from "../../components/CodeSurfer";
import Slide, { SlideProps } from "../../components/Slide";
import { H1, H2, Text } from "../../components/Typography";
import Lists from "../../components/Lists";
import SlidingBullets from "../../animations/SlidingBullets";
import MacWindow from "../../components/MacWindow";

const slide_1: SlideProps = {
  justify: "center",
  notes: "Um exemplo de porque não é tão simples...",
  children: () => <H1 suffix="...">Vamos ver um exemplo</H1>,
};

const slide_2_steps = [
  {
    code: `<table class="Table">
</table>`,
    lang: "html",
  },
  {
    code: `<table class="Table">
  <thead class="TableHeader">
  </thead>
  <tbody class="TableBody">
  </tbody>
</table>`,
    lang: "html",
  },
  {
    code: `<table class="Table">
  <thead class="TableHeader">
    <tr class="TableRow">
    </tr>
  </thead>
  <tbody class="TableBody">
    <tr class="TableRow">
    </tr>
    <tr class="TableRow">
    </tr>
  </tbody>
</table>`,
    lang: "html",
  },
  {
    code: `<table class="Table">
  <thead class="TableHeader">
    <tr class="TableRow">
      <th class="TableCell TableCell--header">Produto</th>
      <th class="TableCell TableCell--header">Preço</th>
    </tr>
  </thead>
  <tbody class="TableBody">
    <tr class="TableRow">
      <td class="TableCell">Camisa</td>
      <td class="TableCell">R$10</td>
    </tr>
    <tr class="TableRow">
      <td class="TableCell">Calça</td>
      <td class="TableCell">R$20</td>
    </tr>
  </tbody>
</table>`,
    lang: "html",
  },
  {
    code: `<table class="Table">
  <thead class="TableHeader">
    <tr class="TableRow">
      <th class="TableCell TableCell--header">Produto</th>
      <th class="TableCell TableCell--header">Preço</th>
    </tr>
  </thead>
  <tbody class="TableBody">
    <tr class="TableRow">
      <td class="TableCell">Camisa</td>
      <td class="TableCell">R$10</td>
    </tr>
    <tr class="TableRow">
      <td class="TableCell">Calça</td>
      <td class="TableCell">R$20</td>
    </tr>
  </tbody>
</table>`,
    focus:
      "1[15:19],2[17:27],3[16:23],4[18:44],5[18:44],8[17:25],9[16:23],10[18:26],11[18:26],13[16:23],14[18:26],15[18:26]",
    lang: "html",
  },
];

const StyledExampleSlide2 = styled(MacWindow)`
  position: absolute;
  right: 3rem;
  top: 4.25rem;
`;

const slide_2: SlideProps = {
  palette: "navy",
  notes:
    "Temos o seguinte HTML estruturado com o BEM: \n\n 1. Vamos usar de exemplo uma tabela; \n 2. Precisamos de um cabeçalho e um corpo pra tabela; \n 3. Adicionamos as linhas; \n4. E por fim as células (de cabeçalho e corpo);\n\n Mas vamos reparar nas classes.",
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        HTML estruturado com o BEM
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_2_steps}
        fontSize="0.9rem"
        backgroundColor={backgroundColor}
      />

      <StyledExampleSlide2>
        <table className="Table">
          <thead className="TableHeader">
            <tr className="TableRow">
              <th className="TableCell TableCell--header">Produto</th>
              <th className="TableCell TableCell--header">Preço</th>
            </tr>
          </thead>
          <tbody className="TableBody">
            <tr className="TableRow">
              <td className="TableCell">Camisa</td>
              <td className="TableCell">R$10</td>
            </tr>
            <tr className="TableRow">
              <td className="TableCell">Calça</td>
              <td className="TableCell">R$20</td>
            </tr>
          </tbody>
        </table>
      </StyledExampleSlide2>
    </>
  ),
};

const slide_3_steps = [
  {
    code: `.Table {
  padding: 16px;
}`,
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 16px;

  .TableCell {
    min-width: 240px;
  }
}`,
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 16px;

  .TableCell {
    min-width: 240px;
  }

  .TableBody {
    .TableRow {
      .TableCell {
        border: 1px solid silver;
      }
    }
  }
}`,
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 16px;

  .TableCell {
    min-width: 240px;
  }

  .TableBody .TableRow .TableCell {
    border: 1px solid silver;
  }
}`,
    focus: "1:11",
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 16px;

  .TableCell {
    min-width: 240px;
  }

  .TableBody .TableRow .TableCell {
    border: 1px solid silver;
  }
}`,
    focus: "1[1:6]",
    lang: "scss",
  },
];

const StyledExampleSlide3 = styled(MacWindow)`
  position: absolute;
  right: 3rem;
  top: 4.25rem;

  .Table {
    padding: 0.5rem;

    .TableCell {
      min-width: 7.5rem;
    }

    .TableBody .TableRow .TableCell {
      border: 1px solid black;
    }
  }
`;

const slide_3: SlideProps = {
  notes:
    "Como podemos usar o SASS pra estilizar essa tabela seguindo o BEM? \n\n Para conseguir estilizar somente as células do corpo da tabela, faríamos o seguinte CSS. Que poderia ser escrito de duas formas. \n\n Conseguem identificar o problema? Vou mostrar pra vocês.",
  children: (index) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        CSS feito na sintaxe do SASS
      </Text>
      <CodeSurfer index={index} steps={slide_3_steps} fontSize="1.2rem" />
      <StyledExampleSlide3>
        <table className="Table">
          <thead className="TableHeader">
            <tr className="TableRow">
              <th className="TableCell TableCell--header">Produto</th>
              <th className="TableCell TableCell--header">Preço</th>
            </tr>
          </thead>
          <tbody className="TableBody">
            <tr className="TableRow">
              <td className="TableCell">Camisa</td>
              <td className="TableCell">R$10</td>
            </tr>
            <tr className="TableRow">
              <td className="TableCell">Calça</td>
              <td className="TableCell">R$20</td>
            </tr>
          </tbody>
        </table>
      </StyledExampleSlide3>
    </>
  ),
};

const slide_4_steps = [
  {
    code: `.Table {
  padding: 5px;
}`,
    lang: "css",
  },
  {
    code: `.Table {
  padding: 5px;
}
.Table .TableCell {
  min-width: 100px;
}`,
    lang: "css",
  },
  {
    code: `.Table {
  padding: 5px;
}
.Table .TableCell {
  min-width: 100px;
}
.Table .TableBody .TableRow .TableCell {
  border-bottom: 1px solid silver;
}`,
    focus: "1:9",
    lang: "css",
  },
  {
    code: `.Table {
  padding: 5px;
}
.Table .TableCell {
  min-width: 100px;
}
.Table .TableBody .TableRow .TableCell {
  border-bottom: 1px solid silver;
}`,
    focus: "1[1:6],4[1:6],7[1:6]",
    lang: "css",
  },
];

const slide_4: SlideProps = {
  palette: "navy",
  notes:
    "Esse é o resultado do SASS escrito anteriormente, transformado para CSS. \n\n Podemos ver que a classe Table se repete em múltiplas declarações, efetivamente deixando o arquivo final maior desnecessáriamente, já que com o BEM, temos seletores específicos o suficiente.",
  children: (index, backgroundColor) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        Resultado do SASS anterior
      </Text>
      <CodeSurfer
        index={index}
        steps={slide_4_steps}
        backgroundColor={backgroundColor}
      />
    </>
  ),
};

const slide_5: SlideProps = {
  justify: "center",
  children: () => (
    <>
      <H1 weight="regular">Então, precisamos</H1>
      <H1 weight="bold" suffix="!">
        reduzir nossos estilos
      </H1>
    </>
  ),
};

const slide_6: SlideProps = {
  palette: "white",
  flow: "row",
  padding: "0",
  notes:
    "Processamentos adicionais nos arquivos gerados por préprocessadores podem ser feitos, com objetivos diversos, desde reduzir código desnecessário até aumentar a compatibilidade do mesmo entre navegadores. \n\n Essas são algumas das opções mais populares, menção especial pro PostCSS que vale muito a pena conhecer seu ecossistema de plugins.",
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
              Pós-processamento de CSS
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
                PurgeCSS
                <Lists.ItemDesc suffix=".">
                  Remoção de código não utilizado
                </Lists.ItemDesc>
              </Lists.Item>
              <Lists.Item>
                Stylelint
                <Lists.ItemDesc suffix=".">
                  Análise estática de código
                </Lists.ItemDesc>
                <Lists.ItemDesc suffix=".">
                  Indica potenciais problemas
                </Lists.ItemDesc>
              </Lists.Item>
              <Lists.Item>
                PostCSS
                <Lists.ItemDesc suffix=".">
                  Um mundo de transformações e plugins pra estender seu CSS
                </Lists.ItemDesc>
              </Lists.Item>
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
