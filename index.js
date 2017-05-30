module.exports = () => {
    const data = {
        users: []
    }

    for (let i = 0; i < 1000; i++) {
        data.users.push({
            id: 1,
            name: `user ${i}`
        });
    }
    return data
}