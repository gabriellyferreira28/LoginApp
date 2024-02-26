import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    loginInner: {
        width: "100%",
        height: "100vh",
    },

    inputInner: {
        width: "92%",
        marginVertical: 7,
    },

    inputLabel: {
        color: "white",
        fontWeight: 600,
        fontSize: "1em"
    },

    error:{
        color: "red",
        fontWeight: 600,
        fontSize: "1em"
    },

    inputLogin: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 15,
        paddingLeft: "70px",
        color: "white",
        width: "100%",
        marginVertical: 5,
        height: "60px",
        fontSize: "1.1em",
        placeholder: "",
        placeholderTextColor: "#ffffff40" 
    },

    background: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonEnter: {
        width: "92%",
        backgroundColor: "white",
        height: 55,
        borderRadius: "28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },

    textButton:{
        color: "#421088",
        fontSize: "1.1em",
        fontWeight: 700
    },

    inputTextInner:{
        width: "100%",
        position: "relative",
        justifyContent: "center"
    },

    buttonCreateAccount:{
        width: "92%",
        borderColor: "white",
        borderWidth: 1,
        height: 55,
        borderRadius: "28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px"
    },

    iconInputInner:{
        position: "absolute",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "white",
        borderWidth: 1,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },

    textButtonCA:{
        color: "white",
        fontSize: "1.1em",
        fontWeight: 700
    },

    loginLabel: {
        color: "white",
        fontWeight: 600,
        fontSize: "1.7em",
        width: "92%",
        marginVertical: "30px"
    },

    orLabel: {
        color: "white",
        fontWeight: 600,
        fontSize: "1em",
        marginVertical: 35
    },

    signupLabel:{
        color: "white",
        fontWeight: 700,
        fontSize: "2em",
    },

    signupDesc:{
        color: "white",
        fontWeight: 600,
        fontSize: "1em",
        width: "92%",
        marginVertical: "30px",
        textAlign: "center"
    },
})

export default styles