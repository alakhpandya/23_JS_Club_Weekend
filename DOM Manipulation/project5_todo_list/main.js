let input = document.querySelector('.text-container');
let add_task_btn = document.querySelector('.btn');
let task_container = document.querySelector('.task-container');
let task_message, new_task;

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
    task_container.append(new_task);
})