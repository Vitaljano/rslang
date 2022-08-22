import { useState } from 'react';
import Card from './Card';
function MainScreen() {
  const [isGameStart] = useState(false);
  return <>{isGameStart || <Card />}</>;
}

export default MainScreen;
