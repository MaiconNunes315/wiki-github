import React from 'react'
import { InputContainer } from './styles'

export default function Input({value, onChange}) {
  return (
    <InputContainer >
          <input value={value} onChange={onChange} placeholder="Digite o usuário/nome do repositório"/>
    </InputContainer>
  )
}
