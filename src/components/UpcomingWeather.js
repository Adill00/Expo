import React from 'react'
import { SafeAreaView ,StyleSheet , Text, FlatList,View} from 'react-native'
import {Feather} from '@expo/vector-icons'

const DATA = [
    {
        dt_txt: "2022-08-30 12:00:00",
        main: {
            "temp_min": 296.3,
            "temp_max": 298.2
          },
        weather:[
            {
              "main": "Sun",
            }
        ]
    },
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            "temp_min": 256.2,
            "temp_max": 259.3
          },
        weather: [
            {
              "main": "Clouds"
            }
        ]
    },
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            "temp_min": 222.8,
            "temp_max": 229.9
          },
        weather: [
            {
              "main": "Rain"
            }
        ]
    }
]


//for renderItem . as we will render dt_text , min & max temp , condition
const Item = (props) => {
    const {dt_txt,min,max,condition} = props
    return(
        <View>
            <Feather name = {'sun'} size= {50} color={'green'}/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}


const UpcomingWeather = () =>{
    const renderItem = ({ item }) => (
        <Item
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max} 
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    }
})


export default UpcomingWeather