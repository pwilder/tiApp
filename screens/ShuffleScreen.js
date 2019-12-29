import React, { Component } from 'react'
import {View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Platform, Modal} from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { cloneDeep } from 'lodash';
import PlayerForm from '../components/PlayerForm';
import bestContrast from 'get-best-contrast-color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlayer, shufflePlayers, clearPlayers } from '../state/actions';

const possibleContrastColors = ['#FFFFFF', '#D9DDDC', '#808508', '#999DA0', '#000000'];

class ShuffleScreen extends Component {

    componentWillMount() {
        this.setState({
            data: [],
            modalVisible: false,
        });
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    submit = (results) => {
        this.setModalVisible(false);
        const newPlayer = {
            key: `item-${results.name}`,
                label: results.name,
            backgroundColor: `${results.color}`,
            textColor: bestContrast(results.color, possibleContrastColors),
        };
        this.props.addPlayer(newPlayer);
    }

    cancel = () => {
        this.setModalVisible(false);
    }

    clear = () => {
        this.props.clearPlayers();
    }

    renderItem = ({ item, index, move, moveEnd, isActive }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 100,
                    backgroundColor: isActive ? 'orange' : item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <Text style={{color: item.textColor, fontSize: 36}}>{item.label}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={{marginTop: 22}}>
                        <PlayerForm onSubmit={this.submit} onCancel={this.cancel}/>
                    </View>
                </Modal>
                <View style={{flexGrow: 1}}>
                    <DraggableFlatList
                        data={this.props.playerData.players}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => `draggable-item-${item.key}`}
                        scrollPercent={5}
                        onMoveEnd={({ data }) => {
                            // this.setState({ data });
                            this.props.shufflePlayers(data);
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                    <Button title={'Add'} onPress={() => {
                        this.setModalVisible(true)
                    }}/>
                    <Button title={'Clear'} onPress={this.clear}/>
                </View>
            </View>
        )
    }
}

ShuffleScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addPlayer,
        shufflePlayers,
        clearPlayers
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ShuffleScreen);