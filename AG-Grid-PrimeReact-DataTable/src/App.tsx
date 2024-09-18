import { useState, useEffect, FC } from 'react';
// import AgGridComponent from './components/ag-grid/AgGridComponent';
import PrimeReactDataTable from './components/prime-react/PrimeReactDataTable';
// import EllipsisLinkBadge from './components/prime-react/components/EllipsisLinkBadge/EllipsisLinkBadge';
import './styles/global.scss';
import AutoCompleteWithTable from './components/AutoCompleteWithTable/AutoCompleteWithTable';
// import './index.css';
// import CustomAutoComplete from './components/prime-react/CellRenderers/CustomAutoComplete';
// import Grid from './components/Grid';
// import AutoCompleteWithTable from './components/AutoCompleteWithTable/AutoCompleteWithTable';
// import AutoCompleteWithTable from './components/prime-react/components/AutoCompleteTable/AutoCompleteTable';
// import ProductAutoComplete from './components/prime-react/components/AutoCompleteTable/AutoCompleteTable';
// import CustomSplitButton from './components/prime-react/components/SplitButton/SplitButton';
// import {CustomCalendar} from './components/prime-react/components/Calendar/calendar';


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
      <h1>PrimeReact</h1>
      <PrimeReactDataTable />
      <h1>CustomAutoComplete</h1>
      <AutoCompleteWithTable />
      {/* <Grid /> */}

    </div>
  );
}

export default App;

