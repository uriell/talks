import { SlideProps } from "../../components/Slide";

const slide_1: SlideProps = {
  palette: "green",
  children: () => "Hola Mundo",
};

const slide_2: SlideProps = {
  palette: "white",
  children: () => "Привет, мир",
};

const section_slides: SlideProps[] = [slide_1, slide_2];

export default section_slides;
