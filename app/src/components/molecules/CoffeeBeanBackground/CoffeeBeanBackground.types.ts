export interface CoffeeBeansBackgroundConfig {
  count: number;

  leafImage: string;

  minSize: number;
  maxSize: number;

  minDuration: number;
  maxDuration: number;

  opacity: number;
}

export interface CoffeeBeansBackgroundProps {
  config: CoffeeBeansBackgroundConfig;
}
