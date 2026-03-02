import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Button, CheckBox, Overlay } from '@rneui/themed';
import { useForm, Controller } from 'react-hook-form';
import TextInputControl from '../components/TextInputControl';
import * as yup from 'yup';

import {yupResolver} from "@hookform/resolvers/yup";


/**
 * username reg reads as:
 * [a-zA-Z0-9_]   - any letter lowercase, letter uppercase, number or _
 * {5,10}         - 5 to 10 times
 * IE any of BobSmith, bsmith2000, b_smith_2020
 */
const usernameRegex = /^[a-zA-Z0-9_]{5,10}$/;

/** 
 * phone regex reads as:
 * (?             - opening bracket 0 or 1 times
 * [0-9]{3}       - 3 digits
 * )?             - closing bracket 0 or 1 times
 * [-. ]?         - any of a dash, dot or space 0 or 1 times
 * [0-9]{3}       - 3 digits
 * [-. ]?         - any of a dash, dot or space 0 or 1 times
 * [0-9]{3}       - 4 digits
 * IE any of (604)555-1234 604555555 604.555.1234 604-555-1234
*/
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

/**
 * password regex reads as:
 * (?=.*[A-Za-z])       - one required letter upper or lower case
 * (?=.*\d)             - one required digit
 * (?=.*[@$!%*#?&])     - one required special character, any of: @ $ ! % * # ? & _
 * [A-Za-z\d@$!%*#?&]   - other characters can be text, numbers or special characters
 * {8,}                 - min of 8 characters total
 */
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/;

// yup schema for form
const schema = yup.object({
  username: yup.string().trim().required("required").matches(usernameRegex, "usernames need to be 5-10 characters of numbers, letters or underscore"),
  orgEmail: yup.string().trim().required("required").email("not a valid email"),
  orgPhone: yup.string().trim().required("required").matches(phoneRegex, "enter a number in the form xxx-xxx-xxxx"),
  estContracts: yup.number().required("required").typeError("must be a number").integer("must be a whole number").min(1, "cannot be less than 1").max(10, "cannot be greater than 10"),
  password: yup.string().trim().required("required").matches(passwordRegex, "8+ characters with at least one letter, one number and one special character"),
  pwConfirm: yup.string().trim().required("required").oneOf([yup.ref("password"), null], "passwords must match"),
  termsCheck: yup.boolean().oneOf([true]),
});


export default function RegistrationScreen({ navigation }) {
  // needed for the terms overlay
  const [visibleTerms, setVisibleTerms] = useState(false);

  // useForm hook for form
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "bob_smith",
      orgEmail: "bob@bob.com",
      orgPhone: "604-555-1234",
      estContracts: "5",
      password: "drowssap_10",
      pwConfirm: "drowssap_10",
      termsCheck: false,
    }
  });


  // onSubmit processor
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text h1 style={{ alignSelf: 'center'}}>New Account</Text>

      {/* username field */}
      <TextInputControl 
        control={control}
        errors={errors}
        mode="text"
        iconname="account"
        placeholder="5-10 alpha-numeric characters"
        fieldname="username"
      />

      {/* orgPhone field */}
      <TextInputControl 
        control={control}
        errors={errors}
        mode="tel"
        iconname="phone"
        placeholder="xxx-xxx-xxxx"
        fieldname="orgPhone"
      />

      {/* orgEmail field */}
      <TextInputControl 
        control={control}
        errors={errors}
        mode="email"
        iconname="email"
        placeholder="primary email address"
        fieldname="orgEmail"
      />

      {/* estContracts field */}
      <TextInputControl 
        control={control}
        errors={errors}
        mode="numeric"
        iconname="account-cash"
        placeholder="est monthly contracts from 1 to 10"
        fieldname="estContracts"
      />

      {/* password field */}
      <TextInputControl 
        control={control}
        errors={errors}
        mode="text"
        iconname="account-key"
        placeholder="8+ chars with at least 1 special character"
        fieldname="password"
      />

      {/* pwConfirm field */}
      <TextInputControl 
        control={control}
        errors={errors}
        mode="text"
        iconname="account-key-outline"
        placeholder="confirm your password"
        fieldname="pwConfirm"
      />

      {/* termsCheck field */}
      <Controller 
        control={control}
        name='termsCheck'
        render={({field: {onChange, onBlur, value}}) => (
          <CheckBox
            title={(
              <View style={styles.regContainer}>
                <Text>I agree to the </Text>
    
                <TouchableOpacity
                  onPress={() => setVisibleTerms(true)}
                >
                  <Text style={styles.textLink}>Terms of use</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      />

      <View style={styles.btnContainer}>
        <Button
          title='Create Account'
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          title='Cancel'
          onPress={() => navigation.replace('Login')}
        />
      </View>

      {/* overlay for the terms of service */}
      <Overlay
        isVisible={visibleTerms}
        overlayStyle={{ margin: 15 }}
      >
        <View>
          <Text h3>Terms of Use</Text>

          <Text style={{ margin: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus justo at enim tincidunt, et gravida nunc egestas. Aliquam quis sapien porttitor, mattis risus vitae, consequat lorem. </Text>
          <Text style={{ margin: 5 }}>Sed quis ante fermentum sem congue porttitor vitae in enim. Duis eleifend massa vel eros suscipit, aliquam ultricies felis scelerisque. Praesent iaculis est in euismod iaculis. Maecenas rhoncus convallis ligula id fermentum. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In arcu sapien, tincidunt eu ex vel, fermentum semper nulla. Sed id massa arcu. Donec maximus metus augue, non convallis leo convallis sed. Phasellus ac orci non quam semper dictum vitae ac odio. Proin ut maximus velit. Vivamus quis ligula dolor. Duis ut ex eget dolor egestas feugiat vel vitae ex. Etiam ut quam eget turpis ultrices euismod quis nec purus.</Text>
          <Text style={{ margin: 5 }}>Proin sit amet quam ut libero semper bibendum id eget tellus. Curabitur varius dapibus lectus, sed tempus eros semper vel. Maecenas eget lacus id sapien interdum pretium nec sed ipsum. Phasellus in ante quis ante feugiat accumsan. Sed ac orci et felis rutrum dapibus. Duis nisl lectus, tincidunt a sollicitudin non, ullamcorper sed turpis. Nam ut lacus ut orci dictum tincidunt at eget mauris. In hac habitasse platea dictumst. Nunc faucibus lacus risus, non convallis turpis malesuada in. Suspendisse pellentesque turpis augue, quis bibendum odio faucibus at. Nulla interdum, diam at rutrum maximus, lacus magna ultricies tortor, quis accumsan augue lorem nec risus. Nunc eu neque in nulla molestie maximus.</Text>
          <Text style={{ margin: 5 }}>Donec nec viverra eros. Cras id eleifend odio. Aliquam ornare, urna nec finibus laoreet, ipsum urna laoreet lorem, luctus maximus lectus mi dictum felis.</Text>

          <Button
            title='Close'
            onPress={() => setVisibleTerms(false)}
          />
        </View>

      </Overlay>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  regContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLink: {
    color: '#2089dc',
    fontWeight: 'bold'
  },

  chkNotice: {
    color: '#ff190c',
    marginLeft: 10,
  },

  btnContainer: {
    padding: 10,
    width: '100%'
  },
});
