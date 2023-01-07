import Header from './Header';
import Content from './Content';
import CcaForm from './CcaForm';
import Score from './Score';
import SearchBar from './SearchBar';
import DPForm from './Forms/DPForm';
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import SocialForm from './Forms/SocialForm';




function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ccalist')) || []);
  //how to store points as int from start so do not need to parseInt in score component 
  const [newItem, setNewItem] = useState({item: "", points: ''});

  //state to control the CCA category
  const [cat, setCat] = useState('');

  useEffect(() => {
    localStorage.setItem('ccalist', JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const name = item.item;
    const points = item.points
    const myNewItem = { id, name, points };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  //updates item state 
  const handleChange = (event) => {
    setNewItem({...newItem, [event.target.name]: event.target.value });
  };

  return (
    <ChakraProvider>
      <Container maxW={1000}>
      <Header title = "Points Calculator"/>
      <SearchBar 
        cat = {cat}
        setCat = {setCat} />
      <Container>
        { cat == 'dp' ? <DPForm newItem = {newItem} setNewItem = {setNewItem} handleSubmit={handleSubmit} handleChange={handleChange} addItem={addItem}/> 
                      : cat == 'ss'
                      ? <SocialForm newItem = {newItem} setNewItem = {setNewItem} addItem={addItem}/>
                      : <p>Select Category</p>} 

      </Container>
      {/* <CcaForm
        newItem = {newItem}
        setNewItem = {setNewItem} 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cat = {cat}/>  */}
      <Score items = {items}/>
      <Content 
        items = {items}
        setCat = {setCat}
        handleDelete = {handleDelete}
      /> 
    </Container>
    </ChakraProvider>
    
  );
}

export default App;
