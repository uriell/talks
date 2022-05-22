import React from "react";

import Lists from "../components/Lists";
import SubSlideRouter from "../components/SubSlideRouter";

const Placeholder = ({ height = 1.25 }: { height?: number }) => (
  <div style={{ height: `${height}rem` }}></div>
);

type SlidingBulletsProps = {
  placeholderHeight?: number;
  index: number;
  component: typeof Lists.Unordered | typeof Lists.Ordered;
  children: React.ReactElement<any, any>[];
};

const SlidingBullets = ({
  index,
  component: ListComponent,
  placeholderHeight,
  children,
}: SlidingBulletsProps) => (
  <SubSlideRouter index={index} stepsCount={children.length + 1}>
    {(currentSubSlide) => (
      <ListComponent>
        {React.Children.map(children, (child, index) => {
          return index + 1 >= currentSubSlide ? (
            <Placeholder height={placeholderHeight} />
          ) : (
            child
          );
        })}
      </ListComponent>
    )}
  </SubSlideRouter>
);

export default SlidingBullets;
