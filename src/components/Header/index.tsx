import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionDialog } from '../NewTransactionDialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          {/** Pop-up window fora de todas as divs, como se fosse algo a parte da aplicação */}
          <NewTransactionDialog />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
