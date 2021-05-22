import './App.css';
import { useEffect, useState } from 'react';

import Header from './Componets/header/Header';
import MainContent from './Componets/mainContent/mainContent';

const goodsList = [
  {
    name: 'Кроссовки 1',
    price: '999 рублей',
    brand: 'Adidas'
  },
  {
    name: 'Кроссовки 2',
    price: '1999 рублей',
    brand: 'Nike'
  },
  {
    name: 'Кроссовки 3',
    price: '1599 рублей',
    brand: 'Reebok'
  },
  {
    name: 'Кроссовки 4',
    price: '1299 рублей',
    brand: 'New Balance'
  },
  {
    name: 'Кроссовки 5',
    price: '999 рублей',
    brand: 'Adidas'
  },
  {
    name: 'Кроссовки 6',
    price: '1399 рублей',
    brand: 'Puma'
  },
]

function App() {

  const [ inputValue, setInputValue ] = useState('');
  const [ goods, setGoods ] = useState([]);
  const onSearchItems = (e) => {
    const { value } = e.target; 
    setInputValue(value);

    const newItems = goodsList.filter(( { name }) => name.toLowerCase().includes(value.toLowerCase()))
  };

  useEffect(() => {
    
    setTimeout(() => {
      setGoods(goodsList);
    }, 3000);
  }, []);

  return (
        <div className="App">
          <Header
            inputValue={inputValue}
            onSearchItems={onSearchItems}
            />
            <MainContent goods={goods}/>
            {goods.length === 0 && <div className="loader">loader</div>}
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>

    
  );
}

export default App;
