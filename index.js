const daysvalue=document.querySelector("demo");
const hourvalue=document.querySelector("demo1");
const minituevalue=document.querySelector("demo2");
const secondvalue=document.querySelector("demo3");
const countDownDayTime= new Date(2023,1,1,0,0,0).getTime();

function CountDown(){
	const dateTimeNow=new Date().getTime();
	let difference= countDownDayTime-dateTimeNow;

	const daysvalueNumber=Math.floor(difference / (1000 * 60 * 60 * 24));
	const hoursvalueNumber=Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutesvalueNumber=Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const secondvalueNumber=Math.floor((difference % (1000 * 60)) / 1000);

	console.log(daysvalueNumber,hoursvalueNumber,minutesvalueNumber,secondvalueNumber);
	daysvalue.innerHTML=daysvalueNumber;
	hourvalue.innerHTML=hoursvalueNumber;
	minituevalue.innerHTML=minutesvalueNumber;
	secondvalue.innerHTML=secondvalue;
}


setInterval(CountDown,1000);