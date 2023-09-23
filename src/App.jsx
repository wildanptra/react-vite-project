/* eslint-disable react/prop-types */
import Header from './components/Header'
import ListStudent from './components/ListStudent'
import LikesButton from './components/LikesButton'
import CounterButton from './components/CounterButton'

const styleMargin = {
  margin: '50px'
}

function App() {
  return (
    <div style={styleMargin}>
      <Header author="Wildan" />
      <ListStudent />
      <LikesButton />
      <CounterButton />
    </div>
  );
}

export default App
