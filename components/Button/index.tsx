import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { vars } from '../../values';
import { ButtonProps } from './ButtonProps';
import { ButtonText } from './ButtonText';
import { ButtonWrap } from './ButtonWrap';
import { getTextColor } from './getTextColor';

export const Button = (props: ButtonProps) => {
  const [buttonProps, setButtonProps] = useState(props);

  useEffect(() => setButtonProps(props), [props]);

  return (
    <ButtonWrap {...(buttonProps as any)}>
      {buttonProps.loading && (
        <ActivityIndicator
          size="small"
          color={getTextColor(buttonProps.color ?? 'outline')}
          style={{ marginRight: vars.space / 2 }}
        />
      )}
      <ButtonText color={buttonProps.color ?? 'outline'}>
        {buttonProps.children}
      </ButtonText>
    </ButtonWrap>
  );
};
