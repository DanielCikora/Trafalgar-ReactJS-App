import { useState, useEffect } from 'react';
function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div>
      <label htmlFor="dark-mode-toggle">Dark Mode</label>
      <input
        id="dark-mode-toggle"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}
export default ModeSwitch;
