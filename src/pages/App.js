/* eslint-disable no-unused-expressions */

import { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import ItemsRepo from "../components/itemsRepo";
import Modal from "../components/modal";
import logo from "../img/github-logo.png"
import { api } from "../services/api";
import { Container } from "./styles";


function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);
  const [renderModal, setRenderModal] = useState(false)
  const [userGithub, setUserGithub] = useState('')
  const [isDisabled,setIsDisabled ] = useState(true)
  const [messageErro, setMessageError] = useState("")

  const handleSearchRepo = async () => {
    
    if (currentRepo.length === 0) {

      setRenderModal(true)      
      
    } else {
      // const { data } = await 
    const data = await api.get(`repos/${currentRepo}`)
 
    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo("")
      } 
    }
      
    }

  }
  
  const resModalButton = (e) => {

    //setResModal(e.target.value)
    if (e.target.value === "Sim") {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
      setRenderModal(false)
    }

      
    
  }

 

  if (userGithub.length > 3) {
    setTimeout(() => {

    api.get(`users/${userGithub}/repos`)
      .then(res => {
    
        setRepos(res.data)

        setMessageError("Aguarde...")

       
          setRenderModal(false)
        
        
      })
      .catch((error) => {

        const errorCode = error.message.slice(-3)

        if (parseInt(errorCode) === 403) {
        
          
            setMessageError("Tempo de busca excedido, volte mais tarde!")
          
          

        } else if (parseInt(errorCode) === 404) {

         
            setMessageError("Usuário não encontrado")
          
          

        } else {

          setMessageError(" ")

        }

      })
    
    }, 2000);
  }

  

  

  
 console.log(messageErro)
  return (
    <Container>
      <img src={logo} width={50} height={50} alt="github" />
      <Input value={currentRepo} onChange={(e)=>{setCurrentRepo(e.target.value)}} />
      <Button onClick={handleSearchRepo}/>
      {repos.map((repo,index) =><ItemsRepo repo={repo} key={index}/>)}
      
     
      {renderModal ? <Modal renderSpan={messageErro} resError={messageErro} disabled={isDisabled} onClick={resModalButton} onChange={((e)=>setUserGithub(e.target.value))} /> : null}
    
    </Container>
  );
}

export default App;
