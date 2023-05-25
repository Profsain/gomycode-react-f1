import Introduction from './components/Introduction';
import Button from './components/Button';
import './App.css';

const App = () => {
  const title = <h3>Welcome to GoMyCode</h3>;
  // next button handler
  const handleNext = () => {
    alert('Next button clicked');
  }

  // previous button handler
  const handlePrevious = () => {
    alert('Previous button clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        {title}
        <Introduction username="Profsain" message="I am a React Engineer" />
        <br />
        <div>
          <h2>Home action button</h2>
          <Button 
            bgcolor="yellow" 
            color="black" 
            handleEvent={handleNext}
          >Next</Button>

          <Button bgcolor="#ff3091" handleEvent={handlePrevious}>Previous</Button>

        </div>
      </header>
    </div>
  );
}

export default App;
