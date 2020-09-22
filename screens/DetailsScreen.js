import React from 'react';

import {Text, View, Button} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to home page" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to details page again.." onPress={() => navigation.push('Details')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to first page" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default DetailsScreen;
