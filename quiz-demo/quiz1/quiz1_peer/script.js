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
                q:'Do you feel like you have to hide your true self or beliefs in order to fit in with a particular group of friends', //1
                options: ['yes', 'No'],
                answer:1
            },
            {
                q:'Do you feel like you are being coerced or forced to participate in behaviors or activities that you are not comfortable with.', //2
                options: ['yes','No'],
                answer:1
            }   ,
            {
                q:'Do you feel anxious or stressed about disappointing your peers or losing their approval.',//3
                options:['yes' , 'No'],
                answer:1
            }        ,
            {
                q:'Your self-esteem or self-worth is dependent on the opinions of others.',//4
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'You are engaging in risky behaviors or breaking rules in order to fit in with a particular social group.',//5
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'You are feeling like you are constantly competing with your peers or comparing yourself to them.',//6
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'You are feeling like you are not able to make your own decisions or act according to your own values and beliefs.',//7
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'Do you feel comfortable to share your feelings with anyone',//8
                options:['yes' , 'No'],
                answer:1
            }

        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                // opt3.innerHTML=this.questions[this.index].options[2];
                // opt4.innerHTML=this.questions[this.index].options[3];
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
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
            var finalScore =  this.score ;
            scoreCard.innerHTML= finalScore + "/" + this.questions.length;
            if(this.index===this.questions.length-1 && this.score>=4){
                result.innerHTML=`"You don't have to do anything you're not comfortable with.
                It's okay to say no. Your true friends will respect your decisions and won't pressure 
                you into doing something you don't want to do.Remember that you are in control of your own life and your own decisions. 
                Don't let others dictate what you do or how you feel.It's important to stand up for what you believe in, even if it means going against the crowd.
                "` ;
                    ul.style.display="none";
                    nextButton.style.display="none";
            }
            else if(this.index===this.questions.length-1 && this.score<3) {
                result.innerHTML="Quiz Completed! you look fine";
                ul.style.display="none";
                nextButton.style.display="none";
            
        }
        },
        
         
        // if(score >= 2){
        //     result.innerHTML="Quiz Completed! , you look fine and might have temproray anxiety issue let us connect you with our counseller." ;
        //     ul.style.display="none";
        //     nextButton.style.display="none";
        // }
        // else {
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



