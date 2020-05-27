import React, { useEffect, useState } from 'react';
import Pages from './pages/pages'

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=> {
    //api call to gitconnect
    fetch('https://gitconnected.com/v1/portfolio/vishalsundar1').then(res => res.json())
    .then(user => {
      setUser(user);
    });
}, []);

if (!user) {
  return <div />;
}

return <Pages user={user} />;
}

export default App;
