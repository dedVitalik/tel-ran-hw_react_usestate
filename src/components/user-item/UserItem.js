function UserItem({id, firstName, lastName, image, visible, killer, lurker}) {
    
    const doubleClickHandler = (evt) => {
        if (evt.target.tagName !== 'a') {
            lurker(id);
        }
    }
    
    const hiddenAvatarUrl = 'https://st2.depositphotos.com/6809168/11747/v/450/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg';
    
    return (
        <div className="col-12 col-md-4 mb-3">
            <div onDoubleClick={doubleClickHandler} className="card">
                <img src={visible ? image : hiddenAvatarUrl} className="card-img-top" alt={firstName + ' ' + lastName} />
                <div className="card-body">
                    <h5 className="card-title">{visible ? firstName : '*'.repeat(firstName.length)}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{visible ? lastName : '*'.repeat(lastName.length)}</h6>
                    <p>id = {id}</p>
                    <a onClick={(evt) => {
                        evt.preventDefault();
                        killer(id);
                    }} href="#" className="btn btn-primary">Удалить</a>
                </div>
            </div>
        </div>
    );
}

export default UserItem;
