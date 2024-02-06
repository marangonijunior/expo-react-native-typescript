import { StyleSheet } from 'react-native';
import { colours } from '../../utils/colours';

const stylesFeed = StyleSheet.create({
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
});

export default stylesFeed;