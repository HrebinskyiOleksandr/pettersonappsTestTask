import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { colors } from '../core/typing/enums/colors';

interface PrimaryInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  editable?: boolean;
  style?: ViewStyle;
}

export const PrimaryInput: React.FC<PrimaryInputProps> = ({
  label,
  value,
  onChangeText,
  style,
  multiline,
  keyboardType = 'default',
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        mode="outlined"
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
        editable={editable}
        style={[styles.input, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.white,
    height: 55,
    fontSize: 16,
    borderRadius: 6,
  },
});
