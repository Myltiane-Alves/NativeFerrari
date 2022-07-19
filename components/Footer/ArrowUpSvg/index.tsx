import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function ArrowUpSvg(props) {
  return (
    <Svg
      width={33}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.541 20.3l12.3-12.273L29.14 20.3l3.779-3.779L16.84.441.762 16.522l3.78 3.779z"
        fill="#000"
      />
    </Svg>
  );
}
