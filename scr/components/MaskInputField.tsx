import React from 'react';
import { View, StyleSheet} from 'react-native';
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
  error?: boolean;
  errorMessage?: string;
}

export const MaskInputField: React.FC<MaskInputFieldProps> = ({
  label,
  value,
  onChangeText,
  mask,
  icon,
  keyboardType = 'default',
  editable = true,
  error = false,
  errorMessage = '',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, error && styles.errorBorder]}>
        <MaskInput
          value={value}
          onChangeText={onChangeText}
          mask={mask}
          keyboardType={keyboardType}
          editable={editable}
          style={[
            styles.input,
            styles.maskedInput,
            error && styles.inputError,
          ]}
        />
        <IconButton
          icon={icon}
          iconColor={colors.main}
          size={24}
          style={styles.icon}
        />
      </View>
      {error && errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
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
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  input: {
    height: 55,
    fontSize: 16,
    flex: 1,
  },
  maskedInput: {
    paddingHorizontal: 16,
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
  inputError: {
    borderColor: 'red',
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
