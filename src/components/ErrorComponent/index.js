import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

const ErrorComponent = ({title, message}) => (
  <View style={styles.serverError}>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>{message}</Text>
  </View>
);

export default ErrorComponent;
