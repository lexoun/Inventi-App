import React from 'react'
import Transaction from './Transaction'




const Transactions = () => {
    const transactionData = [ 
        {name: 'McDonalds', amount: '100'}, 
        {name: 'KFC', amount: '502'}, 
        {name: 'Bombay Express', amount: '391'}, 
        {name: 'Burger King', amount: '8502'}, 
        {name: 'Chinese Vegan', amount: '4801'}, 
        {name: 'Something Delicious', amount: '503'}, 
        {name: 'Delmart', amount: ''}, 
        {name: 'Lidl', amount: '382'}, 
        {name: 'The Pub', amount: '3810'}, 
        {name: 'I dunno', amount: '2810'}, 
        {name: 'Bombay Express', amount: '130'},
        {name: 'McDonalds', amount: '100'}, 
        {name: 'KFC', amount: '502'}, 
        {name: 'Bombay Express', amount: '391'}, 
        {name: 'Burger King', amount: '8502'}, 
        {name: 'Chinese Vegan', amount: '4801'}, 
        {name: 'Something Delicious', amount: '503'}, 
        {name: 'Delmart', amount: ''}, 
        {name: 'Lidl', amount: '382'}, 
        {name: 'The Pub', amount: '3810'}, 
        {name: 'I dunno', amount: '2810'}, 
        {name: 'Bombay Express', amount: '130'}
    ];

    return (
        <div>
            {transactionData.map(transaction => (
                <Transaction name={transaction.name} amount={transaction.amount}/>
            ))}
        </div>
    )
}

export default Transactions
