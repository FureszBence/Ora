
function timePicker() {
   
	let inputs = document.querySelectorAll(".time");
    inputs.forEach(input => {
		input.addEventListener("click", () => {
			show(input,input.getAttribute('name'));
       
        
         
        });
       
   document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('time-pic'+input.getAttribute('name'));
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
   });
    
   
	});
     
    
}

function show(input,index) {

	const elementExists = document.getElementById('time-pic'+index);   
   
	const timePicker = document.createElement('div');
	timePicker.classList.add('time-picker'+index);
	timePicker.classList.toggle('open');
	timePicker.setAttribute('id','time-pic'+index)
	
	  timePicker.innerHTML+="<div class='set-time'><div class='label'><a id='plusH-"+index+"'>+</a><input class='set' type='text' id='hour-"+index+"' value='06'><a id='minusH-"+index+"'>-</a></div><div class='label'><a id='plusM-"+index+"'>+</a><input class='set' type='text' id='minute-"+index+"' value='00'><a id='minusM-"+index+"'>-</a></div></div>"
	input.after(timePicker);
  
	const plusH = document.getElementById('plusH-'+index);
	const minusH = document.getElementById('minusH-'+index);
	const plusM = document.getElementById('plusM-'+index);
	const minusM = document.getElementById('minusM-'+index);
	let h = parseInt(document.getElementById('hour-'+index).value);
	let m = parseInt(document.getElementById('minute-'+index).value);
  let correctinput= document.getElementById('clock_'+index);
          
	correctinput.value = (h < 10 ? '0'+h:0)+':'+(m < 10 ? '0'+m:0);

   
	plusH.addEventListener("click", () => {
		h = isNaN(h) ? 0 : h;
		if(h===23) { h =-1;}
		h++;
		
		document.getElementById('hour-'+index).value = (h < 10 ? '0':0) + h;
		
		correctinput.value = document.getElementById('hour-'+index).value+':'+document.getElementById('minute-'+index).value;
	});
	

	minusH.addEventListener("click", () => {
		h = isNaN(h) ? 0 : h;
		if(h===0) { h =24; }
		h--;
		
		document.getElementById('hour-'+index).value = (h < 10 ? '0':0) + h;
		
		correctinput.value = document.getElementById('hour-'+index).value+':'+document.getElementById('minute-'+index).value;
	});


	plusM.addEventListener("click", () => {
		m = isNaN(m) ? 0 : m;
		if(m===55){ m =-5; }
		m = m+1;
		
		document.getElementById('minute-'+index).value = (m < 10 ? '0':0) + m;
		
		correctinput.value = document.getElementById('hour-'+index).value+':'+document.getElementById('minute-'+index).value;
	});
	

	minusM.addEventListener("click", () => {
		m = isNaN(m) ? 0 : m;
		if(m===0) { m =60; }
		m = m-1;
		
		document.getElementById('minute-'+index).value = (m < 10 ? '0':0) + m;
		
		correctinput.value = document.getElementById('hour-'+index).value+':'+document.getElementById('minute-'+index).value;
	});
        
        
}

timePicker();