import { View, } from 'react-native';

import { Text, Image, Button, } from '@rneui/themed';

import { onbStyles } from '../themes/onboardingStyles';

export default function OnboardingAlphaScreen({ navigation }) {

    return (
        <View style={onbStyles.container}>
            <View style={onbStyles.imageSection}>
                <Image
                    source={require('../assets/lab-assets/beach-resort-01.png')}
                    style={onbStyles.featImage}
                />
            </View>
            <View style={onbStyles.copySection}>
                <Text h2 style={onbStyles.heading}>Onboarding Alpha</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim elementum ipsum, sit amet tempus elit fringilla quis.</Text>
            </View>
            <View style={onbStyles.uiSection}>
                <View style={onbStyles.buttonContainer}>
                    
                </View>
                <View style={onbStyles.buttonContainer}>
                    <Button
                        title="Next"
                        icon={{
                            name: 'arrow-forward-outline',
                            type: 'ionicon',
                            size: 25,
                        }}
                        iconPosition='right'
                        raised={true}
                        onPress={() => navigation.navigate('OnboardingBeta')}
                    />
                </View>
            </View>
        </View>
    )

}

