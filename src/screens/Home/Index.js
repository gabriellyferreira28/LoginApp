import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Style';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({navigation}) {

    function logout() {
        localStorage.removeItem("@Firestore:user");
        navigation.navigate("Signin")
    }

    return(
        <SafeAreaView style={{flex: 1}} >
            <View style={styles.homeInner}>
                <LinearGradient
                colors={["rgba(14,77,20,1)", "rgba(6,122,0,1) 100%)"]}
                style={styles.background}>

                    <Text style={styles.label}>Obrigado por fazer login</Text>
                    <TouchableOpacity style={styles.button} onPress={() => logout()}>Sair</TouchableOpacity>

                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}