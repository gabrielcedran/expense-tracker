import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void; // defines the property as a function
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Expense Tracker" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova Transacao</button>
            </Content>
        </Container>
    )
}