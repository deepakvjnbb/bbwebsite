import Footerbb from './Footerbb';
// import Whatwedo from './Whatwedo';
import Main from './Main';

import React, { useRef, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';



const App: React.FC = () => {
  
  return (
    <div>

<Router>
      <div>
        <Routes>
          <Route path="/" element={<><Main /><Footerbb /></>} />
          {/* <Route path="/Whatwedo" element={<div><Main /><Whatwedo /><Footerbb /></div>} /> */}
        </Routes>
      </div>
    </Router>

    </div>
  );
};

export default App;