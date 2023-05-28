import { useState } from 'react';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h2>
        Assessment
      </h2>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(event, tab) => {setValue(tab)}} aria-label="basic tabs example">
          <Tab label="Question One" />
          <Tab label="Question Two" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Question1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Question2/>
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default App;
