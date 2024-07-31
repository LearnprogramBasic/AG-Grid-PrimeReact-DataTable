import { useState, useEffect, FC } from 'react';
import AgGridComponent from './components/ag-grid/AgGridComponent';
import PrimeReactDataTable from './components/prime-react/PrimeReactDataTable';
import EllipsisLinkBadge from './components/prime-react/components/EllipsisLinkBadge/EllipsisLinkBadge';
import './styles/global.scss';
import './index.css';

import ProductTable from './components/prime-react/components/ProductSelector/ProductTable';

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
      <h1>AG Grid</h1>
      <AgGridComponent />
      <h1>PrimeReact</h1>
      <PrimeReactDataTable />
      <h1>EllipsisLinkBadge</h1>
      <EllipsisLinkBadge 
        href={'https://example.com'} 
        disabled={false} 
        messageTooltipEllipsis={'Click here for more options'} 
        statusModeBadge={'danger'} 
        // Debe ser uno de los valores permitidos: 'success', 'info', 'warning', 'danger'
      />
      <h1>AutoComplete</h1>
      <ProductTable />
    </div>
  );
}

export default App;
