var users = {
    1: '安冬然',
    2: '姚梦园',
    3: '胡美芳',
    4: '张凯',
    5: '张珊珊',
    6: '李春花',
    7: '解丽君',
    8: '窦永强',
    9: '张赛赛',
    10: '许洋',
    11: '郝鹏飞',
    12: '程警',
    13: '李琪琪',
    14: '陈鑫宇',
    15: '王春洋',
    16: '赵立强',
    17: '孙志虎',
    18: '温俊刚',
    19: '郭龙飞',
    20: '王丹',
    21: '包永梅',
    22: '赵明',
    23: '裴欣怡',
    24: '张洋洋',
    25: '阙鉴辉',
    26: '白雪'
};

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
        console.log('重置成功');
        this.users = Object.assign({}, users);
    }
};