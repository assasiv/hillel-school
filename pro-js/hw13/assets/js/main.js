let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

const allTasks = monday.concat(tuesday);

// -------------- Version I Start --------------

let selectedTasks = allTasks.map(
    function (task) {
        task[1] /= 60;
        return task;
    }
)
.filter(
    function (task) {
        return task[1] > 2;            
    }
)
.map(
    function(task) {
        task.push(task[1] * amount);
        return task;
    }
);

// -------------- Version I End --------------

// -------------- Version II Start --------------


// function timeConversion(task) {
//     task[1] /= 60;
//     return task;
// }

// function tasksFiltering(task) {
//     return task[1] > 2;            
// }

// function addPrice(task) {
//     task.push(task[1] * amount);
//     return task;
// }

// let selectedTasks = allTasks.map(timeConversion).filter(tasksFiltering).map(addPrice);

// -------------- Version II End --------------


createTable(selectedTasks);


function createTable(tasks) {
    document.write('<div class="wrap"><table class="simple-table">');
    tasks.forEach(
        function(task) {
            document.write(
                `<tr>
                    <td><b>Task name:</b> ${task[0]}</td>
                    <td><b>Taks duration:</b> ${task[1]} hours</td>
                    <td><b>Task amount:</b> $${task[2]}</td>
                </tr>`
            )
        }
    );
    document.write('</table></div>');
}
