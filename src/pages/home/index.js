import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory()
  const [usuario, setUsuario] = useState('')


  function handlePesquisa (){
    
    axios.get(`https://api.github.com/users/${usuario}`).then(response => {
      const avatar =  response.data.avatar_url
      localStorage.setItem('avatar', avatar)
      history.push('/Fotos')
      console.log(avatar)
    })
  }

  return (
    <>
        <input className="input"  placeholder="Usuário" value={usuario} type="usuario" onChange={e => setUsuario(e.target.value)}></input>
        <button type="button" onClick={ handlePesquisa } >Pesquisar</button>
    </>
  );
}
export default App;