import './App.css';
import { useEffect, useState } from 'react'
import Axios from 'axios'
import Coin from './components/Coin'

function App() {
  const [coins, setCoins] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response) => {
      setCoins(response.data.coins)
    })
  }, [])

  const filteredQuery = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(query.toLowerCase());
  })

  return (
    <div className="App">

      <div className="cryptoHeader">
        <input type="text" placeholder="Bitcoin, Ethereum, Solana, Cardano..." 
        onChange={(event) => setQuery(event.target.value)} />
      </div>

      <div className="cryptoDisplay">

        {filteredQuery.map((coin) => {
          return (
            <Coin key={coin.id} name={coin.name} icon={coin.icon} symbol={coin.symbol} price={coin.price.toFixed(2)} />
          )
        })}

      </div>
    </div>
  );
}

export default App;
