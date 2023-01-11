import { React, useState, useEffect, } from 'react';
import { View, StyleSheet } from 'react-native';

import ItemList from '../components/item-list'
import Categories from '../components/categories'

import { API } from '../api/api'

const Aberturas = () => {
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [showItems, setShowItems] = useState(false)

    useEffect(() => { getItems() }, []);

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
            <Categories
                items={items}
                handlePress={handlePress}
            />
            <ItemList
                categories={categories}
                showItems={showItems}
            />
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