const GradeBadgeSvg = ({
  fillColor,
  gradeVendor,
  grade,
  textColor = "white",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 46 47"
  >
    <path
      d="M41 3.415H5a2 2 0 00-2 2v26.788a4 4 0 001.083 2.737l6.766 7.212a4 4 0 002.917 1.263H41a2 2 0 002-2v-36a2 2 0 00-2-2z"
      fill={fillColor}
      stroke="none"
      strokeWidth="1"
      transform="translate(0 -.167)"
    />
    <text
      style={{
        color: textColor,
        fontWeight: "bold",
        fontSize: "15px",
        fill: textColor,
      }}
      x="50%"
      y="38%"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {gradeVendor}
    </text>
    {!!grade && (
      <text
        style={{
          color: textColor,
          fontWeight: "bold",
          fontSize: "15px",
          fill: textColor,
        }}
        x="50%"
        y="70%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {grade}
      </text>
    )}
  </svg>
);

export default GradeBadgeSvg;
