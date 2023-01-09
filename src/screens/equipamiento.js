import { React, useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { API } from '../api/api'

const Equipamiento = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        getItems()
    }, [items]);

    const getItems = async () => {
        const data = await API.getEquipamiento()
        const items = await data.map(items => items)
        setItems(items)
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            {/* {items?.map(item => <Text>{item.name}</Text>)} */}
            <Pressable onPress={getItems}>
                {items?.map(item => <Text>{item.name}</Text>)}

            </Pressable>
        </View>
    )
}

export default Equipamiento