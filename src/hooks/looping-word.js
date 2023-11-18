import { useState, useEffect } from 'react';

const useLoopedTypewriterWithPauseAndDelete = (words, typingSpeed, pauseTime, deletingSpeed) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    const wordToType = words[currentIndex];
    const isFullyTyped = text === wordToType;

    if (isTyping) {
      if (isFullyTyped) {
        timeout = setTimeout(() => {
          setIsTyping(false);
          timeout = setTimeout(() => {
            setIsTyping(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            setText(''); // Clear the text for the next word
          }, deletingSpeed);
        }, pauseTime);
      } else {
        const charToType = wordToType[text.length];
        timeout = setTimeout(() => {
          setText((prevText) => prevText + charToType);
        }, typingSpeed);
      }
    } else {
      if (text === '') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        timeout = setTimeout(() => {
          setIsTyping(true); // Start typing the next word
        }, pauseTime);
      } else {
        timeout = setTimeout(() => {
          setText((prevText) => prevText.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, currentIndex, words, typingSpeed, pauseTime, deletingSpeed, isTyping]);

  return text;
};

export default useLoopedTypewriterWithPauseAndDelete;
