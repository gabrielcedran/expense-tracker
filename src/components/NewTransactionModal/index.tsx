import { FormEvent, useEffect, useState } from 'react';
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
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    
    const [type, setType] = useState('deposit')

    function handleCreateNewTransction(event: FormEvent) {
        // by default html / js reloads the page when a submit action from a form is executed
        event.preventDefault();
        console.log(title, value, category, type);
    }

    return ( 
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className={"react-modal-content"}>

            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            <Container onSubmit={handleCreateNewTransction}>
                <h2>Cadastrar Transacao</h2>

                <input placeholder='Titulo' value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder='Valor' value={value} onChange={event => setValue(Number(event.target.value))}/>
                
                <TransactionTypeContainer>
                    <RadioBox type='button' 
                        //className={type === 'deposit' ? 'active' : ''} - traditional way 
                        // method leveraging styled components: 
                        isActive={type==='deposit'}
                        activeColor='green'
                        onClick={() => setType('deposit')}>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button' 
                        //className={type === 'withdraw' ? 'active' : ''} 
                        isActive={type==='withdraw'}
                        activeColor='red'
                        onClick={() => setType('withdraw')}>
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input placeholder='Category' value={category} onChange={event => setCategory(event.target.value)}/>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}