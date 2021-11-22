import React, { useState } from 'react';

import {
  Text,
  TextInput,
  TextInputProps,
  View
} from 'react-native';
import { theme } from '../../styles/theme';

import { styles } from './styles';

type InputProps = TextInputProps & {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  const {secondary, border} = theme.colors
  const [borderColor, setBorderColor] = useState(border);
  const onFocus = () => setBorderColor(secondary);
  const onBlur = () => setBorderColor(border);
  return (
    <View>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={[styles.container, { borderColor }]}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
    </View>
  );
}


