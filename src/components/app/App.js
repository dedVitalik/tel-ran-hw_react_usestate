import UserAddForm from '../user-add-form/UserAddForm';
import UsersList from '../users-list/UsersList';
import React, {useState, useEffect} from 'react';
import s from './style.module.css';

function App() {
    const [users, setUsers] = useState(null);
    
    function getUsers() {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => data.users.slice(0, 5))
            .then((users) => users.map(({id, firstName, lastName, image}) =>
                ({id, firstName, lastName, image, visible: true})))
            .then((users) => setUsers(users));
    }
    
    useEffect(() => {
        getUsers();
    }, []);
    
    const killer = (id) => {
        const newUsers = users.filter(user => user.id !== id).map((user, ind) => {
            user.id = ind + 1;
            return user
        });
        setUsers(newUsers);
    }
    
    const lurker = (id) => {
        const newUsers = users.map(user => {
            user.visible = user.id === id ? !user.visible : user.visible;
            return user;
        })
        setUsers(newUsers);
    }
    
    const addUser = (user) => {
        setUsers([...users, user]);
    }
    
    return (
        <div className={s.container + ' container'}>
            <UserAddForm setUsers={setUsers} users={users} addUser={addUser}/>
            <UsersList users={users} lurker={lurker} killer={killer}/>
        </div>
    );
}

export default App;
