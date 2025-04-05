import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ImageBackground,
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../core/typing/enums/colors.ts';
import { IconButton, Text } from 'react-native-paper';

export const HeaderAddTaskSchema: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/Header.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <IconButton
              icon="chevron-left"
              size={28}
              iconColor={colors.black}
              style={styles.iconButton}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add New Task</Text>
          <View style={{ width: 40 }} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    height: Platform.OS === 'ios' ? 110 : 90,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    margin: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
