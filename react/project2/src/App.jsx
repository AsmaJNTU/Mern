import Navbar from './components/Navbar'

const App = () => {
    const data={
        appname:"hello"
    }
    const logodata="mylogo"
    const test="everyone"
  return (
    <>
    {test}
    <p className='text-yellow-500'>{test}</p>
    <Navbar appdata={data} logo={logodata}/>
    </>
  )
}

export default App