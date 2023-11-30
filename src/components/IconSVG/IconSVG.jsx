import { forwardRef } from "react";
import { Box } from "@mui/material";

const ASSET_PATH = "/assets/icons/";

// eslint-disable-next-line react/display-name, react/prop-types
const IconSVG = forwardRef(({ name, imgSvg, sx, size = 24, ...other }, ref) =>
  imgSvg ? (
    <img
      src={`${ASSET_PATH}${name}.svg`}
      alt={`${name} icon`}
      width={size}
      height={size}
    />
  ) : (
    <Box
      component="span"
      ref={ref}
      sx={{
        width: size,
        height: size,
        display: "inline-block",
        bgcolor: "currentColor",
        mask: `url(${ASSET_PATH}${name}.svg) no-repeat center / contain`,
        WebkitMask: `url(${ASSET_PATH}${name}.svg) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  )
);

export default IconSVG;
