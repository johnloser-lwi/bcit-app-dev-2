import { StyleSheet, View } from 'react-native';
import { Input, Icon } from '@rneui/themed';

import { Controller } from "react-hook-form"

export default function TextInputControl({ control, errors, fieldname, placeholder, inputMode, iconname }) {

    return (
        <View style={styles.fieldContainer}>
            <View style={styles.iconContainer}>
                <Icon
                    type='material-community'
                    name={iconname}
                />
            </View>
            <View style={styles.inputContainer}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            inputMode={inputMode}
                            placeholder={placeholder}
                            errorMessage={errors[fieldname] && errors[fieldname].message}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name={fieldname}
                />
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    fieldContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    iconContainer: {
        paddingLeft:5,    
        paddingTop: 15,
        alignSelf: 'baseline',
    },

    inputContainer: {
        width: '100%',    
        paddingRight:5,    
    },

});