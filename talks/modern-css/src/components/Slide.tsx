import React from "react";

export type SlideProps = { children?: React.ReactNode };

const Slide: React.FC<SlideProps> = ({ children, ...props }) => (
  <h1 {...props}>{children}</h1>
);

export default Slide;
