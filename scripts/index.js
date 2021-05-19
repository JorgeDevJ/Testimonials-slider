var bt = document.getElementById('bt_next');
var bt_pr = document.getElementById('bt_prev');
var datos = {
    con: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    nombre: 'John Tarkpor',
    profesion: 'Junior Front-end Developer',

    prev:{
        con: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        nombre: 'Tanya Sinclair',
        profesion: 'UX Engineer'
    }

}

function next(){
    document.getElementById('text').innerHTML = datos.con
    document.getElementById('n').innerHTML = datos.nombre
    document.getElementById('p').innerHTML = datos.profesion
    document.getElementById('img1').src="/img/image-john.jpg";
}
function prev(){
    document.getElementById('text').innerHTML = datos.prev.con
    document.getElementById('n').innerHTML = datos.prev.nombre
    document.getElementById('p').innerHTML = datos.prev.profesion
    document.getElementById('img1').src="/img/image-tanya.jpg";
}
bt.addEventListener('click', next)
bt_pr.addEventListener('click', prev)
