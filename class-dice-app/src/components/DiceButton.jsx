import { TouchableOpacity, Text } from 'react-native';
import { width } from '../constants/measures';

export default function DiceButton({dice, rolldice}){
    return(
        <TouchableOpacity onPress={rolldice} style ={button}>
            <Text>{dice}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    button: {
        width: '20%',
        maxWidth: '72',
        backgroundcolor: 'whitesmoke',
        flex: 1,
        justifyContent: 'center',
        border: 1,
        BorderWidth: 16,
    }
})