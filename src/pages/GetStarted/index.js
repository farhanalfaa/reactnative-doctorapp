import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ILLogo } from '../../assets/illustration';
import { Button, Gap } from '../../components';

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.title}>Konsultasi dengan Dokter sekarang lebih mudah dan fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() =>  navigation.navigate("Register")} />
                <Gap height={16} />
                <Button type="secondary" title="Sign In"  onPress={() =>  navigation.navigate("Login")}/>
            </View>
        </View>
    );  
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {backgroundColor: '#eeeeee', padding: 40, justifyContent: 'space-between', flex: 1 },
    title: {fontSize: 28, fontWeight: '600', color: '#393e46', marginTop: 40, fontFamily: 'Nunito-SemiBold'}
});