// Platform lets us check if we are on iOS or Android
import { Platform } from 'react-native';
import { createTheme } from '@rneui/themed';

// palette is kept as a separate variable to make it easy to change colours
const themePalette = {
    primary: '#440e62',
    primaryDarker: '#310649',
    primaryLighter: '#872cba',
    alternate: '#ded000',
    grey: '#aaaaaa',
    greyDarker: '#888888',
    greyLighter: '#cccccc'
}

// a theme follows the pattern: components > [ComponentType] > [ComponentStyle]
export const royalTheme = createTheme({    
    components: {
        Button: (buttonProps) => ({
            buttonStyle: {
                raised: true,
                borderRadius: 15,
                backgroundColor: themePalette.primary,
            },
            titleStyle: {
                color: themePalette.alternate
            },
            disabledStyle: {
                backgroundColor: themePalette.greyDarker,
            },
            icon: {
                color: buttonProps.disabled  ? themePalette.greyLighter : themePalette.alternate,
            },
            type: 'clear'
        }),
        Text: {
            h1Style: {
                color: themePalette.primaryDarker,
                fontWeight: 'bold',                
                // since Android only has serif and sans-serif by default with need to check the platform
                // fontFamily: (Platform.OS === 'ios') ? 'Baskerville' : 'serif',                
                fontWeight: 'normal',
                fontFamily: 'Montserrat_700Bold',            
            },
            h2Style: {
                color: themePalette.primaryLighter,
                fontSize: 26,
                margin: 10,
                fontWeight: 'normal',
                fontFamily: 'Montserrat_400Regular',
            },
            h3Style: {
                color: themePalette.primaryLighter,
                fontSize: 20,
                margin: 5,
                fontWeight: 'normal',
                fontFamily: 'Montserrat_400Regular',        
            },
            style: {
                margin: 5,
                fontFamily: 'OpenSans-Regular',
            }
        },

        Avatar: {
            avatarStyle: {
                borderColor: themePalette.primary,
                borderWidth: 1,
            },
            size: 50
        },

        Divider: {
            color: themePalette.primaryLighter,
            width: 2
        },        

        FAB: {
            buttonStyle: {
                raised: true,
                borderRadius: 15,
                backgroundColor: themePalette.primary,
            },
            titleStyle: {
                color: themePalette.alternate
            },
            icon: {
                color: themePalette.alternate,            
            },
            type: 'clear'
        },
    },


});