import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Style';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function ConfirmEmail({navigation}) {
    return (
        <SafeAreaView style={{fles: 1}} >
        <View style={styles.loginInner}>
            <LinearGradient
            colors={["rgba(48,12,99,1)", "rgba(66,16,136,1)"]}
            style={styles.background}>

                <Text style={styles.signupLabel}>Email Enviado</Text>
                <Text style={styles.signupDesc}>Enviamos um link para redefinição de senha, confira sua caixa de email para continuar o processo</Text>

                <TouchableOpacity style={styles.buttonEnter} onPress={() => navigation.navigate("Signin") }>
                    <Text style={styles.textButton}>
                        {"VOLTAR"}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
        </SafeAreaView>
    );
}
