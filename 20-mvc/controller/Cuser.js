// model 에서 내보내기 하는거 불러오기
const {getDbUser} = require('../model/User');

exports.getUser = (req, res) => {
    res.render('user', {user: getDbUser})
}