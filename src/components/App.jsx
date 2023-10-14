import React from 'react';
import Counter from './Counter/Counter';
import DropDown from './DropDown/DropDown';
import ColorPicker from './ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <>
      <h1>Стан компонента</h1>

      {/* <Counter /> */}

      <ColorPicker options={colorPickerOptions} />

      {/* <DropDown /> */}
    </>
  );
};

export default App;
