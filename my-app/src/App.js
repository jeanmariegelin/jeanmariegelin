import React from 'react';
import './App.css';

function AnnPeye(Props) {
  return (
    <div id = "pay">
     <h3>{Props.subtitle}</h3>
    {Props.mytext}
    </div>
  )
 
}

function App() {
  return (
    
          <div>
          This is my component : 
          <AnnPeye mytext = "Payer comme je veux" subtitle="Je paie tout ce que je veux avec mon smartphone" /> 
          <AnnPeye mytext = "je paie dans le market, a l'ecole, et aux restaurants avec mes amis"/> 
          </div>
  );
}   

export default App;
