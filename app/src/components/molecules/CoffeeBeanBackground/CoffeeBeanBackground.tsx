import { memo, useMemo } from "react";

import { Box } from "@mui/material";

import type { CoffeeBeansBackgroundProps } from "./CoffeeBeanBackground.types";

import { CoffeeBeansBackgroundStyles } from "./CoffeeBeanBackground.styles";
import { keyframes } from "@mui/system";

const coffeeBeanFall = keyframes`
  0% {
    transform:
      translate3d(0px, -100px, 0)
      rotate(0deg);
  }

  25% {
    transform:
      translate3d(50px, 25vh, 0)
      rotate(90deg);
  }

  50% {
    transform:
      translate3d(150px, 50vh, 0)
      rotate(180deg);
  }

  75% {
    transform:
      translate3d(250px, 75vh, 0)
      rotate(270deg);
  }

  100% {
    transform:
      translate3d(400px, 120vh, 0)
      rotate(360deg);
  }
`;

const CoffeeBeansBackgroundComponent = ({
  config,
}: CoffeeBeansBackgroundProps) => {
  const beans = useMemo(
    () =>
      Array.from({ length: config.count }, (_, index) => {
        const depth = Math.random();

        return {
          id: index,

          depth,

          left: Math.random() * 100,

          delay: Math.random() * 10,

          duration:
            config.minDuration +
            Math.random() * (config.maxDuration - config.minDuration),

          size:
            config.minSize + Math.random() * (config.maxSize - config.minSize),

          rotation: Math.random() * 360,
        };
      }),
    [config],
  );

  return (
    <Box sx={CoffeeBeansBackgroundStyles.container}>
      {beans.map((bean) => (
        <Box
          key={bean.id}
          sx={{
            ...CoffeeBeansBackgroundStyles.bean,

            left: `${bean.left}%`,
            top: "-50px",

            width: bean.size,
            height: bean.size * 1.4,

            opacity: bean.depth < 0.3 ? 0.08 : bean.depth < 0.6 ? 0.15 : 0.25,

            filter:
              bean.depth < 0.3
                ? "blur(2px)"
                : bean.depth < 0.6
                  ? "blur(1px)"
                  : "none",

            zIndex: bean.depth < 0.3 ? 1 : bean.depth < 0.6 ? 2 : 3,

            animation: `${coffeeBeanFall}
            ${bean.duration}s
            linear
            ${bean.delay}s
            infinite`,
          }}
        >
          <Box
            component="img"
            src={config.leafImage}
            alt=""
            sx={{
              width: "100%",
              height: "100%",

              objectFit: "contain",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export const CoffeeBeansBackground = memo(CoffeeBeansBackgroundComponent);
