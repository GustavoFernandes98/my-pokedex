import { Dimensions, StyleSheet } from 'react-native';
import type { Theme } from '../../global/themes';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#b0b4bb",
      alignItems: 'center',
      justifyContent: 'center',
    },

    boxTop: {
      height: Dimensions.get('window').height / 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    boxMid: {
      height: Dimensions.get('window').height / 4,
      width: '100%',
      paddingHorizontal: 37,
    },

    boxBottom: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
      height: 110,
      width: 110,
      marginBottom: 10,
    },

    textTop: {
      fontSize: 44,
      fontWeight: 'bold',
      marginTop: 10,
      color: "#2C2C2C",
      letterSpacing: 1,
    },

    titleInput: {
      marginLeft: 5,
      color: "#6B6B6B",
      marginTop: 20,
      fontSize: 14,
      fontWeight: "500",
    },

    boxInput: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderRadius: 12,
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#FFFFFF",
      borderColor: "#E0E0E0",
      paddingHorizontal: 15,

      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },

    textInput: {
      height: '100%',
      width: '100%',
      color: "#333",
      fontSize: 16,
    },

    buttonEntrar: {
      width: 220,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#EF5350",
      borderRadius: 14,

      shadowColor: "#EF5350",
      shadowOpacity: 0.4,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 6,
    },

    buttonEntrarText: {
      color: "#FFF",
      fontWeight: 'bold',
      fontSize: 20,
      letterSpacing: 1,
    },

  });