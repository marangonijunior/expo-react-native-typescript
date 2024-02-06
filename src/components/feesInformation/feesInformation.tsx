import React from 'react';
import { 
  Text, 
  View,
} from 'react-native';

import stylesFeed from './feesInformation.style';
import Icon from "react-native-vector-icons/FontAwesome";

type FeesInformationProps = {
    infoFee: string;
};

const FeesInformation = ({
    infoFee
}: FeesInformationProps) => {
    return (
        <View style={stylesFeed.containerFees} >
            <Text style={stylesFeed.feesBorder} />
            <View style={stylesFeed.subContainerFees}>
            <Text style={stylesFeed.feesInformation} testID='feesInformation'>1 EAD = <Text>{infoFee}</Text></Text>
            <Text style={stylesFeed.feesInformationTag}>Fees <Icon name="arrow-down" /></Text>
            </View>
        </View>
    )
}

export default FeesInformation;