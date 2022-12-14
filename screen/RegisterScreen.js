import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'; 
import { auth } from '../firebase'

const RegisterScreen = () => {
    const [email, setEmail] =  useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');
    const register = () => {
        auth.createUserWithEmailandPassword(email, password)
            .then(UserCredentials => {

                //Signed In
                var user = userCredentials.user;
                user.updateProfile({
                    displayName: name,
                    photoURL: imageURL? imageURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(function () {
                    //update successfully
                }).catch(function (error) {
                    //An error happened
                });

                //..
                navigation.popToTop();
            })
                .catch(error => {
                    var errorMessage = error.message;
                    alert(errorMessage);
                });

    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your name"
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}      
            />
            <Input
                placeholder="Enter your email"
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}      
            />
            <Input
                placeholder="Enter your password"
                label="Password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry      
            />
            <Input
                placeholder="Enter your image URL"
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageURL}
                onChangeText={text => setImageUrl(text)}      
            />
            <Button title="register" onPress={register} 
            style={styles.button} />
        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    button: { 
        width: 200,
        marginTop:10
    },
    container: {
        flex: 1,
        alignItems:'center',
        padding: 10

    }
})