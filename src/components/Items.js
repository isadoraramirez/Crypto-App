import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable} from 'react-native';
import Colors from '../res/colors'

const CoinsItem = ({item, onPress}) => {
    return (

        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
            <Text style={styles.nameText}>{item.name}</Text> 
             <Text style={styles.symbolText}>{item.symbol}</Text>
             <Text style={styles.priceText}>{`$${item.price_usd}`}</Text> 
            </View>

            {/* informacion de la data, saldos consumos etc. */}
        <View styles={styles.row}>
            <Text style={styles.percentText}>{item.percent_change_1h}</Text>
            {/* <Image/> */}
        </View>

        </Pressable>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 16,
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        marginLeft: Platform.OS == 'ios'? 16:0
    },
    row:{
        flexDirection: "row"
    },
    symbolText:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    nameText: {
        color: "#fff",
        fontSize:14,
        marginRight:12
    },
    percentText:{
        color: "#fff",
        fontSize:12
    }

})
export default CoinsItem;