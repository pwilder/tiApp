import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import ColorPalette from 'react-native-color-palette'
import { Formik } from 'formik';

const isDisabled = (values) => {
    return !(values.name && values.color);
};

const PlayerForm = props => (
    <Formik
        initialValues={{ name: '' }}
        onSubmit={props.onSubmit}
        onReset={props.onCancel}
    >
        {({ handleChange, handleBlur, handleSubmit, handleReset, values }) => (
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={{}}>Label:</Text>
                    <View style={{flex: 1}}>
                        <TextInput
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            style={{borderWidth: 2, borderColor: 'lightgrey'}}
                        />
                    </View>
                </View>
                <ColorPalette
                    onChange={handleChange('color')}
                    value={values.color}
                    colors={['#FF0000', '#008000', '#0000FF', '#6A0DAD', '#000000', '#FFFF00']}
                    title={"Color:"}
                    />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <Button title={'Cancel'} onPress={handleReset}/>
                    <Button title={'OK'} onPress={handleSubmit} disabled={isDisabled(values)}/>
                </View>
            </View>
        )}
    </Formik>
);

export default PlayerForm;