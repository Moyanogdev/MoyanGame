import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import win from '../assets/images/youWin.jpg'
import lose from '../assets/images/gameOver.jpg'
import colors from '../constants/colors'

const ResultScreen = ({ result }) => {
    const [image, setImage] = useState('')

    useEffect(() => {
        handleImage()
    }, [])

    const handleImage = () => {
        if(result === 'Win') {
            setImage(win)
            return
        }
        setImage(lose)
    }

    return (
        <View style={styles.container}>
            <Card>
                <Text style={{color: 'white'}}>{`You ${result}`}</Text>
            </Card>
            <Image style={styles.imageContainer} source={image} />
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    imageContainer: {
        height: 320,
        width: 320,
        marginTop: 50
    }
})