const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain')//controller와 연결해줌

// 기본 요청: localhost:8000
router.get('/', controller.index); //controller에 있는 index와 연결됨

module.exports = router;