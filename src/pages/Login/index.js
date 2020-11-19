import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ILLogo } from '../../assets/illustration';
import { Button, Gap, Input, Link } from '../../components';
import { colors } from '../../utils';

const Login = () => {
    return (
        <View style={styles.page}>
            <ILLogo style={styles.image}/>
            <Text style={styles.title}>Masuk dan Mulai Konsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24}/>
            <Input label="Password" />
            <Gap height={10}/>
            <Link title="Forgot Password" size={12}/>
            <Gap height={40}/>
            <Button title="Sign In"/>
            <Gap height={30}/>
            <Link title="Create New Account" size={16} align="center"/>
        </View>
    );  
};

export default Login;

const styles = StyleSheet.create({
    image: {maxHeight: 100, maxWidth: 100},
    page: {padding: 40, flex: 1, backgroundColor: colors.white},
    title: {fontSize: 20, fontFamily: 'Nunito-SemiBold', marginTop: 40, marginBottom: 40, maxWidth: 153, color: colors.text.primary}
});
