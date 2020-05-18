import React, { useState, useContext } from 'react';
import { View, Platform, KeyboardAvoidingView, LayoutAnimation, Vibration } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginBackground from '../../assets/img/login-background.svg';
import styles from './styles';
import { 
  ScreenName,
  something_wrong,
  ok,
  username_password_not_correct,
  warning,
} from '../../constants';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../contexts';
import { validation } from '../../utils';
import { Modal } from '../../components';

const ErrorMessage = ({ hasError, message }) => {
  return hasError ? (<Text style={styles.errorMessage}>{message}</Text>) : <Text></Text>;
}

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [validationForm, setValidationForm] = useState({
    userNameBlank: [false, ''],
    passwordBlank: [false, '']
  });
  const [isSigningIn, setSigningIn] = useState(false);
  const { userToken, signIn, byPassLogin } = useContext(AuthContext);
  const onPressSignIn = () => {

    const hasError = validate();
    if (!hasError) {
      setSigningIn(true);
      signIn({ loginname: emailAddress, password: password }).then(() => {
        setSigningIn(false);
      }).catch((error) => {
        Vibration.vibrate(1000);
        setSigningIn(-1);
      });

    }
  };

  const validate = () => {
    let error = false;
    let result = {
      userNameBlank: [false, ''],
      passwordBlank: [false, '']
    };
    if (validation.isEmpty(emailAddress)) {
      result.userNameBlank = [true, 'Enter username, please!'];
      error = true;
    }

    if (validation.isEmpty(password)) {
      result.passwordBlank = [true, 'Enter password, please!'];
      error = true;
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setValidationForm(result);

    return error;
  }

  const onPressSignUp = () => {
    navigation.navigate(ScreenName.Registration);
  };

  const onPressSkipLogin = () => {
    byPassLogin();
  };

  return (
    <>
      <LoginBackground
        width={'100%'}
        height={'100%'}
        style={styles.background}
      />
      <KeyboardAvoidingView
        style={styles.keyBoardView}
        behavior={Platform.Os === 'ios' ? 'padding' : null}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text testId={'tstCaption'} style={styles.caption} h3>
              Ecommerce{'\n'}Store
            </Text>
            <Input
              containerStyle={styles.input}
              testId={'tstEmailAddress'}
              placeholder={'Email Address'}
              value={emailAddress}
              onChangeText={setEmailAddress}
            />
            <ErrorMessage hasError={validationForm.userNameBlank[0]} message={validationForm.userNameBlank[1]} />
            <Input
              containerStyle={styles.input}
              testId={'tstPassword'}
              placeholder={'Password'}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <ErrorMessage hasError={validationForm.passwordBlank[0]} message={validationForm.passwordBlank[1]} />
            <Text
              testId={'tstForgotPassword'}
              style={styles.forgotPasswordText}
            >
              Forgot Password ?
            </Text>
            <Button
              loading={isSigningIn === true}
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
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal
        isVisible={isSigningIn === -1}
        type={warning}
        title={something_wrong}
        description={username_password_not_correct}
        buttons={[
          {
            title: ok,
            onPress: () => { setSigningIn(false) }
          },
        ]} />
    </>
  );
};

export default LoginScreen;
