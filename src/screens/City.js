import React from 'react'
import { SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar } from 'react-native'


const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
                <Text style={styles.cityName}>London</Text>
                <Text style={styles.countryName}>UK</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1
    },
    cityName:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    countryName:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    }

})



export default City