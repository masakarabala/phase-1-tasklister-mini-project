document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form=document.getElementById('create-task-form')
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    buildtoDo(e.target.new_task_description.value)

  })
});

function buildtoDo(todo){
  const p=document.createElement("p")
  p.textContent=todo;
  document.getElementById('list').appendChild(p)
  // create button
  const btn=document.createElement('button')
  btn.textContent=' x'
  p.appendChild(btn)

  btn.addEventListener('click',function handelDelet(e){
     e.target.parentNode.remove()
  })
}
