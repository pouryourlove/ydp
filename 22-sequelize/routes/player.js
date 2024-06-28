//선수와 관련된 라우터를 정의하는 파일

//기본 요청 경로 
//localhost:PORT/players

const express = require('express');
const router = express.Router();
const controller = require('../controller/Cplayer'); //controller 불러오기

router.get('/', controller.getPlayers); //이미 루트가 players에 들어와있으므로 /만 써야 한다.
router.get('/:player_id', controller.getPlayer)
router.post('/', controller.postPlayer);
router.patch('/:player_id/team', controller.patchPlayer)
router.delete('/:player_id',controller.deletePlayer)

module.exports = router;