import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker, Input, Radio, Slider, Stepper, SwitchableText} from './src';

Icon.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      <Picker
        data={['Banana', 'Melon', 'Orange']}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
        titleExtractor={item => item}
        onSelect={() => {}}
      />
      <Input label="Title" labelPosition="border" error="Error message" />
      <Radio radioIds={['Banana', 'Melon', 'Orange']} onSelect={() => {}} />
      <Slider button indicator onChangeValue={() => {}} />
      <Stepper />
      <SwitchableText texts={['Work hard play hard', 'Do as you wish']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
