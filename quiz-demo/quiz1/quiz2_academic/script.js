//declaring the variable
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var resultOp= document.getElementById('result1')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var scoreCard = document.getElementById('scoreCard')

var app={
        questions:[
            {
                q:'Do you feel pressure to perform well in exam?', //1
                options: ['yes', 'No'],
                answer:1
            },
            {
                q:'Do you have fear of disappointing others?', //2
                options: ['yes','No'],
                answer:1
            }   ,
            {
                q:'Do you face Time management issue such as balancing academic and personal responsibilty',//3
                options:['yes' , 'No'],
                answer:1
            }        ,
            {
                q:'Do you face any Difficulty in understanding the course material?',//4
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'Do you feel pressure to meet academic or career expectation?',//5
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'Is you sleep scheduled changed?',//6
                options:['yes' , 'No'],
                answer:1
            },
            {
                q:'Do you feel difficulty concentrating?',//7
                options:['yes' , 'No'],
                answer:1
            } 
            // {
            //     q:'Have you or people close to you struggled with depression or thoughts of suicide?',//8
            //     options:['yes' , 'No'],
            //     answer:1
            // }

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
                result1.innerHTML="We understand that you're feeling a lot of pressure right now. It's completely normal to feel overwhelmed sometimes.Remember that your worth is not defined by your academic performance. You are a valuable person no matter what grades you get Have you considered talking to your teacher or academic advisor about your concerns? They may be able to offer some helpful advice or resources.",
                
                    ul.style.display="none";
                    nextButton.style.display="none";
            }
            else if(this.index===this.questions.length-1 && this.score<=3) {
                result1.innerHTML=`"Remember that this is just a temporary situation. It will pass, and things will get better.You are capable and competent, and you will get through this. Don't give up!"`;
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