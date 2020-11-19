import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../../utils';
import { ILLogo } from './../../assets/illustration';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 3000);
    }, [navigation])

    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Welcome App</Text>
        </View>
    );  
};

export default Splash;

const styles = StyleSheet.create({
    page: {backgroundColor: colors.white, flex: 1, alignItems: 'center', justifyContent: 'center'},
    title: {fontSize: 20, fontFamily: 'Nunito-Semibold', color: colors.text.primary, marginTop: 20}
});
