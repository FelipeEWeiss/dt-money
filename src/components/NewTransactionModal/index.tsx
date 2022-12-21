import * as Dialog from '@radix-ui/react-dialog'; 
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form action=''>
          <input type="text" placeholder='Descrição' required/>
          <input type="number" placeholder='Preço'/>
          <input type="text" placeholder='Categoria'/>

          <TransactionType>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            
            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}