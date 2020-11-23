import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {DummyUser} from "../../../assets";
import { colors, fonts } from '../../../utils';

const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyUser} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Farhan Alfariqi</Text>
                <Text style={styles.profession}>Front End Developer</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {flexDirection: 'row'},
    avatar: {height: 46, width: 46, borderRadius: 46/2, marginRight: 12},
    name: {fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.primary},
    profession: {fontSize: 12, fontFamily: fonts.primary[400], color: colors.text.secondary}
})
