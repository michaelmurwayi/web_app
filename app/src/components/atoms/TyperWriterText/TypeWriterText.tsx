import { memo, useEffect, useState } from "react";

import { Box } from "@mui/material";

import type { SequentialTypewriterProps } from "./TypeWriterText.types";

import { TypewriterTextStyles } from "./TypeWriterText.styles";

const TypewriterComponent = ({
  words,
  typingSpeed = 75,
  wordDelay = 400,

  primaryColor = "#23160f",
  accentColor = "#c88736",
}: SequentialTypewriterProps) => {
  const [displayedWords, setDisplayedWords] = useState<string[]>(
    Array(words.length).fill(""),
  );

  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    let wordIndex = 0;

    const typeWord = () => {
      let charIndex = 0;

      const currentWord = words[wordIndex];

      const interval = setInterval(() => {
        setDisplayedWords((prev) => {
          const next = [...prev];

          next[wordIndex] = currentWord.slice(0, charIndex + 1);

          return next;
        });

        charIndex++;

        if (charIndex >= currentWord.length) {
          clearInterval(interval);

          setTimeout(() => {
            wordIndex++;

            if (wordIndex < words.length) {
              setActiveWord(wordIndex);
              typeWord();
            }
          }, wordDelay);
        }
      }, typingSpeed);
    };

    typeWord();

    return () => {
      setDisplayedWords(Array(words.length).fill(""));
    };
  }, [words, typingSpeed, wordDelay]);

  return (
    <Box sx={TypewriterTextStyles.container}>
      {displayedWords.map((word, index) => {
        const visible = word.length > 0;

        const completed = word === words[index];

        return (
          <Box
            key={index}
            sx={{
              ...TypewriterTextStyles.word,

              color: index % 2 === 0 ? accentColor : primaryColor,

              ...(visible ? TypewriterTextStyles.visible : {}),

              ...(completed
                ? {
                    ...TypewriterTextStyles.completed,

                    textShadow:
                      index % 2 === 0
                        ? "0 0 14px rgba(200,135,54,0.25)"
                        : "0 0 14px rgba(35,22,15,0.15)",
                  }
                : {}),
            }}
          >
            {word}

            {activeWord === index && !completed && (
              <Box component="span" sx={TypewriterTextStyles.cursor} />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export const TypewriterText = memo(TypewriterComponent);
