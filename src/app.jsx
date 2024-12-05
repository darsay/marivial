import Header from './components/header.jsx'
import QuestionCard from './components/question-card.jsx'
import ThemeSelector from './components/theme-selector.jsx'
import {themes, defaultQuestion} from './constants.js'
import { useState } from 'react'

import './app.css'

function App() {
  const [theme, setTheme] = useState(0);
  const [themeDisplay, setThemeDisplay] = useState(themes[0]);
  const [question, setQuestion] = useState(defaultQuestion);
  const [questionTheme, setQuestionTheme] = useState();
  const [isFlipping, setIsFlipping] = useState(true);
  const [isInited, setIsInited] = useState(false);

  function handleThemeChange(newTheme) {
    setThemeDisplay(themes[newTheme]);
    if(newTheme === 0) {
      newTheme = Math.floor(Math.random() * (themes.length-1) + 1);
    }
    setTheme(newTheme);
  }

  function generateNewQuestion() {
    if(!isInited) setIsInited(true);

    setIsFlipping(true);

    let currentTheme = theme;

    if(themeDisplay.questions === undefined) {
      currentTheme = Math.floor(Math.random() * (themes.length-1) + 1);
    }

    const question = themes[currentTheme].questions[Math.floor(Math.random() * themes[currentTheme].questions.length)];

    setTimeout(() => {
      setQuestion(question);
      setTheme(currentTheme);
      setQuestionTheme(themes[currentTheme].theme.toUpperCase());
      setIsFlipping(false);
    }, 600);
  }

  return (
    <>  
      <div className='d-flex flex-column align-items-center vh-100 gap-5'>
        <Header/>
        <ThemeSelector themeDisplay={themeDisplay} setTheme={handleThemeChange} setQuestion={generateNewQuestion}/>

        <QuestionCard isFlipping={isFlipping} question={question} questionTheme={questionTheme}/>
      </div>
    </>
  )
}

export default App
