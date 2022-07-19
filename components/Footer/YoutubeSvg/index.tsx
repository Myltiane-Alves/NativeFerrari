import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function YoutubeSvg(props: SvgProps) {
  return (
    <Svg width={25} height={17} fill="none" {...props}>
      <Path
        d="M10.018 4.822v7.563l6.565-3.782-6.565-3.781zm2.586 12c-.073 0-7.354-.006-9.188-.5a2.94 2.94 0 01-2.07-2.07 33.2 33.2 0 010-11.3 3.01 3.01 0 012.07-2.09C5.232.384 12.531.379 12.604.379c.073 0 7.372 0 9.19.5a2.938 2.938 0 012.07 2.07c.342 1.87.504 3.768.483 5.668a31.24 31.24 0 01-.483 5.648 2.942 2.942 0 01-2.07 2.07c-1.818.479-9.117.485-9.19.485"
        fill="#999"
      />
    </Svg>
  );
}
