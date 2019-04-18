function submit(){
	let location = document.getElementById("location").value;
	let fromdate = document.getElementById("from").value;
	let todate = document.getElementById("to").value;
	let date1 = Date.parse(fromdate);
	let date2 = Date.parse(todate);
	let numberofdays = date2 - date1;
	if(numberofdays < 0){
	alert("Please select the dates correctly!");
	}
	else if (numberofdays === 0){
		alert("Your Booking in " + location + " for one day is being processed.");
	}
	else {
		alert("Your Booking in " + location + " for " + ((numberofdays/86400000)+1) + " days is being processed.");
	}
}