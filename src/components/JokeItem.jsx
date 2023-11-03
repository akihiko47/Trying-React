import React from 'react'

function JokeItem(props) {
    return (
        <div className='joke'>
            <div className='joke__content'>
                <div>
                    {props.joke.body}
                </div>
            </div>
            <div className="joke__btns">
                <button type='button' className='joke__btns__like'>Like!</button>
            </div>
        </div>
    )
}

export default JokeItem