import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { Input } from './Input';
import { InputFieldProps } from './InputFieldProps';
import { InputLabel } from './InputLabel';
import { InputWrap } from './InputWrap';

export const InputField = ({
  mask,
  label,
  inputProps,
  readOnly,
  style,
}: InputFieldProps) => {
  const [focused, setFocused] = useState(false);

  if (readOnly) {
    return (
      <InputWrap focused={focused} style={{ ...style, borderWidth: 0 }}>
        <InputLabel focused={focused}>{label}</InputLabel>
        <Input
          {...(inputProps as any)}
          style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
        />
      </InputWrap>
    );
  }

  if (mask) {
    return (
      <InputWrap focused={focused} style={style}>
        <InputLabel focused={focused}>{label}</InputLabel>
        <TextInputMask
          {...(Object.assign(inputProps as any, mask) as any)}
          onFocus={(e) => {
            inputProps?.onFocus && inputProps.onFocus(e);
            setFocused(true);
          }}
          onBlur={(e) => {
            inputProps?.onBlur && inputProps.onBlur(e);
            setFocused(false);
          }}
        />
      </InputWrap>
    );
  }

  return (
    <InputWrap focused={focused} style={style}>
      <InputLabel focused={focused}>{label}</InputLabel>
      <Input
        {...(inputProps as any)}
        onFocus={(e) => {
          inputProps?.onFocus && inputProps.onFocus(e);
          setFocused(true);
        }}
        onBlur={(e) => {
          inputProps?.onBlur && inputProps.onBlur(e);
          setFocused(false);
        }}
      />
    </InputWrap>
  );
};
