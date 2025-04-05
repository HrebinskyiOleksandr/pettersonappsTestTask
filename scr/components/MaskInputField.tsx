import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { colors } from '../core/typing/enums/colors';
import MaskInput from 'react-native-mask-input';

interface MaskInputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  mask: any[]; 
  icon: string; 
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  editable?: boolean;
}

export const MaskInputField: React.FC<MaskInputFieldProps> = ({
  label,
  value,
  onChangeText,
  mask,
  icon,
  keyboardType = 'default',
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <MaskInput
          value={value}
          onChangeText={onChangeText}
          mask={mask}
          keyboardType={keyboardType}
          editable={editable}
          style={[styles.input, styles.maskedInput]}
        />
        <IconButton
          icon={icon}
          iconColor={colors.main}
          size={24}
          style={styles.icon}
        />
      </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.white,
    height: 55,
    fontSize: 16,
    borderRadius: 6,
    flex: 1,
  },
  maskedInput: {
    borderRadius: 6,
    paddingHorizontal: 16,

  },
  icon: {
    marginLeft: 8,
    tintColor: colors.main,
    position: 'absolute',
    right: 0,
  },
});