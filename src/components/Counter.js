import React, {useState} from 'react'

const sortByFirstName = (users) => {
    return users.sort(function(a, b){
        if(a.firstname < b.firstname) { return -1; }
        if(a.firstname > b.firstname) { return 1; }
        return 0;
    });
}
const ListUsers = ({users}) => {
    const users1 = sortByFirstName(users);
    return (
        <div>
            <div className="user-count">Users: {users.length}</div>
            <ul className="user-list">
            
            {users1.map((user, i) => {
                return (
                    <div key={i}>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    </div>
                )
            })}
            </ul>
        </div>
    )
}
export const Counter = (props) =>  {
    const [counterState1, setCounter1] = useState(0);
    return (
        <div className="counnter">
            <button id="increment" onClick={() => setCounter1(prev => prev + 1)}>+</button>
            <button id="decrement" onClick={() => setCounter1(prev => prev - 1)}>-</button>
            <p id='value'>{counterState1}</p>
            <p id='value'>Value of coo is {String(props.coo)}</p>

            <ListUsers
            users={[{firstName: 'Ada', lastName: 'Lovelace'}, {firstName: 'Donald', lastName:'Knuth'}]} />
            
        </div>
    )
}
