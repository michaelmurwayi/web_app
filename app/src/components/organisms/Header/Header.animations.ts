import { keyframes } from "@mui/system";

export const imageFloat = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
`;
export const imageBobIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.9);
  }

  60% {
    opacity: 1;
    transform: translateY(-12px) scale(1.03);
  }

  80% {
    transform: translateY(4px) scale(0.99);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
