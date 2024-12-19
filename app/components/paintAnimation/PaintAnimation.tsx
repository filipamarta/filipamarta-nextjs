import React, { useEffect, useRef, useState } from "react";
import styles from "./paintAnimation.module.css";
import { scrollHandlerForSVGPaintAnimation } from "../../lib/utils";

export default function PaintAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isSVGVisible, setSVGIsVisible] = useState(false);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (svg && path) {
      const handleScroll = () =>
        scrollHandlerForSVGPaintAnimation({ svg, path });
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
      // Run the handler initially to set the correct position
      handleScroll();
      // Make SVG visible after initial positioning
      setSVGIsVisible(true);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <svg
      width="2000"
      height="3545"
      viewBox="0 0 2000 3545"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.paintAnimation} ${
        isSVGVisible ? styles.visible : styles.hidden
      }`}
      ref={svgRef}
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        ref={pathRef}
        d="M65 -78.2578C291.396 -161.269 282.848 265.749 518.81 212.658C600.504 194.277 655.918 42.6401 943.619 87.8961C943.619 87.8961 1127.23 113.757 1034.13 252.11C920.586 420.85 691.555 291.474 614.842 344.016C494.596 426.376 365.954 496.317 247.174 581.353C205.306 611.325 151.501 645.552 118.901 686.301C115.064 691.098 168.57 695.738 171.033 695.905C273.492 702.851 377.511 690.814 479.71 684.93C832.474 664.619 1185.71 592.037 1535.83 546.369C1729.14 512.009 1881.79 294.134 1901.68 546.369C1901.68 589.823 1902.68 628.245 1881.79 668.124C1862.39 705.153 1841.14 752.712 1805.65 777.189C1753.78 812.964 1686.45 834.236 1625.25 845.783C1482.43 872.73 1335.91 870.305 1193.1 894.828C1108.77 909.309 1038.62 941.772 963.305 981.257C936.619 995.248 898.208 1018.5 910.486 1055.34C927.248 1105.62 1015.07 1121.6 1057.28 1134.22C1166.84 1166.98 1282.44 1176.44 1394.77 1195.96C1476.8 1210.21 1564.1 1224.25 1634.85 1271.41C1682.63 1303.27 1732.39 1377.88 1719.22 1438.1C1695.99 1544.31 1531.33 1553.29 1447.93 1555.05C1284.77 1558.48 1134.81 1520.8 975.309 1497.09C877.56 1482.56 783.36 1478.73 694.756 1527.95C599.981 1580.61 528.711 1657.59 485.884 1757.06C452.134 1835.45 436.037 1968.26 470.793 2050.64C519.291 2165.6 674.078 2151.71 776.726 2146.67C986.499 2136.39 1189.71 2039.32 1381.73 1962.84C1467.45 1928.7 1552.72 1894.75 1639.99 1864.75C1679.47 1851.18 1714.52 1839.37 1756.6 1839.37C1811.11 1839.37 1832.63 1841.77 1867.73 1886.02C1911.62 1941.36 1947.88 2014.48 1928.78 2086.65C1915.23 2137.82 1868.3 2172.19 1829.66 2204.29C1752.74 2268.19 1671.27 2325.92 1591.98 2386.75C1501.59 2456.1 1409.54 2523.48 1320 2593.91C1227.02 2667.05 1117.02 2756.91 1070.31 2869.66C997.764 3044.78 1310.55 3054.11 1404.37 3063.1C1499.28 3072.18 1593.23 3082.38 1686.3 3103.57C1725.62 3112.52 1736.13 3120.47 1724.02 3159.13C1704.58 3221.18 1687.06 3281.51 1699.33 3347.08C1708.06 3393.74 1741.26 3429.14 1772.04 3463"
        /* stroke="#4EFFD6" */
        strokeWidth="80"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
