import React from 'react';

import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  loading?: boolean;
}

export function Button({loading, ...rest}:ButtonProps){
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      {
          loading ?
            <ActivityIndicator size="small" color="#fff" />:
            <Text style={styles.text}>Entrar</Text>
        }
    </RectButton>
  );
}