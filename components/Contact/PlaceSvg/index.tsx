import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function PlaceSvg(props: SvgProps) {
  return (
    <Svg width={61} height={86} fill="none" {...props}>
      <Path
        d="M30.3 46.919a15.847 15.847 0 110-31.694 15.847 15.847 0 010 31.694zM31.348.836A30.259 30.259 0 00.045 31.071c0 19.358 18.577 33.407 28.99 53.61a1.43 1.43 0 002.535 0C40.99 66.5 57.088 54.31 60.07 36.797 63.161 18.674 49.721 1.45 31.348.83"
        fill="#E32119"
      />
    </Svg>
  );
}
