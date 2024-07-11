const App = () => {

  const name = 'Naim'
  const x = 20
  const y = 30
  const names = ['Brand', 'Mary', 'Joe', 'Sara']
  const loggedIn = true
  const style = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={style}>Hello {name}</p>
      <p>The sum of {x} and {y} is { x + y }</p>
      <ul>
        { names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </>
  )
}

export default App