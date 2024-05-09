import { GoBell,GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button
          secondary
          rounded 
          className="mb-5" 
          onClick={handleClick} 
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      
      <div>
        <Button 
         warning
         className="mb-3"
         onMouseLeave={handleClick}>
          <GoDatabase />
          See DEAL 
        </Button>
      </div>
     
      <div>
        <Button 
        primary 
        rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
