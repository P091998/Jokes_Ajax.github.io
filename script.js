const image=document.querySelector('img');
const JokeDIV=document.querySelector('#display-joke');
const button=document.querySelector('#get-joke');

button.addEventListener('click',function(){
    getRandomJoke();
})

function getRandomJoke()
{
    //create AJAX object
    const ajax=new XMLHttpRequest();
    const url='https://api.chucknorris.io/jokes/random';

    //open request
    ajax.open('GET',url,true);

    //check status code
    ajax.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
            JokeDIV.innerHTML=`${data.value}`;
        }
        else{
            this.onerror=this.onerror();
        }
    }

    //send response
    ajax.send();
}

function onerror()
{
    JokeDIV.innerHTML="Error!!!";
}