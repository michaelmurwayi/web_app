import { memo, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import type { AboutSectionProps } from "./AboutSection.types";
import { SectionHeading } from "@/components/atoms/AboutHeader/SectionHeading";

import {
  INDICATOR_ACTIVE_COLOR,
  INDICATOR_INACTIVE_COLOR,
} from "./AboutSection.constants";

import { AboutSectionStyles } from "./AboutSection.styles";

const AboutSectionComponent = ({ config }: AboutSectionProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = config.slides.length;

  useEffect(() => {
    if (!config.autoPlay || totalSlides <= 1) return;

    const timer = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % totalSlides);
    }, config.autoPlayDelay);

    return () => window.clearInterval(timer);
  }, [config.autoPlay, config.autoPlayDelay, totalSlides]);

  const handleIndicatorClick = (index: number) => {
    setActiveSlide(index);
  };

  const slide = config.slides[activeSlide];

  return (
    <Box component="section" sx={AboutSectionStyles.root}>
      <Box sx={AboutSectionStyles.container}>
        <Box key={slide.id} sx={AboutSectionStyles.slide}>
          <Box
            sx={{
              ...AboutSectionStyles.content,
              flexDirection: {
                xs: "column",
                md: slide.reverse ? "row-reverse" : "row",
              },
            }}
          >
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={AboutSectionStyles.image}
            />

            <Box sx={AboutSectionStyles.contentWrapper}>
              <SectionHeading eyebrow={slide.eyebrow} title={slide.title} />

              <Typography sx={AboutSectionStyles.description}>
                {slide.description}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={AboutSectionStyles.indicators}>
          {config.slides.map((item, index) => (
            <Box
              key={item.id}
              component="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
              sx={{
                ...AboutSectionStyles.indicator,
                backgroundColor:
                  index === activeSlide
                    ? INDICATOR_ACTIVE_COLOR
                    : INDICATOR_INACTIVE_COLOR,
                transform: index === activeSlide ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

AboutSectionComponent.displayName = "AboutSection";

export const AboutSection = memo(AboutSectionComponent);
