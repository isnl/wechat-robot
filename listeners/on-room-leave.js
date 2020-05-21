/*
 * @Author: Peanut
 * @Description:  离开群聊
 * @Date: 2020-05-21 22:36:41
 * @Last Modified by: Peanut
 * @Last Modified time: 2020-05-21 22:40:07
 */
async function onRoomLeave(room, leaverList) {
  const nameList = leaverList.map(c => c.name()).join(",");
  console.log(`Room ${room.topic()} lost member ${nameList}`);
}

module.exports = onRoomLeave;
