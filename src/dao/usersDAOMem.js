let users = [];

export const createUser = user => {
    users.push(user)
    return user;
}

export const getAllUsers = () => {
    return users;
}