import React from 'react'
import { SafeAreaView ,StyleSheet , Text, FlatList,StatusBar ,ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'


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




const UpcomingWeather = () =>{
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max} 
        />
    )
    const {container,image} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')} 
                style={image} 
            >
                <Text>Upcoming Weather</Text>            
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:'royalblue'
    },
    image:{
        flex: 1
    }
})


export default UpcomingWeather