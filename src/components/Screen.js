import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import Http from './libs/http';
import CoinsItem from './Items';
import Colors from '../res/colors';

class Screen extends Component{

    state ={
        coins: [],
        loading: false
    }

    componentDidMount = async() => {
        this.setState({ loading:true });
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        
        this.setState({coins: res.data, loading: false });

    }

    handlePress= (coin) =>{
        this.props.navigation.navigate('Balance', { coin });
    }
    render(){
        const { coins,loading } = this.state;
        return(
            <View style={styles.container}>
                { loading ?
                <ActivityIndicator 
                style={styles.loader}
                color="black" 
                size="large"/>
                :null

                }
               <FlatList
               data={coins}
               renderItem={({item})=>
               <CoinsItem 
               item={item} 
               onPress={() => this.handlePress(item)}/>
                 }
               />
            </View>

        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: Colors.charade, 
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
   },
   loader:{
       marginTop: 220,
   }
})

export default Screen;