import UserItem from '../user-item/UserItem';

function UsersList({users, killer, lurker}) {
    return !users ? 'Loading...' : (
        <div className="row mt-5 mb-5">
            {users.map(user => <UserItem key={user.id} {...user} killer={killer} lurker={lurker}/>)}
        </div>
    )
}

export default UsersList;