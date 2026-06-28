const worksPerRoom = 10;
let room = 0;

fetch("captions.json")
.then(res => res.json())
.then(data => {

    window.works = data;
    render();

});

function render(){

    gallery.innerHTML = "";

    roomTitle.textContent = `ROOM ${room + 1}`;

    const start = room * worksPerRoom;
    const end = start + worksPerRoom;

    works.slice(start,end).forEach((work,index)=>{

        const number = String(start+index+1).padStart(2,"0");

        const div = document.createElement("div");
        div.className = "art";

        div.innerHTML = `
            <img src="works/work${number}.jpg">
        `;

        div.onclick = ()=>{

            modal.style.display = "flex";

            modalImage.src =
                `works/work${number}.jpg`;

            modalTitle.textContent =
                work.title;

            modalCaption.textContent =
                work.caption;
        }

        gallery.appendChild(div);

    });
}

next.onclick = ()=>{

    if(room < 4){

        room++;
        render();

    }
}

prev.onclick = ()=>{

    if(room > 0){

        room--;
        render();

    }
}

close.onclick = ()=>{

    modal.style.display = "none";

}