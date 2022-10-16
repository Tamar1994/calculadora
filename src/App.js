import { Container, Content, Row } from './styles'
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [habDigito, setHabDigito] = useState(0);
  const [memorizedNumber, setMemorizedNumber] = useState(0);
  const [memorizedAction, setMemorizedAcion] = useState(0);

  const handleClearInput = () => {
      setCurrentNumber(() => '0');
      setMemorizedAcion(() => 0);
  }

  const handleAddNumber = (number) => {

      if(currentNumber === '0' || habDigito===1){
        setCurrentNumber(() => `${number}`)
        setHabDigito(() => 0);
      } else {
        setCurrentNumber(prev => `${prev}${number}`)
        setHabDigito(() => 0);
      }      
  }

  const handleOperacao = (valor, operador) => {
    
    if(memorizedAction===0){
      // armazenar Operador

      setMemorizedNumber(() => Number(valor));
      setMemorizedAcion(() => operador);
      setHabDigito(() => 1);

    } else if(memorizedAction===1){

      let resultadoSoma = memorizedNumber + Number(valor);
      setMemorizedNumber(() => resultadoSoma);
      setCurrentNumber(() => String(resultadoSoma));
      setMemorizedAcion(() => operador);
      setHabDigito(() => 1);

    } else if(memorizedAction===2){

      let resultadoSubtracao = memorizedNumber - Number(valor);
      setMemorizedNumber(() => resultadoSubtracao);
      setCurrentNumber(() => String(resultadoSubtracao));
      setMemorizedAcion(() => operador);
      setHabDigito(() => 1);

    } else if(memorizedAction===3){

      let resultadoMultiplicacao = memorizedNumber * Number(valor);
      setMemorizedNumber(() => resultadoMultiplicacao);
      setCurrentNumber(() => String(resultadoMultiplicacao));
      setMemorizedAcion(() => operador);
      setHabDigito(() => 1);

    } else if(memorizedAction===4){
      
      let resultadoDivisao = memorizedNumber / Number(valor);
      setMemorizedNumber(() => resultadoDivisao);
      setCurrentNumber(() => String(resultadoDivisao));
      setMemorizedAcion(() => operador);
      setHabDigito(() => 1);

    }

  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/> 
        <Row>
          <Button label='0' onclick={() => handleAddNumber('0')}/>
          <Button label='C' onclick={() => handleClearInput()}/>
          <Button label='X' onclick={() => handleOperacao(currentNumber, 3)}/>
          <Button label='/' onclick={() => handleOperacao(currentNumber, 4)}/>
        </Row>
        <Row>
          <Button label='7' onclick={() => handleAddNumber('7')}/>
          <Button label='8' onclick={() => handleAddNumber('8')}/>
          <Button label='9' onclick={() => handleAddNumber('9')}/>
          <Button label='+' onclick={() => handleOperacao(currentNumber, 1)}/>
        </Row>
        <Row>
          <Button label='4' onclick={() => handleAddNumber('4')}/>
          <Button label='5' onclick={() => handleAddNumber('5')}/>
          <Button label='6' onclick={() => handleAddNumber('6')}/>
          <Button label='-' onclick={() => handleOperacao(currentNumber, 2)}/>
        </Row>
        <Row>
          <Button label='1' onclick={() => handleAddNumber('1')}/>
          <Button label='2' onclick={() => handleAddNumber('2')}/>
          <Button label='3' onclick={() => handleAddNumber('3')}/>
          <Button label='=' onclick={() => handleOperacao(currentNumber, 0)}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
