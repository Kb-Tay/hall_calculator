const Score = ({items}) => {
  const total = items.reduce((acc, curr) => acc + parseInt(curr.points), 0);
  
  return (
    <ul>
      <p className="solid">Total Points: {total}</p>
    </ul>
    
  )
}

export default Score