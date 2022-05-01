const Coin = ({name, icon, symbol, price}) => {
  return (
    <div className="coin">
        <h1>{name}     </h1>
        <img src={icon} alt={name} />  
        <h3>{symbol} </h3>
        <h3>{price}  </h3>  
    </div>
  )
}

export default Coin