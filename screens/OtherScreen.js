import React, {Component} from 'react';
import { View } from 'react-native';
import CheckBox from 'react-native-check-box'

class OtherScreen extends Component {
    componentWillMount() {
        this.setState({
            checked: true
        });
    }

    render() {
        return (<View>
            <CheckBox
                onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                }}
                isChecked={this.state.isChecked}
                rightText={"CheckBox"}
            />
        </View>)
    }
}

export default OtherScreen