import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    loginInner: {
        width: "100%",
        height: "100vh",
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