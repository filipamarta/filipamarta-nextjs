let colorChanging = false;

const randomRGBColor = () => {
  const r = 125;
  const g = Math.floor(Math.random() * 256);
  const b = 219;
  return `rgb(${r}, ${g}, ${b})`;
};

export const scrollHandlerForSVGPaintAnimation = ({
  svg,
  path,
}: {
  svg: SVGSVGElement;
  path: SVGPathElement;
}) => {
  // Calculate the maximum height of the document because I need to add this value to the height of the svg in order to paint all the page
  const maxHeight = Math.max(
    svg.clientHeight,
    document.body.scrollHeight,
    /* document.body.offsetHeight, */
    document.documentElement.clientHeight
    /* document.documentElement.scrollHeight,
    document.documentElement.offsetHeight */
  );

  const distance = window.scrollY;
  const totalDistance = svg.clientHeight - window.innerHeight;
  const percentage = distance / totalDistance;

  // Change color with debounce using a flag
  if (!colorChanging) {
    colorChanging = true;
    setTimeout(() => {
      path.style.stroke = randomRGBColor();
      colorChanging = false;
    }, 1000);
  }
  // Dynamically set the height of the SVG
  svg.style.height = `${maxHeight}px`;

  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = `${pathLength}`; // I can change here to a value e.g. 600 and have the path dashed
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`; // I can also use e.g. 600 and this line will end 600 of the end
  path.style.strokeWidth = `${distance * 0.9}`;
};
