import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Background from '../../assets/img/login-background.svg';
import styles from './styles';
import { ScreenName } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPressSignIn = () => {
    navigation.navigate(ScreenName.Login);
  };
  return (
    <>
      <Background width={'100%'} height={'100%'} style={styles.background} />
      <View style={styles.container}>
        <Text testId={'tstCaption'} style={styles.caption} h3>
          Ecommerce{'\n'}Store
        </Text>
        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
        >
          <Input
            containerStyle={styles.input}
            testId={'tstFullName'}
            placeholder={'Full Name'}
            value={fullName}
            onChangeText={setFullName}
          />
          <Input
            containerStyle={styles.input}
            testId={'tstEmailAddress'}
            placeholder={'Email Address'}
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          <Input
            containerStyle={styles.input}
            testId={'tstPassword'}
            placeholder={'Password'}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Input
            containerStyle={styles.input}
            testId={'tstConfirmPassword'}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </KeyboardAvoidingView>
        <View style={styles.action}>
          <Button testId={'tstSignUp'} title="SIGN UP" />
          <Text
            testId={'tstSignIn'}
            style={styles.signInText}
            onPress={onPressSignIn}
          >
            Already have account? Sign in
          </Text>
        </View>
      </View>
    </>
  );
};

export default RegistrationScreen;
