   window.onload = function(){
       show(0)
   }
   
   
   var questions = [
    
    {  id: 1,
      question : "What is 2*5+10?",
      answer : "20",
      options : [
          "10", "15","20","30"
      ]
  },

  
      {id: 2,
      question : "What is 30+10/10?",
      answer : "31",
      options : [
          "0", "31","35","40"
      ]
  },

  
     { id: 3,
      question : "What is 100-60*2?",
      answer : "-20",
      options : [
          "-40", "80","20","-20"
      ]
  },
  

  
    {  id: 4,
      question : "What is 80/2/4?",
      answer : "10",
      options : [
          "2", "4","8","10"
      ]
  },
  {  id: 5,
    question : "What is 8+15*2/10?",
    answer : "11",
    options : [
        "3.8", "11","30","6.3"
    ]
},
{  id: 6,
    question : "What is 60*3+16/4?",
    answer : "184",
    options : [
        "184", "50","169","100"
    ]
},
{  id: 7,
    question : "What is 100/4+50-20?",
    answer : "55",
    options : [
        "3.33", "20","55","50"
    ]
},
{  id: 8,
    question : "What is (8/2)(16/4)?",
    answer : "16",
    options : [
        "2", "4","8","16"
    ]
},
{  id: 9,
    question : "What is (9*2)+(9-2)?",
    answer : "25",
    options : [
        "18", "25","33","45"
    ]
},
{  id: 10,
    question : "What is (100-20)/(16-6)?",
    answer : "8",
    options : [
        "90", "10","8","4"
    ]
}

]

let counter = 0;
let point = 0;
let correct = 0;
function nextBtn(){

if(counter == questions.length -1){
    location.href ="end.html"
}

let userAnswer = document.querySelector("li.option.active").innerHTML;
if(userAnswer == questions[counter].answer){
   point += 10 ;
   sessionStorage.setItem("points", point);
}


  counter++;
  show(counter)
  
}

function show(a){
    var question = document.getElementById("questions");

question.innerHTML = `<h2>Q${counter+1}. ${questions[a].question}</h2>
<ul class="list">
    <li class="option">${questions[a].options[0]}</li>
    <li class="option">${questions[a].options[1]}</li>
    <li class="option">${questions[a].options[2]}</li>
    <li class="option">${questions[a].options[3]}</li>
</ul>

`
active()
}

function active(){
    let option = document.querySelectorAll("li.option")
for(let i=0; i < option.length; i++){
option[i].onclick = function(){
    for(j=0;j<option.length;j++){
        if(option[j].classList.contains("active")){
            option[j].classList.remove("active")
        }
    }
    option[i].classList.add("active");
}
}
}
