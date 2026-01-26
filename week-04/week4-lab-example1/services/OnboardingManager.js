import AsyncStorage from "@react-native-async-storage/async-storage";

export const setOnboardingFlag = async (obFlag) => {
    try {
        await AsyncStorage.setItem("OnboardingFlag", JSON.stringify(obFlag));
    } catch (e) {
        console.error(e);
    }
}

export const getOnboardingFlag = async () => {
    let obShowFlag = null;

    try {
        obShowFlag = await AsyncStorage.getItem("OnboardingFlag");
    } catch (e) {
        console.error(e);
    }

    return obShowFlag;
}