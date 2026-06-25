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
      Array.from({ length: config.count }, (_, index) => ({
        id: index,

        left: Math.random() * 20,

        delay: Math.random() * 5,

        duration:
          config.minDuration +
          Math.random() * (config.maxDuration - config.minDuration),

        size:
          config.minSize + Math.random() * (config.maxSize - config.minSize),
      })),
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

            height: bean.size,

            opacity: config.opacity,

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
