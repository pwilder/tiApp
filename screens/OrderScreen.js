import React, {Component} from 'react';
import {Modal, Text, TextInput, TouchableHighlight, View, Alert, Button} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { incrementPlayerIndex, passPlayer } from "../state/actions";
import {TouchableWithoutFeedback} from "react-native-web";
import {
    responsiveFontSize
} from "react-native-responsive-dimensions";
import CheckBox from 'react-native-check-box'
import findNextIndex from '../common/findNextIndex';

class OrderScreen extends Component {

    render() {
        const { players, currentPlayerIndex } = this.props.playerData;
        if (players.length === 0) {
            return (

                <View>
                    <Text>Add players in the shuffle screen.</Text>
                </View>
            )
        } else if (players.every((item) => item.passed) ) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: responsiveFontSize(5)}}>All players passed</Text>
                </View>
            )
        }

        const currentPlayer = players[currentPlayerIndex];
        const nextPlayer = players[findNextIndex(players, currentPlayerIndex)];
        return (
            <View style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={this.props.incrementPlayerIndex}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ backgroundColor: currentPlayer.backgroundColor, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{color: currentPlayer.textColor, fontSize: responsiveFontSize(5)}} adjustsFontSizeToFit={true}>{currentPlayer.label}</Text>
                        </View>
                        <View style={{ backgroundColor: nextPlayer.backgroundColor, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{color: nextPlayer.textColor, fontSize: responsiveFontSize(5)}} adjustsFontSizeToFit={true}>{nextPlayer.label}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <CheckBox
                    onClick={() => this.props.passPlayer(currentPlayerIndex)}
                    isChecked={currentPlayer.passed}
                    rightText={'Pass'}
                    rightTextStyle={{fontSize: 36}}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        incrementPlayerIndex,
        passPlayer
    }, dispatch)
);

OrderScreen.navigationOptions = {
    header: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);