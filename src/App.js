import './style.css';
import Result from './Components/Result';
import Summary from './Components/Summary';
function App() {
  return (
    <section className='min-h-screen h-full flex justify-center items-center '>
      <div className='flex flex-col md:flex-row justify-center shadow-2xl rounded-2xl' style={{ fontFamily: "Hanken-Medium" }}>
        <Result />
        <Summary />
      </div>
    </section>
  );
}

export default App;
