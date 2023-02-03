//declaring the variable
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var resultOp= document.getElementById('result')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var scoreCard = document.getElementById('scoreCard')

var app={
        questions:[
            {
                q:'How do you feel today',
                options: ['Sad', 'Happy', 'Anxious', 'Blank'],
                answer:1
            },
            {
                q:'What is the name of the Deadly virus',
                options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
                answer:2
            }   ,
            {
                q:'what is my name',
                options:['kapoor','shaikh','khan','shabina'],
                answer:4
            }        ,
            {
                q:'hello',
                options:['hi','hello','wssp','fine'],
                answer:2
            } 
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
          
            else  {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
            
            
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
           // scoreCard.innerHTML=this.questions.length + "/" + this.score;
            var finalScore =  this.score ;
            scoreCard.innerHTML= finalScore + "/" + this.questions.length;
            if(this.index===this.questions.length-1 && this.score>=3){
                resultOp.innerHTML="Quiz Completed! , you look fine and might have temproray anxiety issue let us connect you with our counseller." ;
                    // ul.style.display="none";
                    // nextButton.style.display="none";
            }
            else if(this.index===this.questions.length-1 && this.score<3) {
                resultOp.innerHTML="Quiz Completed! looks problemetic";
                // ul.style.display="none";
                // nextButton.style.display="none";
            
        }
        },
        
         
        // if(score >= 2){
        //     result.innerHTML="Quiz Completed! , you look fine and might have temproray anxiety issue let us connect you with our counseller." ;
        //     ul.style.display="none";
        //     nextButton.style.display="none";
        // }
        // else{
        //     quizbox.innerHTML="Quiz Completed! looks problemetic";
        //     ul.style.display="none";
        //     nextButton.style.display="none";
        // }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}