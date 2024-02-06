import { StyleSheet } from 'react-native';
import { colours } from '../../utils/colours';


const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colours.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerDropBox: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'row', 
      alignItems: 'center' ,
      marginLeft: '2%',
      borderColor: colours.grey,
      borderWidth: 1,
      borderRadius: 10,
      zIndex: 1
    },
    subContainerDropBox: {
      backgroundColor: colours.purple, 
      borderColor: colours.purple,
      width: 130,
      height: 80,
      justifyContent: 'center',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      padding: 2,
      zIndex: 1
    },
    dropBoxTitle: {
      width: '100%',
      display: 'flex',
      fontSize: 11,
      color: colours.white,
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: 15
    },
    dropBoxInput: {
      width: 200,
      height: 70,
      padding: 10,
      color: colours.black,
      position: 'relative',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      fontSize: 20,
      textAlign: 'right'
    },
    containerFees: {
      alignItems: 'center' ,
      justifyContent: 'center',
      paddingLeft: 50,
      width: 300,
      marginTop: 10,
      marginBottom: 10,
      height: 50,
      display: 'flex',
      position: 'relative',
      flexDirection: 'row', 
    },
    feesBorder: {
      borderColor: colours.purple,
      borderLeftWidth: 1,
      borderStyle: 'dashed',
      height: 80,
      marginRight: 40
    },
    subContainerFees: {
      width: '100%',
      backgroundColor: colours.grey,
      padding: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      display: 'flex',
      position: 'relative',
      flexDirection: 'row', 
    },
    feesInformation: {
      width: '70%', 
      paddingLeft: 10, 
      textAlign: 'left', 
      color: colours.darkGrey
    },
    feesInformationTag:{
      width: '30%',  
      paddingRight: 10, 
      textAlign: 'right', 
      color: colours.purple
    },
    containerInformationProcessing: {
      alignItems: 'center' ,
      justifyContent: 'center',
      marginTop: 20
    },
    processingSubInformation: {
      fontSize: 10,
      color: colours.darkGrey,
      marginTop: 3
    },
    butttonTranfer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: colours.blue,
      marginTop: 20,
    }
});

export default stylesHome;