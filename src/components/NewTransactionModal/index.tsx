import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose}: NewTransactionModalProps ) {
    const [type, setType] = useState('deposit')

    return ( 
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className={"react-modal-content"}>

            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            <Container>
                <h2>Cadastrar Transacao</h2>

                <input placeholder='Titulo'/>
                <input type="number" placeholder='Valor'/>
                
                <TransactionTypeContainer>
                    <RadioBox type='button' 
                        //className={type === 'deposit' ? 'active' : ''} - traditional way 
                        // method leveraging styled components: 
                        isActive={type==='deposit'}
                        onClick={() => setType('deposit')}>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button' 
                        //className={type === 'withdraw' ? 'active' : ''} 
                        isActive={type==='withdraw'}
                        onClick={() => setType('withdraw')}>
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input placeholder='Category'/>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}