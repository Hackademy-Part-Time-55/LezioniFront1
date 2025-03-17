class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getFirstname() {
        return this.firstname
    }
    setFirstname(firstname) {
        this.firstname = firstname;
    }
}

export default User;