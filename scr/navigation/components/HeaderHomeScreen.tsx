import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../core/typing/enums/colors.ts';
import { IconButton, Text } from 'react-native-paper';

export const HeaderHomeScreen: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/HeaderHome.png')}
        style={styles.background}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  btn: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    height: Platform.OS === 'ios' ? 220 : 190,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    paddingHorizontal: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  imageStyle: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
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
