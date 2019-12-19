import React, {Component} from 'react';
import {Modal, Text, TextInput, TouchableHighlight, View, Alert, Button} from 'react-native';
import { connect } from 'react-redux';

class OtherScreen extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(props) {
        console.log('In Other screen');
        console.log(props);
        return (
            <View style={{ padding: 15, flex: 1 }}>
                <TextInput style={{borderWidth: 2, borderColor: 'lightgrey'}}>Value</TextInput>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(OtherScreen);