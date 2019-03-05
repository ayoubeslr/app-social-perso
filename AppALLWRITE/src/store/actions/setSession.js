
export default function setSession(email,pseudo, token) {
    return {
        type: "SET_SESSION",
        pseudo: pseudo,
        token: token,
    };
}

//  