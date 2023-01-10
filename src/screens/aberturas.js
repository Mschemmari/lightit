import { React, useState, useEffect, } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { API } from '../api/api'

const Aberturas = () => {
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [showItems, setShowItems] = useState(false)
    useEffect(() => { getItems(); }, []);

    const getItems = async () => {
        const data = await API.getAberturas()
        const items = [...data].map(items => items)
        setItems(items)
    }
    const handlePress = (category) => {
        setShowItems(true)
        const cat = items.find(i => i.name === category)
        setCategories(cat.items)
    }

    return (

        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return <Button onPress={() => handlePress(item.name)} title={item.name} />
                }}
                key={(_, i) => i}
            />
            <ScrollView >
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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },

});
export default Aberturas