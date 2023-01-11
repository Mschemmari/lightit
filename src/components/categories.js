import { React } from 'react';
import { FlatList, Button } from 'react-native'

const ItemList = ({ items, handlePress }) => {
    return (
        <FlatList
            data={items}
            renderItem={({ item }) => {
                return <Button onPress={() => handlePress(item.name)} title={item.name} />
            }}
            key={(_, i) => i}
        />
    )
}

export default ItemList;