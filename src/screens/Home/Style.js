import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeInner:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
    },
    
    background: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    label:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    button:{
        width: 100,
        height: 50,
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "white",
    }
})

export default styles