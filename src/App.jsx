import './App.css'
import HomePage from './pages/HomePage'
import {useState, useEffect} from 'react'
import LoadingScreen from './components/LoadingScreen'
function App() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])



  return (
    <>  
   
       {loading ? <LoadingScreen /> : <HomePage />}
      
    </>
  )
}



export default App
