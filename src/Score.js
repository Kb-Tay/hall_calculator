const Score = ({items}) => {
  const total = items.reduce((acc, curr) => acc + parseInt(curr.points), 0);
  
  return (
    <ul>
      <p className="solid">Your Points: {total}</p>
    </ul>
    
  )
}

export default Score