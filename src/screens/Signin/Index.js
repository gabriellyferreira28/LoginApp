import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase';


export default function Signin({navigation}) {
    
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [error, setError] = useState("")

    const signInEmail = async (email, password) => {
        setError("")
        try {
            console.log('Email:', email);
            console.log('Password:', password);
            await signInWithEmailAndPassword(auth, email, password).then(() => {
                navigation.navigate('Home')
                localStorage.setItem("@Firestore:user", "Logado");
            }).catch(
                (error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    if(errorCode == "auth/invalid-email"){
                        setError("Email ou senha inválidos")
                    }
                }
            )
            console.log('Login bem-sucedido');
        } catch (err) {
            console.error("Erro ao fazer login", err)
            throw err
        }
    }

    useEffect(() => {
            if(email.trim() !== "" && pass.trim() !== ""){
                setButtonEnabled(true)
            } else {
                setButtonEnabled(false)
            }
        },[email, pass])

    return (
        <SafeAreaView style={{fles: 1}} >
        <View style={styles.loginInner}>
            <LinearGradient
            colors={["rgba(48,12,99,1)", "rgba(66,16,136,1)"]}
            style={styles.background}>

                <Text style={styles.loginLabel}>Faça LOGIN para aproveitar por completo nosso app</Text>
                <Text style={styles.error} >{error}</Text>

                <View style={styles.inputInner}>
                    <Text style={styles.inputLabel}>E-mail</Text>
                    <View style={styles.inputTextInner}>
                        <View style={styles.iconInputInner}>
                            <Ionicons 
                                name= "person-outline"
                                size= {25}
                                color= "white"
                            />
                        </View>
                        <TextInput style={styles.inputLogin} placeholder='digite seu email'  onChangeText={text => setEmail(text)} value={email}></TextInput>
                    </View>
                </View>
                <View style={styles.inputInner}>
                    <Text style={styles.inputLabel}>Senha</Text>
                    <View style={styles.inputTextInner}>
                        <View style={styles.iconInputInner}>
                            <Ionicons 
                                name= "lock-closed-outline"
                                size= {25}
                                color= "white"
                            />
                        </View>
                        <TextInput style={styles.inputLogin} placeholder='digite sua senha'  onChangeText={text => setPass(text)} value={pass}></TextInput>
                    </View>
                </View>
                <Text style={styles.txt_forget} onPress={() => navigation.navigate("ForegetPassword")}>Esqueceu a senha?</Text>

                <TouchableOpacity style={styles.buttonEnter} disabled={!buttonEnabled} onPress={() => signInEmail(email, pass) }>
                    <Text style={styles.textButton}>
                        {"ENTRAR"}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.orLabel}>- - - - - - - - - - - - - -     OU     - - - - - - - - - - - - - -</Text>

                <TouchableOpacity style={styles.buttonCreateAccount} onPress={() => {navigation.navigate("Signup")}}>
                    <Text style={styles.textButtonCA}>
                        {"CRIAR CONTA"}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
        </SafeAreaView>
    );
}
