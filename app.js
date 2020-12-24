
let wins = 0
let losses = 0

let items={
    rock:{
      name: 'ROCK',
      img: 'https://i.pinimg.com/originals/22/cf/d8/22cfd89c5f4460c57229bf49d9c77907.jpg'
    },
    paper:{
      name: 'PAPER',
      img: 'https://static3.depositphotos.com/1006863/227/v/950/depositphotos_2275139-stock-illustration-funny-cartoon-toilet-paper.jpg'
    },
    scissors:{
      name: 'SCISSORS',
      img: 'https://st.depositphotos.com/1024768/2970/v/380/depositphotos_29709915-stock-illustration-scissors-clip-art-cartoon-illustration.jpg'
    },
    lizard:{
      name: 'LIZARD',
      img: 'https://cdn5.vectorstock.com/i/1000x1000/29/84/cartoon-funny-green-lizard-posing-isolated-on-whit-vector-7402984.jpg'
    },
    spock:{
      name: 'SPOCK',
      img: 'https://static.hollywoodreporter.com/sites/default/files/2018/02/star_trek_tv_spock_3_copy_-_h_2018-928x523.jpg'
    }
  }
  
function play(name){

  let item = items[name]
  document.getElementById('result').innerHTML=`<h3><b>You selected ${item.name} </b></h3>
  <img src="${item.img}"/>`  
 startGame(name)
}


function playCom(name){
 
  let item = items[name]
  
  document.getElementById('resultCom').innerHTML=`<h3><b>Computer selected ${item.name} </b></h3>
  <img src="${item.img}"/>`
  
}
function random(){
  let itemNames= Object.keys(items)
  let i = Math.floor(Math.random() * itemNames.length)
    playCom(itemNames[i])
    return itemNames[i]
}
function drawButton(){
  let itemNames = Object.keys(items)
  let button=''
  itemNames.forEach(item => {
    button+=`<button type="button" class="btn btn-danger " onclick="play('${item}')">${item.toUpperCase()}</button><span>      </span>`
    });
    document.getElementById("buttons").innerHTML= button

}
drawButton()

function startGame(userChoice){
  var computerChoice= random()
  if(userChoice==computerChoice){
    console.log("draw")
      document.getElementById("decision").innerHTML=`<h1>Draw<h1>`
  }
   if(userChoice=='rock' && computerChoice=='scissors'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML= wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='rock' && userChoice=='scissors'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML= losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='rock'&& computerChoice=='lizard'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML= wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='rock' && userChoice=='lizard'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML= losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='paper'&& computerChoice=='spock'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML=wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='paper' && userChoice=='spock'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='paper'&& computerChoice=='rock'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML=wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='paper' && userChoice=='rock'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='scissors'&& computerChoice=='paper'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML=wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='scissors' && userChoice=='paper'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='scissors'&& computerChoice=='lizard'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML=wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='scissors' && userChoice=='lizard'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='spock'&& computerChoice=='scissors'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML=wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='spock' && userChoice=='scissors'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='spock'&& computerChoice=='rock'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML=wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='spock' && userChoice=='rock'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='lizard'&& computerChoice=='spock'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML=wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='lizard' && userChoice=='spock'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }else if(userChoice=='lizard'&& computerChoice=='paper'){
      console.log("you win")
      wins++
      document.getElementById("wins").innerHTML= wins
      document.getElementById("decision").innerHTML=`<h1>You Win<h1>`
      document.getElementById("win").play()
    }else if(computerChoice=='lizard' && userChoice=='paper'){
      console.log("computer wins")
      losses++
      document.getElementById("losses").innerHTML=losses
      document.getElementById("decision").innerHTML=`<h1>Computer Wins<h1>`
      document.getElementById("lose").play()
    }
  }
