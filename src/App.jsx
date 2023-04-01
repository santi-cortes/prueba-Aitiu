import './App.css'
import FinalPart from './components/form/FinalPart'
import InitalPart from './components/form/InitalPart'
import MidPart from './components/form/MidPart'
import Notification from './components/modal/Notification'
import GuideSteps from './components/steps/GuideSteps'

function App() {

  return (
    <div className="App h-screen grid place-items-center">
      <div className='bg-white h-5/6 w-4/6 card-container' style={{minWidth: '360px'}}>
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-1/6 w-full shadow-xl flex justify-center items-center flex-col z-auto'>
          <h1 className='title-form text-3xl text-center text-white uppercase'>Ingresa tus datos</h1>
        </div>
        <div className='flex items-center justify-center flex-col container-form'>
          <GuideSteps></GuideSteps>
          <Notification></Notification>
        </div>
      </div>
    </div>
  )
}

export default App
