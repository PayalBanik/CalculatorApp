import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import Row from './components/Row';
import Buttons from './components/Buttons'
import calculator, {initialState} from './calculator'

export default class App extends React.Component {
  state = initialState;

handleTap=(type,value)=>{
  this.setState(state=>calculator(type,value,state))
}
  render() {return (
    <View styles={styles.container}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <Text styles={styles.value} >
        {parseFloat(this.state.currentValue).toLocaleString()}
      </Text>
     <Row>
     <Buttons text='C' theme='secondary' onPress={()=>this.handleTap('clear')}/>
     <Buttons text='+/-' theme='secondary' onPress={()=>this.handleTap('posneg')}/>
     <Buttons text='%' theme='secondary' onPress={()=>this.handleTap('percentage')}/>
     <Buttons text='/' theme='orange' onPress={()=>this.handleTap('operator','/')}/>
     </Row>
     <Row>
     <Buttons text='7'  onPress={()=>this.handleTap('number','7')}/>
     <Buttons text='8'  onPress={()=>this.handleTap('number','8')}/>
     <Buttons text='9'  onPress={()=>this.handleTap('number','9')}/>
     <Buttons text='x' theme='orange' onPress={()=>this.handleTap('operator','*')}/>
     </Row>
     <Row>
     <Buttons text='4'  onPress={()=>this.handleTap('number','4')}/>
     <Buttons text='5'  onPress={()=>this.handleTap('number','5')}/>
     <Buttons text='6'  onPress={()=>this.handleTap('number','6')}/>
     <Buttons text='-' theme='orange' onPress={()=>this.handleTap('operator','-')}/>
     </Row>
     <Row>
     <Buttons text='1' onPress={()=>this.handleTap('number','1')}/>
     <Buttons text='2' onPress={()=>this.handleTap('number','2')}/>
     <Buttons text='3' onPress={()=>this.handleTap('number','3')}/>
     <Buttons text='+' theme='orange' onPress={()=>this.handleTap('operator','+')}/>
     </Row>
      <Row>
     <Buttons text='0' size="double" onPress={()=>this.handleTap('number','0')}/>
     
     <Buttons text='.' onPress={()=>this.handleTap('number','.')}/>
     
     <Buttons text='=' theme='orange' onPress={()=>this.handleTap('equal')}/>
     </Row>
      </SafeAreaView> 
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});