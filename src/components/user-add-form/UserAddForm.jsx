function UserAddForm({addUser, users}) {
    
    function submitFormHandler(evt) {
        evt.preventDefault();
        fetch(`https://dummyjson.com/users/${users.length+1}`)
            .then(response => response.json())
            .then(data => data.image)
            .then(image => {
                addUser({
                    id: users.length + 1,
                    firstName: evt.target.firstname.value,
                    lastName: evt.target.lastname.value,
                    visible: true,
                    image: image,
                });
            });
    }
    
    return (
        <form onSubmit={submitFormHandler}>
            <div className="form-row justify-content-center">
                <div className="col-11 col-md-4 mb-3 mb-md-0">
                    <input type="text" className="form-control" name="firstname" placeholder="First name"/>
                </div>
                <div className="col-11 col-md-4 mb-3 mb-md-0">
                    <input type="text" className="form-control" name="lastname" placeholder="Last name"/>
                </div>
                <button type="submit" className="btn btn-primary col-11 col-md-3">Add</button>
            </div>
        </form>
    )
}

export default UserAddForm;
