import { memo } from "react";

import { Box, IconButton, Stack } from "@mui/material";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/atoms/AboutHeader/SectionHeading";
import { CoffeeBeansBackground } from "@/components/molecules/CoffeeBeanBackground";
import { ContactInfoCard } from "@/components/molecules/ContactInfoCard";

import { coffeeBeansConfig } from "@/config/animations/coffeeBeans.config";

import type { ContactConfig } from "./Contact.types";

import { ContactStyles } from "./Contact.syles";

export interface ContactProps {
  config: ContactConfig;
}

const ContactComponent = ({ config }: ContactProps) => {
  return (
    <Box component="section" sx={ContactStyles.root}>
      <CoffeeBeansBackground config={coffeeBeansConfig} />

      <Box sx={ContactStyles.container}>
        <Box sx={ContactStyles.heading}>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} />
        </Box>

        <Box sx={ContactStyles.content}>
          {/* ================= LEFT ================= */}

          <Stack sx={ContactStyles.leftColumn}>
            {config.contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <ContactInfoCard
                  icon={item.icon}
                  title={item.title}
                  items={item.items}
                />
              </motion.div>
            ))}

            {/* Social Icons */}

            <Box sx={ContactStyles.socials}>
              {config.socials.map((social) => {
                const Icon = social.icon;

                return (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={ContactStyles.socialButton}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Box>
          </Stack>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Box sx={ContactStyles.imageWrapper}>
              <Box
                component="img"
                src={config.image.src}
                alt={config.image.alt}
                sx={ContactStyles.image}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

ContactComponent.displayName = "Contact";

export const Contact = memo(ContactComponent);
