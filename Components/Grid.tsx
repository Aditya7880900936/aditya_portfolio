import React from "react";
import { BentoGrid, BentoGridItem } from "./UI/BentoGrid";
import { gridItems } from "@/Data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (item, idx) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
            />
          )
        )}
      </BentoGrid>
    </section>
  ); 
};

export default Grid;
