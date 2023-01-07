const Score = ({items}) => {
  const total = items.reduce((acc, curr) => acc + parseFloat(curr.points), 0);
  const round = Math.round(total)
  return (
    <ul>
      <p className="solid">Your Points: {round}</p>
    </ul>
    
  )
}

export default Score