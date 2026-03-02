import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from '@rneui/themed';
import {useForm, Controller} from 'react-hook-form';

export default function LoginScreen({ navigation }) {
  // useForm hook for form
  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      username: "",
      password: "",
    }
  });

  // onSubmit processor
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text h1 style={{ alignSelf: 'center' }}>Welcome Back</Text>

      {/* username input field */}
      <View style={styles.fieldContainer}>
        <Controller 
          control={control}
          name='username'
          rules={{
            required: true
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input 
              placeholder='user name' 
              errorMessage={errors.username && 'required'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />

          )}
        />
      </View>

      {/* password input field */}
      <View style={styles.fieldContainer}>
        <Controller 
        control={control}
        name='password'
        rules={{
          required: true
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input 
            placeholder='password' 
            secureTextEntry
            errorMessage={errors.password && 'required'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Button
          title='Login'
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View style={styles.regContainer}>
        <Text>Don't have an account?</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.textLink}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  fieldContainer: {
    padding: 10,
    width: '100%'
  },

  regContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLink: {
    color: '#2089dc',
    marginLeft: 5,
    fontWeight: 'bold'
  }
});
