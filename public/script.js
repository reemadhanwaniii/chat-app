var socket = io();

let btn = document.getElementById('btn');
let newmsg = document.getElementById('newmsg');
let msglist = document.getElementById('msglist');


btn.onclick = function exec() {
    socket.emit('msg_send',{
        msg : newmsg.value
    });
}


socket.on("msg_rcvd",(data)=>{
    const list = document.createElement('li');
    list.innerText = data;
    msglist.appendChild(list);
});




                                                                        
