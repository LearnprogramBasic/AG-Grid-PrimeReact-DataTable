import { useState, useEffect, FC } from 'react';
// import AgGridComponent from './components/ag-grid/AgGridComponent';
import PrimeReactDataTable from './components/prime-react/PrimeReactDataTable';
import EllipsisLinkBadge from './components/prime-react/components/EllipsisLinkBadge/EllipsisLinkBadge';
import './styles/global.scss';
import './index.css';
import AutoCompleteWithTable from './components/prime-react/components/AutoCompleteTable/AutoCompleteTable';

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="toggle-dark-mode" onClick={toggleDarkMode}>
        <i className="fas fa-lightbulb"></i> Toggle Dark Mode
      </button>
      <h1>PrimeReact-passthrough</h1>
      <PrimeReactDataTable />
      <h1>EllipsisLinkBadge</h1>
      <EllipsisLinkBadge 
        href={'https://example.com'}         disabled={false} 
        messageTooltipEllipsis={'Click here for more options'} 
        statusModeBadge={'danger'} 
        // Debe ser uno de los valores permitidos: 'success', 'info', 'warning', 'danger'
      />
      <h1>AutoCompleteWithTable</h1>
      <AutoCompleteWithTable value={''} onChange={function (value: string): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}

export default App;

