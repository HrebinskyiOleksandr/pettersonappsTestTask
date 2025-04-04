import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, Text} from "react-native";
import {colors} from "../core/typing/enums/colors";

interface ButtonProps {
  label: string;
  onPress: () => void;
  height: number;
  style?: ViewStyle;
  isDesable?: boolean;
}
export const PrimaryButton = ({label, onPress, style, isDesable, height}: ButtonProps) => {
  return (
      <TouchableOpacity
        disabled={isDesable}
        style={[
          style,
          styles.button,
          {
            backgroundColor: isDesable ? colors.disable : colors.main,
            height: height,
            elevation: 5,
          },
        ]}
        onPress={onPress}>
        <Text
          style={styles.text}>
          {label}
        </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    color: colors.white,
    fontWeight: 700,
    fontSize: 18,
  }
})
