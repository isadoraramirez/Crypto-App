import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Http from './libs/http';

class Screen extends Component{

    state ={
        coins: []
    }

    componentDidMount = async() => {
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        
        this.setState({coins: res.data });

    }

    handlePress= () =>{
        console.log("presionado",this.props);
        this.props.navigation.navigate('Balance');
    }
    render(){
        const { coins } = this.state;
        return(
            <View style={styles.container}>
               <FlatList
               data={coins}
               renderItem={({item})=> <Text>{item.name}</Text>} 
               /> 
            </View>

        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: "blue", 
       alignItems: "center"
   } ,
   btn: {
       padding: 8,
       backgroundColor: "pink",
       margin:16,
       borderRadius:8
   },
   btnText:{
       color: "white",
       textAlign: "center"
   }
})

export default Screen;