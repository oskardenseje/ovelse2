import React,{Component} from 'react'
import {Text,View, Button,TextInput, Stylesheet} from 'react-native'
import SubTitleComponent from "./subComponents/SubTitleComponent";

export default class inputComponent extends Component {
    /*Init value*/
    state = {Børge:''}

    /*Lav reference, så val kan sættes*/
    subtitle = React.createRef();

    /*Hent text input med text prop felt og sæt det i state*/
    handleTextChange = (text) => {
        this.setState({Børge: text})
    }

    /*Sæt inputVal til vores subTitle reference i BoxComponenten via Set*/
    handleButtonPressing = ()=>{
        /*Se om knappen virker console.log*/
        console.log(this.state.Børge)
        this.subtitle.current.setTitel(this.state.Børge)
    }

    render() {
        return(
            <View style={{paddingTop: 25}}>
                <Text>4. references og input value </Text>
                <TextInput
                    placeholder='Indsæt tekst her'
                    onChangeText={this.handleTextChange}
                />

                <Button onPress={this.handleButtonPressing} title='Lav en ny title'/>

                {/*Referrencen er ligesom vores Title i TitleComponent og passer data videre*/}
                <SubTitleComponent ref={this.subtitle}/>

            </View>

        )
    };
};

