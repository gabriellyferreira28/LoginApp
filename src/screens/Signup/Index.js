import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import auth from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function Signup({navigation}) {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [passConfirm, setPassConfirm] = useState("")
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [error, setError] = useState("")

    const SignUp = async (email, password) => {
        setError("")
        if(pass != passConfirm){
            setError("As senhas não coincidem")
        } else {
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('Home')
                localStorage.setItem("@Firestore:user", "Logado");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                if(errorCode == "auth/invalid-email"){
                    setError("Email inválido")
                } else if(error = "auth/weak-password"){
                    setError("Senha deve conter o minimo de 6 caracteres")
                }
            })
        }
        
    }

    useEffect(() => {
        if(email.trim()!== "" && pass.trim()!== "" && passConfirm.trim()!== ""){
            setButtonEnabled(true)
        } else {
            setButtonEnabled(false)
        }
    },[email, pass, passConfirm])

    return(
        <SafeAreaView style={{flex: 1}} >
            <View style={styles.upInner}>

                <Text style={styles.signupLabel}>Cadastre-se</Text>
                <Text style={styles.signupDesc}>Preencha os dados abaixo para criar seu cadastro e tenha acesso ao nosso app</Text>

                <Text style={styles.error}>{error}</Text>

                <View style={styles.inputInner}>
                    <Text style={styles.inputLabel}>E-mail</Text>
                    <View style={styles.inputTextInner}>
                        <View style={styles.iconInputInner}>
                            <Ionicons 
                                name= "person-outline"
                                size= {25}
                                color= "purple"
                                />
                        </View>
                        <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.inputLogin} placeholder='digite um email'></TextInput>
                    </View>
                </View>
                <View style={styles.inputInner}>
                    <Text style={styles.inputLabel}>Senha</Text>
                    <View style={styles.inputTextInner}>
                        <View style={styles.iconInputInner}>
                            <Ionicons 
                                name= "lock-closed-outline"
                                size= {25}
                                color= "purple"
                            />
                        </View>
                        <TextInput value={pass} onChangeText={text => setPass(text)} style={styles.inputLogin} placeholder='digite uma senha'></TextInput>
                    </View>
                </View>
                <View style={styles.inputInner}>
                    <Text style={styles.inputLabel}>Confirmar Senha</Text>
                    <View style={styles.inputTextInner}>
                        <View style={styles.iconInputInner}>
                            <Ionicons 
                                name= "lock-closed-outline"
                                size= {25}
                                color= "purple"
                                />
                        </View>
                        <TextInput value={passConfirm} onChangeText={text => setPassConfirm(text)} style={styles.inputLogin} placeholder='digite a senha novamente'></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonCreateAccount} disabled={!buttonEnabled} onPress={() => SignUp(email, pass)}>
                    <Text style={styles.textButton}>
                        {"CRIAR CONTA"}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.orLabel}>- - - - - - - - - - - - - -     OU     - - - - - - - - - - - - - -</Text>

                <TouchableOpacity style={styles.buttonLogin} onPress={() => {navigation.navigate("Signin")}}>
                    <Text style={styles.textButtonCA}>
                        {"FAZER LOGIN"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}