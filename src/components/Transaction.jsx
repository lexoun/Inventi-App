import React from 'react'

const Name = ({ transactionName }) => {
    return (
        <span>{ transactionName }</span>
    )
}

const Amount = ({ amount }) => {
    return (
        <span>{ amount } Kč</span>
    )
}

//var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

const Transaction = ({name, amount}) => {
    return (
        <div class="transaction">
                <Name transactionName={name} /> - <Amount amount={amount} />
        </div>
    )
}

export default Transaction