
//var old_menuid = 메뉴번호;
        
var old_viewid = 0;

function menu_view(viewid){

    if(viewid!=old_viewid){
    document.getElementById("submenu"+viewid).style.display="block";
    if(old_viewid!="0")document.getElementById("submenu"+old_viewid).style.display="none";
    old_viewid = viewid;
    }

}

function menu_hide(hideid){

    document.getElementById("submenu"+hideid).style.display="none";
    old_viewid = 0;

}

document.getElementById('navbar1').addEventListener('click',menu_view(1));
// document.getElementById('navbar2').addEventListener('click',showDisplayMenu2);


// document.getElementById('navbar3').addEventListener('click',showDisplayMenu3);
// document.getElementById('navbar4').addEventListener('click',showDisplayMenu4);
// document.getElementById('navbar5').addEventListener('click',showDisplayMenu5);

    



/*
submenu1 = document.getElementsById('submenu1');
submenu2 = document.getElementsById('submenu2');
submenu3 = document.getElementsById('submenu3');
submenu4 = document.getElementsById('submenu4');
submenu5 = document.getElementsById('submenu5');


function showDisplayMenu1(){
    this.submenu1.style.display = 'block';
    this.submenu2.style.display = 'none';
    this.submenu3.style.display = 'none';
    this.submenu4.style.display = 'none';
    this.submenu5.style.display = 'none';
}
function showDisplayMenu2(){
    this.submenu1.style.display = 'none';
    this.submenu2.style.display = 'block';
    this.submenu3.style.display = 'none';
    this.submenu4.style.display = 'none';
    this.submenu5.style.display = 'none';
}


function showDisplayMenu3(){
    submenu1.style.display = 'none';
    submenu2.style.display = 'none';
    submenu3.style.display = 'block';
    submenu4.style.display = 'none';
    submenu5.style.display = 'none';
}
function showDisplayMenu4(){
    submenu1.style.display = 'none';
    submenu2.style.display = 'none';
    submenu3.style.display = 'none';
    submenu4.style.display = 'block';
    submenu5.style.display = 'none';
}
function showDisplayMenu5(){
    submenu1.style.display = 'none';
    submenu2.style.display = 'none';
    submenu3.style.display = 'none';
    submenu4.style.display = 'none';
    submenu5.style.display = 'block';
}
*/

// document.getElementById('navbar1').addEventListener('click',showDisplayMenu1);
// document.getElementById('navbar2').addEventListener('click',showDisplayMenu2);


// document.getElementById('navbar3').addEventListener('click',showDisplayMenu3);
// document.getElementById('navbar4').addEventListener('click',showDisplayMenu4);
// document.getElementById('navbar5').addEventListener('click',showDisplayMenu5);

/*
var beforeObj;

function menuToggle(id){
    var subbar = document.getElementsByName('submenu');

    for(var i = 0; i < subbar.length; i ++){
        subbar[i].style.display == 'none'
    }

   // beforeObj.style.display = 'none'
    var obj = document.getElementById(id);
    if(obj.style.display == 'none'){
        obj.style.display = 'block';
    //    beforeObj = obj;
    }else{
        obj.style.display = 'none';
    }
}

document.getElementById('navbar1').addEventListener('click',function(){menuToggle('submenu1')});
document.getElementById('navbar2').addEventListener('click',function(){menuToggle('submenu2')});
document.getElementById('navbar3').addEventListener('click',function(){menuToggle('submenu3')});
document.getElementById('navbar4').addEventListener('click',function(){menuToggle('submenu4')});
document.getElementById('navbar5').addEventListener('click',function(){menuToggle('submenu5')});
*/
/*
function menuToggle(){

    var subbar = document.getElementsByName('submenu');

    for(var i = 0; i < subbar.length; i ++){
        subbar[i].style.display == 'none'
    }

   subbar.style.display ='none';

    var obj = document.getElementById(id);
    if(obj.style.display == 'none'){
        obj.style.display = 'block';
    }else{
        obj.style.display = 'none';
    }
}
*/