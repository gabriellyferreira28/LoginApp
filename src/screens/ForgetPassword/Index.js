import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../../firebase';


export default function ForgetPassword({navigation}) {
    
    const [email, setEmail] = useState("")
    const [buttonEnabled, setButtonEnabled] = useState(false)

    function resetPassword(){
        sendPasswordResetEmail(auth, email).then(() => {
            navigation.navigate("ConfirmEmail")
        })
    }


    useEffect(() => {
            if(email.trim() !== ""){
                setButtonEnabled(true)
            } else {
                setButtonEnabled(false)
            }
        },[email])

    return (
        <SafeAreaView style={{fles: 1}} >
        <View style={styles.loginInner}>
            <LinearGradient
            colors={["rgba(48,12,99,1)", "rgba(66,16,136,1)"]}
            style={styles.background}>

                <Text style={styles.signupLabel}>Recuperar Senha</Text>
                <Text style={styles.signupDesc}>Informe o email cadastrado no nosso sistema para enviarmos um email de recuperação</Text>

                <View style={styles.inputInner}>
                    <Text style={styles.inputLabel}>E-mail</Text>
                    <View style={styles.inputTextInner}>
                        <View style={styles.iconInputInner}>
                            <Ionicons 
                                name= "mail-outline"
                                size= {25}
                                color= "white"
                            />
                        </View>
                        <TextInput style={styles.inputLogin} placeholder='digite seu email'  onChangeText={text => setEmail(text)} value={email}></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonEnter} disabled={!buttonEnabled} onPress={() => resetPassword() }>
                    <Text style={styles.textButton}>
                        {"ENVIAR"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCreateAccount} onPress={() => {navigation.navigate("Signin")}}>
                    <Text style={styles.textButtonCA}>
                        {"VOLTAR"}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
        </SafeAreaView>
    );
}
