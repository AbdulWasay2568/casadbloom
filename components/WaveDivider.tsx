interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
}

export const WaveDivider = ({
  topColor = "bg-white",
  bottomColor = "#F9E5EA",
}: WaveDividerProps) => {
  return (
    /* Using relative positioning to sit flush between sections without magic numbers */
    <div className={`relative w-full overflow-hidden ${topColor}`} aria-hidden="true">
      <svg
        /* Heights adapt beautifully to avoid extreme distortion across screen sizes */
        className="block w-full h-12 sm:h-16 md:h-24 lg:h-36 xl:h-44"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          fill={bottomColor}
          d="M0 110C70 110 105 84 154 50C209 12 288 12 344 50C393 84 428 110 498 110C568 110 603 84 652 50C708 12 787 12 842 50C891 84 926 110 996 110C1066 110 1101 84 1150 50C1206 12 1285 12 1340 50C1389 84 1424 110 1440 110V180H0V110Z"
        />
      </svg>
    </div>
  );
};
