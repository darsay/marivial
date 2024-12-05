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
            <div className={cardClass} style={{ width: '18rem', backgroundImage: "url(" + "/background.png" + ")", backgroundSize: 'cover'}}>
                <img src="/thinker.png" className="card-img-top rounded-top-4 p-1" alt="..."></img>
                <div className="card-body bg-light">
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
            <div className={cardClass} style={{ height: '30rem', width: '18rem', backgroundImage: "url(" + "/background.png" + ")" , backgroundSize: 'cover'}}>
                <div className="border border-5 rounded-4 h-100 w-100 d-flex justify-content-center align-items-center" style={{borderColor: "#FFD40F"}}>
                    <p className="" style={{color: "#FFD40F", fontFamily: 'Alex Brush'}}>Marivial</p>
                </div>
            </div>
            </div>
        </ReactCardFlip>
       
    );
}

export default QuestionCard;