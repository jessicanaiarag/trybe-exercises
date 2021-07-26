import Reac from 'react';

class App extends Reac.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButton.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  this.state = {
  clicksBtn: 0,
  clicksBtnTwo: 0,
  clicksBtnThree: 0,
};
}

handleButton() {
  this.setStage(() => ({
    clicksBtn: prevState.clicksBtn + 1,
  }), () => {
    console.log(`Botão 1 ${this.getButton(this.state.clicksBtn)}`);
  });
}

HandleButtonTwo() {
  this.setStage(() => ({
    clicksBtnTwo: prevState.clicksBtnt + 1,
  }), () => {
    console.log(`Botão 2 ${this.getButton(this.state.clicksBtnTwo)}`);
  });
}

handleButtonThree() {
  this.setStage(() => ({
    clicksBtnThree: prevState.clicksBtnThree + 1,
  }), () => {
    console.log(`Botão 3 ${this.getButton(this.state.clicksBtnThree)}`);
  });
}

getButton(num) {
  return num % 2 === 0 ? 'green' : 'white';
}

render() {
  const { clicksBtn, clicksBtnTwo, clicksBtnThree } = this.state;
  return (
    <div>
      <button onClick={this.handleButton} style={{ backgroundColor: this.getButton(clicksBtn) }}
      >Botao | count = {clicksBtn}</button> ;
      <button onClick={this.HandleButtonTwo} style={{ backgroundColor: this.getButton(clicksBtnTwo) }}
      >Botao 2 | count = {this.state.clicksBtnTwo}</button>;
      <button onClick={this.handleButtonThree} style={{ backgroundColor: this.getButton(clicksBtnThree) }}
      >Botao 3 | count = {this.state.clicksBtnThree}</button>;
    </div>
  );
}

export default App;
