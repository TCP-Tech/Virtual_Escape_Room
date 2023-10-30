import React, { useState, useEffect } from 'react';

const StoryPanel5 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "With each passing moment, the mansion seemed to change, its rooms shifting and distorting as though possessed by vengeful spirits. Whispers echoed through the halls, and unsettling apparitions materialized. You are now trapped, caught in a sinister web of paranormal occurrences.";

  // const panelText = "You find someone or something is following you so you enter into a room which appears to be the basement of the mansion and to escape , you realized you need to complete few challenges , drawing them deeper into the mansion's haunted history. Solving these mysteries would ultimately unravel the dark secrets that bound the mansion and release you from its grip.";
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the typing speed as needed (e.g., 50 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);

  return (
    <>
    STORY
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''} storytxt`}>{text}</div>
    </>
  );
}

export default StoryPanel5;
