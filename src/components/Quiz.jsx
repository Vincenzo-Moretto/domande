import "../assets/css/Quiz.css";
import { Container } from "react-bootstrap";
import { useState } from "react";

import Collapse from "react-bootstrap/Collapse";

const Quiz = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <>
      <Container className="mt-5">
        <h3>1. Cos’è ReactJS? Domanda aperta</h3>
        <p className="giusto">
          React è una libreria JavaScript per costruire interfacce utente caratterizzata dal fatto che è dichiarativa,
          efficiente e flessibile. Ti permette di comporre UI complesse a partire da piccoli ed isolati stralci di
          codice chiamati “componenti”.
        </p>
        <h3>2. ReactJS è un framework, non una libreria. </h3>
        <ul>
          <li>Vero</li>
          <li className="giusto" onClick={() => setOpen(!open)}>
            Falso
          </li>
        </ul>
        <Collapse in={open}>
          <div className="text-success" id="example-collapse-text">
            ReactJS è una libreria JavaScript per la costruzione di interfacce utente, non un framework
          </div>
        </Collapse>
        <h3>3. Il file package.json contiene…</h3>
        <ul>
          <li> Informazioni non essenziali, può essere tranquillamente eliminato</li>
          <li>Solamente il nome e la versione dell’applicazione</li>
          <li className="giusto">
            Molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste dall’applicazione
          </li>
          <li>Il primo componente React caricato all’avvio</li>
        </ul>
        <h3> 4. create-react-app è l’unico modo possibile per creare un’applicazione React.</h3>
        <ul>
          <li>Vero</li>
          <li className="giusto" onClick={() => setOpen1(!open1)}>
            Falso
          </li>
        </ul>

        <Collapse in={open1}>
          <div className="text-success" id="example-collapse-text">
            ` create-react-app` è uno dei modi più popolari e convenienti per creare un'applicazione React, ma non è
            l'unico modo. È possibile creare applicazioni React anche configurando manualmente l'ambiente di sviluppo o
            utilizzando altri strumenti e boilerplate.
          </div>
        </Collapse>
        <h3>5. Qual è il comando da lanciare nel terminale per creare una nuova create-react-app con nome “test”?</h3>
        <ul>
          <li className="giusto">npx create-react-app test</li>
          <li>npm create-react-app test</li>
          <li>npx create-react-app-test</li>
          <li>npx create-new-react-app test</li>
        </ul>
        <h3>6. Cos’è un componente React?</h3>
        <ul>
          <li>Una libreria che è necessario importare dentro l’applicazione</li>
          <li>Una pagina ben specifica all’interno dell’applicazione</li>
          <li className="giusto"> Un blocco di logica/contenuto riutilizzabile all’interno dell’applicazione</li>
          <li>Una landing page per l’applicazione</li>
        </ul>
        <h3>7. Un componente React può venire creato in tre modi: come funzione, classe o interfaccia.</h3>
        <ul>
          <li>Vero</li>
          <li className="giusto" onClick={() => setOpen2(!open2)}>
            Falso
          </li>
        </ul>
        <Collapse in={open2}>
          <div className="text-success" id="example-collapse-text">
            Un componente React può essere creato come funzione o come classe. Inoltre, esistono anche i componenti
            React definiti come "interfacce", che sono una forma di definizione di tipo usata con TypeScript, ma non
            rappresentano un modo separato per creare componenti in React nel senso tradizionale.
          </div>
        </Collapse>
        <h3>
          8. Le props sono frammenti di informazione assegnati all’invocazione di un componente React, utili al fine di
          rendere il componente dinamico e più riutilizzabile.
        </h3>
        <ul>
          <li>Vero</li>
          <li className="giusto" onClick={() => setOpen3(!open3)}>
            Falso
          </li>
        </ul>
        <Collapse in={open3}>
          <div className="text-success" id="example-collapse-text">
            Le props in React sono frammenti di informazione assegnati all'invocazione di un componente React, utili per
            rendere il componente dinamico e più riutilizzabile.
          </div>
        </Collapse>
        <h3>
          9. Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è
          possibile fare il contrario
        </h3>
        <ul>
          <li>Vero</li>
          <li className="giusto" onClick={() => setOpen4(!open4)}>
            Falso
          </li>
        </ul>
        <Collapse in={open4}>
          <div className="text-success" id="example-collapse-text">
            In React, le props vengono passate solamente da un componente genitore a un componente figlio e non il
            contrario.
          </div>
        </Collapse>

        <h3>10. Da dove possono venire recuperate le props all’interno di un componente React creato come classe?</h3>
        <ul>
          <li>Sono proprietà contenute in un oggetto accessibile attraverso i parametri della funzione</li>
          <li className="giusto">
            Possono essere recuperate all’interno dello oggetto ‘this’, dentro un sotto-oggetto chiamato ‘props’
          </li>
          <li>Vengono applicate come proprietà dell’oggetto globale ‘window’</li>
          <li>Vengono applicate come proprietà dell’oggetto ‘document’</li>
        </ul>
      </Container>
    </>
  );
};

export default Quiz;
