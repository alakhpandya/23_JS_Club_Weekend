let input = document.querySelector('.text-container');
let add_task_btn = document.querySelector('.btn');
let task_container = document.querySelector('.task-container');
let task_message, new_task, hr, target, ele, task_count=0;

add_task_btn.addEventListener('click', ()=>{
    task_message = input.value;
    new_task = document.createElement('div');
    new_task.classList.add('task-box');
    new_task.innerHTML = `<p class="task">${task_message}</p>
    <div>
        <a href="#"><i class="fa-solid fa-pen pen tools"></i></a>
        <a href="#"><i class="fa-solid fa-check check tools"></i></a>
        <a href="#"><i class="fa-solid fa-trash trash tools"></i></a>
    </div>`;
    task_count++;
    if (task_count > 1){
        hr = document.createElement('hr');
        hr.setAttribute('class', 'seperator');
        task_container.append(hr);
    }
    task_container.append(new_task);
})

task_container.addEventListener('click', (e)=>{
    target = e.target;
    if (target.classList.contains('pen')){
        task_message = prompt("Enter new task message:");
        target.parentElement.parentElement.previousElementSibling.innerText = task_message;
    }
    
    if (target.classList.contains('check')){
        if (target.classList.contains('fa-undo')){
            target.parentElement.parentElement.previousElementSibling.style.textDecoration = 'None';
            target.classList.remove('fa-undo');
            target.classList.add('fa-check');
        }
        else{
            target.parentElement.parentElement.previousElementSibling.style.textDecoration = 'line-through';
            target.classList.remove('fa-check');
            target.classList.add('fa-undo');
        }
    }
    
    if (target.classList.contains('trash')){
        ele = target.parentElement.parentElement.parentElement;
        console.log(ele)
        task_count--;
        if (task_count >= 1){
            if(ele.previousElementSibling != null){
                ele.previousElementSibling.remove();
            }
            else{
                ele.nextElementSibling.remove();
            }
        }
        ele.remove();
    }
})
