import React,{useState} from 'react'
import {View , Text, TextInput} from 'react-native'

const Search = () =>{
    const [searchQuery,setSearchQuery] = useState('')

    const filterData = () => {
    return DATA.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return(
    <>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 16 }}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search"/>
    </>
    )
}
export default Search