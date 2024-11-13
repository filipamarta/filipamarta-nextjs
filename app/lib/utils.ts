export const scrollHandlerForSVGPaintAnimation = ({
  svg,
  path,
}: {
  svg: SVGSVGElement;
  path: SVGPathElement;
}) => {
  const distance = window.scrollY;
  const totalDistance = svg.clientHeight - window.innerHeight;
  const percentage = distance / totalDistance;

  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = `${pathLength}`; // I can change here to a value e.g. 600 and have the path dashed
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`; // I can also use e.g. 600 and this line will end 600 of the end
  path.style.strokeWidth = `${distance * 0.9}`;
};
