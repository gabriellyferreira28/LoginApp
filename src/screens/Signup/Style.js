import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    upInner:{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    loginInner: {
        width: "100%",
        height: "100vh",
    },

    inputInner: {
        width: "92%",
        marginVertical: 7,
    },

    inputLabel: {
        color: "#421088",
        fontWeight: 600,
        fontSize: "1em"
    },

    inputLogin: {
        borderColor: "#421088",
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 15,
        paddingLeft: "70px",
        color: "#421088",
        width: "100%",
        marginVertical: 5,
        height: "60px",
        fontSize: "1.1em",
        placeholder: "",
        placeholderTextColor: "#4210887d"
    },

    iconInputInner:{
        position: "absolute",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#421088",
        borderWidth: 1,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },

    inputTextInner:{
        width: "100%",
        position: "relative",
        justifyContent: "center"
    },

    buttonCreateAccount: {
        width: "92%",
        backgroundColor: "#421088",
        height: 55,
        borderRadius: "28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 17
    },

    textButton:{
        color: "white",
        fontSize: "1.1em",
        fontWeight: 700
    },

    textButtonCA:{
        color: "#421088",
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
        color: "#421088",
        fontWeight: 600,
        fontSize: "1em",
        marginVertical: 35
    },

    buttonLogin:{
        width: "92%",
        borderColor: "#421088",
        borderWidth: 1,
        height: 55,
        borderRadius: "28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    signupLabel:{
        color: "#421088",
        fontWeight: 700,
        fontSize: "3em",
    },

    signupDesc:{
        color: "#421088",
        fontWeight: 600,
        fontSize: "1em",
        width: "92%",
        marginVertical: "30px"
    },

    error:{
        color: "red",
        fontWeight: 600,
        fontSize: "1em"
    }
})

export default styles