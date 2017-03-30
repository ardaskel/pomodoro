var countdown = function(end){
	var _second = 1000,
		_minute = _second * 60,
		_hour = _minute * 60,
		_day = _hour * 24,


		end = new Date(end),
		timer,

		calculate = function(){

			var now = new Date(),
				remaining = end.getTime() - now.getTime(),
				data;


			if(isNaN(end)){
				console.log("invalid date/time");
			return;
		}


		if(remaining <= 0 ){
			//clear our timer
			//callback


		} else {
			if(!timer) {
				timer = setInterval(calculate, _second);
			}
		}

		console.log("second")


		};

		calculate();



}