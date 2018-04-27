console.log('Loaded!');
/*code for animating image to right
var img=document.getElementById('modi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function () {
    var interval=setInterval(moveRight,100);
};

//code for button click and update count
var c=0;
var but=document.getElementById('counter');


but.onclick = function () {
  c=c+1;
  var span = document.getElementById('count');
  span.innerHTML = c.toString();
};

var counter=0;
var but=document.getElementById('counter');
but.onclick = function () {
    //create a response
    var request = new XMLHttpRequest();
    //capture response and store in variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE ) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //make the request
    request.open('GET','http://akhildevmj51.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name
var nameinput = document.getElementById('name');
var name = nameinput.value;
var sub = document.getElementById('subm');

sub.onclick = function () {
    //make a request to server and send name
    
    //capture listof name and render as a list
    var names=['name1','name2','name3','name4'];
    var list ='';
    for(var i=0; i < names.length;i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};*/
//--------------------------------------------------------------------

var but=document.getElementById('subm');
but.onclick = function () {
    //create a response
    var request = new XMLHttpRequest();
    //capture response and store in variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE ) {
            if (request.status === 200) {
                var names=request.responseText;
                names= JSON.parse(names);
                var list ='';
                    for(var i=0 ; i < names.length ; i++) {
                        list += '<li>' + names[i] + '</li>';
                    }
                var lis = document.getElementById('namelist');
                lis.innerHTML = list;
            }
        }
    };
    //make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://akhildevmj51.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};
