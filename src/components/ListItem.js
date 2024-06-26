import React from 'react'
import {Text, View,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'




//for renderItem . as we will render dt_text , min & max temp , condition
const ListItem = (props) => {
    const {dt_txt,min,max,condition} = props
    const {item,date,temp} = styles                 //so in text 2lines below,delete style. before date,temp,item
    return(
        <View style={item} >
            <Feather name = {'sun'} size= {50} color={'green'}/>
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:5,
        backgroundColor:'pink'
    },
    temp:{
        color:'white',
        fontSize:20
    },
    date:{
        color:'white',
        fontSize:15
    },



})

export default ListItem