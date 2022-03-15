

function lineThrough ( ) {
let lineThrough = document.querySelector('#arguments li');
lineThrough.style.textDecoraction =  "line-through";
}
lineThrough()



function setImage(imageId, imgUrl){
let imageId = document.querySelector(imageId);
imageId.source = imgUrl;
imageId.height = "300";
}
// ( id name ,  source  )
setImage("#image-1", "https://cdn.mos.cms.futurecdn.net/3tnBvrq3tECAKK7gWMAYTF-1024-80.jpg.webp")
setImage("#image-2", "https://i5.walmartimages.com/asr/fec919f3-f490-465f-a8ba-00da7f12cda4_1.5e417244f761302d1a829cbaf23bcb25.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF")
setImage("#image-2","https://m.media-amazon.com/images/I/61OIdq73gNL._AC_SL1200_.jpg ")


function removeList ()  {
    let deleteIsh = document.querySelector('li');
// for (let i = 0; i<2; i++)
deleteIsh.remove();
// deleteIsh= document.querySelector('li');
}


removeList();
removeList();

function changeSize (id, size) {
let element = document.querySelector(id);
element.style.fontSize = size;

}

changeSize('#heading', '20px');



function appendDom(domElement) {
let listItem = document.querySelector('ul');
listItem.appendChild(domElement);

}
 let newElement = document.createElement('img');
 newElement.src = " https://m.media-amazon.com/images/I/61OIdq73gNL._AC_SL1200_.jpg ";
 newElement.height = '300';
 appendDom(newElement);



function makeInvisible(element){
element.className= "invisible";
}



let heading= document.querySelector('h1');
makeInvisible(heading);


function creatListItem (text) {
let listItem= document.createElement('li');
listItem.innerText = text;
return listItem;
}

let newListItem = creatListItem('Hello squirrel');
appendDom(newListItem)




function newHeaderSizeAndText (size, text){
let newHeader = document.createElement(`h${size}`)
newHeader.innerText = text;
return newHeader;
}

let newHeader = newHeaderSizeAndText('1' , 'Hello Mr. Universe')

appendDom(newHeader);



