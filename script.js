let form=document.getElementById('form');
let textinput=document.getElementById('textinput');
let msg=document.getElementById('triger');
let dateinput=document.getElementById('dateinput');
let descripinput=document.getElementById('descripinput');
let tasks=document.getElementById('tasks');

form.addEventListener('submit',(x)=>{
	x.preventDefault();
	formvalidation();
});

let formvalidation=()=>{
	if(textinput.value==""){
		console.log("failure");
		msg.innerHTML="Task name cannot be blank";
	}
	else{
		console.log("success");
		msg.innerHTML="";
		acceptData();
	}
}

let data=[];
let acceptData=()=>{
	
	// localStorage.setItem("data",JSON.stringify(data));
	// console.log(data);
	data["text"]=textinput.value;
	data["date"]=dateinput.value;
	data["description"]=descripinput.value;
	 createTasks();
	
};

let createTasks=()=>{
	// ${data.text}, ${data.date}, ${data.description}
	tasks.innerHTML +=`
	
	<div class="taskcard">
			      <span>${data.text}</span>
				  <span>${data.date}</span>
				  <p> ${data.description}</p>
				  <span class="modify-icons">
				    <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="bi bi-pencil-square"></i>
					<i onClick="deleteTask(this)" class="bi bi-trash"></i>
				  </span>
	</div>
	
	`;
	resetForm();
};

let deleteTask=(e)=>{
    e.parentElement.parentElement.remove();	
};

let editTask=(e)=>{
	let editedTask=e.parentElement.parentElement;
	
	textinput.value=editedTask.children[0].innerHTML;
	dateinput.value=editedTask.children[1].innerHTML;
	descripinput.value=editedTask.children[2].innerHTML;
	
	editedTask.remove();
};

let resetForm=()=>{
	textinput.value="";
	dateinput.value="";
	descripinput.value="";
};

// (()=>{
	// data=JSON.parse(localStorage.getItem("data"));
// })