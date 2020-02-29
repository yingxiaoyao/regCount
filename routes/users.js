const fs = require('fs');
var users = JSON.parse(fs.readFileSync(__dirname + '/person.json', 'utf8'));

module.exports = {
    users: Object.assign({}, users),
    get() {
        return this.users;
    },
    del(id) {
        if (this.users[id]) {
            delete this.users[id];
        }
    },
    reset() {
        this.users = Object.assign({}, users);
    },
    add(name) {
        var keys = Object.keys(users);
        var key = parseInt(keys[keys.length - 1]) + 1;
        users[key] = name;
        fs.writeFile(__dirname + '/person.json', JSON.stringify(users), function(err, data) {
            console.log(err, data);
        });
        this.users[key] = name;
    }
};
