export interface Zephyr {
  name: string;
  type: "Standard" | "Enhanced";
  batteryPercentage: number;
  currentlyOwned: boolean;
  NO2: number;
  PM25: number;
}

export interface Colour {
  value: number;
  hex: string;
}

export interface ZephyrDisplay {
  name: string;
  type: "Standard" | "Enhanced";
  batteryPercentage: number;
  currentlyOwned: boolean;
  NO2: number;
  PM25: number;
  pollutionColor?:Colour;
}
