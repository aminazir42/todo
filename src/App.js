import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isSplashVisible ? <SplashScreen /> : <TodoList />}
    </div>
  );
};

export default App;
