import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';


function QuestionCard({question, questionTheme, isFlipping}) {

    useEffect(() => {
        const collapseElement = document.getElementById('collapseExample');
        if (collapseElement && collapseElement.classList.contains('show')) {
            collapseElement.classList.remove('show');
        }
    }, [question]);

    const cardClass = `card p-1 rounded-4 ${isFlipping ? 'flip' : ''}`;
    return (
        <ReactCardFlip isFlipped={isFlipping} flipDirection='horizontal'>
            <div className={cardClass} style={{ width: '18rem', backgroundColor: 'pink' }}>
                <img src="/src/assets/thinker.png" className="card-img-top rounded-top-4 p-1" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{questionTheme}</h5>
                    <p className="card-text">{`${question.number}. `}{question.question}</p>
                    <button className="btn btn-primary" style={{ backgroundColor: 'purple', color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Revelar Respuesta
                    </button>

                    <div className="collapse mt-3" id="collapseExample">
                        <div className="card card-body">
                            {question.answer}
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className={cardClass} style={{ height: '30rem', width: '18rem', backgroundColor: 'pink' }}>
                <img src="/src/assets/thinker.png" className="h-100" alt="..."></img>
            </div>
            </div>
        </ReactCardFlip>
       
    );
}

export default QuestionCard;