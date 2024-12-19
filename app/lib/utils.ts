import { scrollHandlerForSVGPaintAnimationType } from "./definitions";

// Helper function to generate deterministic colors
const generateColor = (percentage: number): string => {
  const r = 125;
  const g = Math.floor(255 * percentage);
  const b = 219; // Static blue
  return `rgb(${r}, ${g}, ${b})`;
};

export const scrollHandlerForSVGPaintAnimation = ({
  svg,
  path,
  mainHeight,
  totalDistance,
}: scrollHandlerForSVGPaintAnimationType) => {
  const distance = window.scrollY;
  const percentage = Math.min(distance / totalDistance, 1); // Clamp to [0, 1]
  const pathLength = path.getTotalLength();

  // Update SVG styles
  svg.style.height = `${mainHeight}px`;
  path.style.strokeDasharray = `${pathLength}`; // I can change here to a value e.g. 600 and have the path dashed
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`; // I can also use e.g. 600 and this line will end 600 of the end
  path.style.strokeWidth = `${Math.max(distance * 0.9, 1)}`; // Prevent zero-width stroke with Max
  path.style.stroke = generateColor(percentage);
};
