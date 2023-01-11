import { React } from 'react';
import { Image, Text, View, ScrollView } from 'react-native'

const ItemList = ({ categories, showItems }) => {
    return (
        <ScrollView>
            {showItems && categories.map((item, i) => {
                return <View key={i}>
                    <Text>{item.name}</Text>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: item.img }}
                    />
                </View>
            })}
        </ScrollView>
    )
}

export default ItemList;