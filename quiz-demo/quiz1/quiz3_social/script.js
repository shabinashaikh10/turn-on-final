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
                q:'Do you have Intense fear or anxiety in social situations, especially those involving unfamiliar people or potential scrutiny or evaluation by others.', //1
                options: ['yes', 'No'],
                answer:1
            },
            {
                q:'Do you feel Excessive self-consciousness and worry about being judged or criticized by others ', //2
                options: ['yes','No'],
                answer:1
            }   ,
            {
                q:'Do you avoid speaking in public, meeting new people, or being observed while eating or drinking.',//3
                options:['yes' , 'No'],
                answer:1
            }        ,
            {
                q:'Do you have Physical symptoms, such as sweating, trembling, blushing, rapid heart rate, or stomach discomfort in social situations.',//4
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'You replay past social interactions and criticizing for perceived mistakes.',//5
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'You have Difficulty initiating and maintaining social interactions or relationships.',//6
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'You are feeling like you are not able to make your own decisions or act according to your own values and beliefs.',//7
                options:['yes' , 'No'],
                answer:1
            } ,
            {
                q:'Impairment in daily functioning, such as difficulty attending work, school, or social events due to anxiety.',//8
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
                result.innerHTML=`"It's okay to feel anxious or nervous. You don't have to be perfect or have it all together all the time.Remember that you don't have to push yourself too hard. Take things at your own pace, and don't feel pressured to do anything that makes you uncomfortable."`;
                    ul.style.display="none";
                    nextButton.style.display="none";
            }
            else if(this.index===this.questions.length-1 && this.score<3) {
                result.innerHTML="I understand that social situations can be tough for you. You're not alone,work together to find ways to manage your anxiety and feel more comfortable in social situations.";
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