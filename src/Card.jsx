import profilePic from './assets/unnamed.jpg'
import React from 'react';
import List from './List';

function Card({todos}) {
    /* Leaf only has event binding */
    return (

        <main>
            {todos.length ? (
                <List
                todos={todos} />
            ): (
                <p>Your List Empty</p>
            )}
        </main>
        

    );
}

export default Card;