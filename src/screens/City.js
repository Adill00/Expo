import React from 'react'
import { SafeAreaView,Text,StyleSheet,ImageBackground,StatusBar,View} from 'react-native'
import IconText from '../components/IconText'

const City = () => {
    const {container,cityName,cityText,countryName,populationWrapper,populationText,riseSetWrapper,riseSetText,imageLayout,rowLayout} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../assets/city-background.jpg')} 
                style={imageLayout}
            >
                <Text style={[cityName , cityText]}>London</Text>
                <Text style={[countryName , cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                        iconName={'user'} 
                        iconColor={'red'} 
                        bodyText={'8000'} 
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>

                    <IconText  
                        iconName={'sunrise'} 
                        iconcolor={'white'} 
                        bodyText={'10:46:58AM'} 
                        bodyTextStyles={riseSetText}
                    />

                    <IconText  
                    iconName={'sunset'} 
                    iconcolor={'white'} 
                    bodyText={'17:28:15PM'} 
                    bodyTextStyles={riseSetText}
                    />
                </View>

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
        fontSize:40
    },
    countryName:{
        fontSize:30
    },
    cityText:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    },
    populationWrapper:{
        justifyContent:'center',
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color:'red',
        fontWeight:'bold'
    },
    riseSetWrapper:{
        justifyContent:'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    },
    //some shared style for population wrapper and rise set wrapper
    rowLayout:{
        flexDirection:'row',
        align:'center'
    }


})



export default City