import CodeSurfer from "../../components/CodeSurfer";
import Slide, { SlideProps } from "../../components/Slide";
import { H1, H2, Text } from "../../components/Typography";
import Lists from "../../components/Lists";

const slide_1: SlideProps = {
  justify: "center",
  children: () => <H1 suffix="...">Por exemplo</H1>,
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
      <th class="TableCell TableCell--header">Product</th>
      <th class="TableCell TableCell--header">Price</th>
    </tr>
  </thead>
  <tbody class="TableBody">
    <tr class="TableRow">
      <td class="TableCell">Shirt</th>
      <td class="TableCell">$10</th>
    </tr>
    <tr class="TableRow">
      <td class="TableCell">Pants</th>
      <td class="TableCell">$20</th>
    </tr>
  </tbody>
</table>`,
    lang: "html",
  },
  {
    code: `<table class="Table">
  <thead class="TableHeader">
    <tr class="TableRow">
      <th class="TableCell TableCell--header">Product</th>
      <th class="TableCell TableCell--header">Price</th>
    </tr>
  </thead>
  <tbody class="TableBody">
    <tr class="TableRow">
      <td class="TableCell">Shirt</th>
      <td class="TableCell">$10</th>
    </tr>
    <tr class="TableRow">
      <td class="TableCell">Pants</th>
      <td class="TableCell">$20</th>
    </tr>
  </tbody>
</table>`,
    focus:
      "1[15:19],2[17:27],3[16:23],4[18:44],5[18:44],8[17:25],9[16:23],10[18:26],11[18:26],13[16:23],14[18:26],15[18:26]",
    lang: "html",
  },
];

const slide_2: SlideProps = {
  palette: "navy",
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
    </>
  ),
};

const slide_3_steps = [
  {
    code: `.Table {
  padding: 5px;
}`,
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 5px;

  .TableCell {
    min-width: 100px;
  }
}`,
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 5px;

  .TableCell {
    min-width: 100px;
  }

  .TableBody {
    .TableRow {
      .TableCell {
        border-bottom: 1px solid silver;
      }
    }
  }
}`,
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 5px;

  .TableCell {
    min-width: 100px;
  }

  .TableBody .TableRow .TableCell {
    border-bottom: 1px solid silver;
  }
}`,
    focus: "1:11",
    lang: "scss",
  },
  {
    code: `.Table {
  padding: 5px;

  .TableCell {
    min-width: 100px;
  }

  .TableBody .TableRow .TableCell {
    border-bottom: 1px solid silver;
  }
}`,
    focus: "1[1:6]",
    lang: "scss",
  },
];

const slide_3: SlideProps = {
  children: (index) => (
    <>
      <Text margin="0 0 1rem 0" suffix=":">
        CSS feito na sintaxe do SASS
      </Text>
      <CodeSurfer index={index} steps={slide_3_steps} fontSize="1.2rem" />
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
  children: (index) => (
    <Slide.Group
      index={index}
      slides={[
        {
          padding: "7.5vmax",
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
          padding: "10vmax",
          palette: "white",
          justify: "center",
          children: () => (
            <Lists.Unordered>
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
            </Lists.Unordered>
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
