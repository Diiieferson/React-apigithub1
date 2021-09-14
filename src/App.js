import './App.css';
import axios from 'axios'
import { useState } from 'react'
import { map } from 'async';

function App() {
const [usuario, setUsuario] = useState('')
const [erro, setErro] = useState(false)
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => { 
      
    console.log(response.data)
    const picture = response.data
      const urlPicture = ''
      localStorage.setItem('foto',map((avatar_url) => {
        urlPicture.push(picture.avatar_url)
      }))

      }).catch(err => {
        setErro(true)
      })

  return (
    <>
      <div className="App">
        <input className="input"  placeholder="Usuário" value={usuario} type="usuario" onChange={e => setUsuario(e.target.value)}></input>
        <button type="button"  >Pesquisar</button>
      </div>
      {erro ? <h1>Ocorreu um erro</h1> : 'sem erro'}
    </>
  );
}

export default App;
