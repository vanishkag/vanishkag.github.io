import { useState, useEffect } from 'react';

const useLoopedTypewriter = (words, typingSpeed, deletingSpeed) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (text === words[currentIndex]) {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, typingSpeed * 2); // Adjust as needed
      } else {
        const charToType = words[currentIndex][text.length];
        timeout = setTimeout(() => {
          setText((prevText) => prevText + charToType);
        }, typingSpeed);
      }
    } else {
      if (text === '') {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setText((prevText) => prevText.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, currentIndex, words, typingSpeed, deletingSpeed]);

  return text;
};

export default useLoopedTypewriter;
