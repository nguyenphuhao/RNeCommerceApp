import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginBackground from '../../assets/img/login-background.svg';
import styles from './styles';
import { NavigationConstants } from '../../constants';

import { login } from '../../services/login';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const onPressSignIn = () => {
    login({ loginname: emailAddress, password: password })
      .then(() => {
        navigation.navigate(NavigationConstants.ProductStack);
      })
      .catch((error) => {
        Alert.alert('Login', error.message, [
          { text: 'OK', onPress: () => {} },
        ]);
      });
  };

  const onPressSignUp = () => {
    navigation.navigate(NavigationConstants.Registration);
  };

  const onPressSkipLogin = () => {
    navigation.navigate(NavigationConstants.ProductStack);
  };

  return (
    <>
      <LoginBackground
        width={'100%'}
        height={'100%'}
        style={styles.background}
      />
      <View style={styles.container}>
        <Text testId={'tstCaption'} style={styles.caption} h3>
          Ecommerce{'\n'}Store
        </Text>
        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
        >
          <Input
            testId={'tstEmailAddress'}
            placeholder={'Email Address'}
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          <Input
            testId={'tstPassword'}
            placeholder={'Password'}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Text testId={'tstForgotPassword'} style={styles.forgotPasswordText}>
            Forgot Password ?
          </Text>
        </KeyboardAvoidingView>
        <View style={styles.action}>
          <Button
            testId={'tstSignIn'}
            title="SIGN IN"
            onPress={() => {
              onPressSignIn();
            }}
          />
          <Text
            testId={'tstSignUp'}
            style={styles.signUpText}
            onPress={() => {
              onPressSignUp();
            }}
          >
            New Here? Sign Up
          </Text>
        </View>
        <Button
          testId={'tstSkipLogin'}
          containerStyle={styles.skipLogin}
          type="clear"
          icon={<Icon name="arrow-right" size={20} color="#00a8f3" />}
          title="SKIP LOGIN "
          iconRight
          onPress={onPressSkipLogin}
        />
      </View>
    </>
  );
};

export default LoginScreen;
