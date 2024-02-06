import React, { useEffect, useState } from 'react';
import { 
  Text, 
  TextInput, 
  View,
  Pressable,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import CountryFlag from "react-native-country-flag";
import Icon from "react-native-vector-icons/FontAwesome";

import stylesHome from './homeScreen.style';
import { colours } from '../../utils/colours';

import { FeeInformation } from '../../components';

const HomeScreen = () => {
  const [money_sending, onChangeMoneySending] = useState('');
  const [money_receiving, onChangeMoneyReceiving] = useState('');
  const [open, setOpen] = useState(false);
  const [value_send, setValueSend] = useState('ae');
  const [value_receiving, setValueReceiving] = useState('gb');
  const [infoFee, setInfofee] = useState(' -- ');
  const [items, setItems] = useState([
    {
      label: 'GBP',
      value: 'gb',
      fees: 2.2,
      icon: () => <CountryFlag isoCode="gb" size={25} />
    },
    {
      label: 'BR',
      value: 'br',
      fees: 13.2,
      icon: () => <CountryFlag isoCode="br" size={25} />
    }
  ]);


  const handleMoney = (item:string) => {
    onChangeMoneySending(item)

    const numericValue = item.replace(/[^0-9]/g, ""); 
    const moneySelected = items.filter(item => item.value === value_receiving)
    let valueConverted = 0;

    if(numericValue && moneySelected){
      valueConverted = Number(numericValue) * moneySelected[0].fees;
      onChangeMoneyReceiving(valueConverted.toFixed(2))
    }
  }

  useEffect(() => {
    money_sending && handleMoney(money_sending)

    const moneySelected = items.filter(item => item.value === value_receiving)
    moneySelected && setInfofee(`${moneySelected[0].label} ${moneySelected[0].fees}`)
    
  }, [value_receiving])

  useEffect(() => {
    if(!money_sending){
      onChangeMoneyReceiving('')
    }
  }, [money_sending])

  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.containerDropBox}>
        <View  style={stylesHome.subContainerDropBox}>
          <Text style={stylesHome.dropBoxTitle}>You send exacly</Text>
          <DropDownPicker
            zIndex={2000}
            zIndexInverse={2000}
            open={false}
            value={value_send}
            items={[{
              label: 'AED',
              value: 'ae',
              icon: () => <CountryFlag isoCode="ae" size={25} />
            }]}
            setOpen={()=>{}}
            setValue={setValueSend}
            setItems={setItems}
            placeholder=""
            dropDownContainerStyle={{
              backgroundColor: colours.purple,
            }}
            containerStyle={{
              width: '101%',
              height: 60,
            }}
            labelStyle={{
              color: "#fff",
              fontSize: 12,
            }}
            style={{
              backgroundColor: colours.purple,
              borderColor:  colours.purple,
            }}
          />
        </View>
        <View>
         <TextInput keyboardType="numeric" value={money_sending} onChangeText={handleMoney} placeholder="0,00" style={stylesHome.dropBoxInput} />
        </View>
      </View>
      <FeeInformation infoFee={infoFee}/>
      <View style={stylesHome.containerDropBox}>
        <View style={stylesHome.subContainerDropBox}>
          <Text style={stylesHome.dropBoxTitle} >Recipient gets</Text>
          <DropDownPicker
            zIndex={1000}
            zIndexInverse={3000}
            open={open}
            value={value_receiving}
            items={items}
            setOpen={setOpen}
            setValue={setValueReceiving}
            setItems={setItems}
            placeholder=""
            dropDownContainerStyle={{
              backgroundColor: colours.purple,
              elevation: 10,
            }}
            containerStyle={{
              width: '101%',
              height: 60,
            }}
            labelStyle={{
              color: "#fff",
              fontSize: 12,
            }}
            style={{
              backgroundColor: colours.purple,
              borderColor:  colours.purple,
            }}
          />
        </View>
        <View>
         <TextInput value={money_receiving} onChangeText={onChangeMoneyReceiving} placeholder="0,00" style={stylesHome.dropBoxInput} editable={false} />
        </View>
      </View>
      <View style={stylesHome.containerInformationProcessing}>
        <Text><Icon name="bolt" size={15}/> Processing time - 1 hour</Text>
        <Text style={stylesHome.processingSubInformation}>*Normal working hours & public holidays apply</Text>
      </View>
      <View>
        <Pressable style={stylesHome.butttonTranfer} onPress={() => {}}>
          <Text style={{ color: colours.white }}>Start Transfer</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;