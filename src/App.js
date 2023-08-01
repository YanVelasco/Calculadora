import Input from './components/Input'
import Button from './components/Button'
import {Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setfirstNumber]  = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () =>{
    setCurrentNumber('0')
    setfirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  
  const handleSumNumbers = () =>{

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubNumbers = () =>{

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  const handleDiv = () =>{

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('');
    }
  }

  const handleMult = () =>{

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  }


  const handleEquals = () =>{
    if (firstNumber != '0' && operation != '' && currentNumber != '0') {
        switch (operation) {
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleSubNumbers();
            break
          case '/':
            handleDiv();
            break
          case '*':
            handleMult();
            break
          default:
            break;
        }
      
    }
  }
  

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="."/>
          <Button label="AC"/>
          <Button label="Clear" onClick={handleClear}/>
          <Button label="X"onClick={handleMult}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="/" onClick={handleDiv}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="e" onClick={() => handleAddNumber('e')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber(',')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
