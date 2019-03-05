export default function removeSession(pseudo) {
    return {
        type: "REMOVE_SESSION",
        pseudo: pseudo
    };
}