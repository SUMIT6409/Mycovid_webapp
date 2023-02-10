// function addele()
// {
//     let task=document.getElementById("task").value;
//     let deadline=document.getElementById("deadline").value;
//     console.log(task);
//     console.log(deadline);
//     if (task === '' || deadline === '') {
//         alert("You must write something!");
//         return;
//     }
//     const node = document.createElement("li");
//     node.classList.add("list-group-item");
//     const btn=document.createElement("button");
//     btn.classList.add("btn");
//     btn.classList.add("mx-5");
//     btn.classList.add("btn-secondary");
    
//     const textnode = document.createTextNode(task);
//     const textbtn = document.createTextNode("Done");
//     btn.appendChild(textbtn);
//     node.appendChild(textnode);
//     node.appendChild(btn);
//     document.getElementById("active").appendChild(node);


// }

function expire(task,deadline)
{
    setTimeout(() => {
        task.remove();

        //add to completed
        document.querySelector('#expired').innerHTML += `
        <div class="list-group-item disabled">
            <span id="taskname">
                ${task.innerText}
            </span>
        </div>`
    }, deadline*1000);
}
let myid=0;
document.querySelector('#addele').onclick = function(){
    var deadline=document.querySelector('#deadline').value;
    if(document.querySelector('#task').value.length == 0){
        alert("Please Enter a Task");
    }

    else{
        let curid=myid;
        document.querySelector('#active').innerHTML += `
            <div class="task list-group-item" id=${myid++}>
                <span id="taskname">
                    ${document.querySelector('#task').value}
                </span>
                <button class="delete btn mx-5 btn-secondary">Done
                    <i class="far fa-trash-alt"></i>
                </button>
                <span id="limit">
                    ${document.querySelector('#deadline').value}
                </span>
                
                </div>
                `;
                
                
                
            var current_tasks = document.querySelectorAll(".delete");
            // var myvar = document.querySelectorAll(".task");
            // for(var i=0; i<myvar.length; i++){
                
            // }
            setTimeout(() => {
                document.getElementById(curid).remove();
                // current_tasks[current_tasks.length-1].parentNode.remove();

                document.querySelector('#expired').innerHTML += `
                <div class="list-group-item disabled">
                    <span id="taskname">
                        ${current_tasks[current_tasks.length-1].parentNode.innerText}
                    </span>
                </div>`
            }, deadline*1000);


            // expire(current_tasks[current_tasks.length-1].parentNode,deadline);
           

        for(var i=0; i<current_tasks.length; i++){
            // let deadline=parseInt(current_tasks[i].nextSibling.nextSibling.innerText);
            // expire(current_tasks[i].parentNode,deadline);
            current_tasks[i].onclick = function(){
                
                //add to completed
                document.querySelector('#completed').innerHTML += `
            <div class="list-group-item disabled">
                <span id="taskname">
                    ${this.parentNode.innerText}
                </span>
            </div>
        `;
                //delete from active
                this.parentNode.remove();
            }
        }
    }
}