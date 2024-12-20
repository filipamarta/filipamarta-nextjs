export type scrollHandlerForSVGPaintAnimationType = {
  svg: SVGSVGElement;
  path: SVGPathElement;
  maxHeight: number;
  totalDistance: number;
  isMobile: boolean;
};

export interface FooterProps {
  backgroundColorVar?: string;
}

export type PaintAnimationProps = {
  mainMaxHeight: number;
};

export type GridProjectsProps = {
  handleAnimationComplete: () => void;
};
