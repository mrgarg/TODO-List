$(function () {

    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')
    let element = $('#element')

    addtodoBtn.click(function () {
        let newTodo = newTodoBox.val()
        
        $.post(
            '/todos/',
            {task: newTodo},
            function (data) {
                todoList.empty();
                for (todo of data) {
                    todoList.append('<li style="color:white;text-align:left;font-size:1.4rem">' + todo.task + " " + '<input type = "button" style="color:white; background:none; font-size:1.4rem;float:right;" class = "button" value="remove task"/> </li><br>')
                }
            }
        )
        $(document).on('click','.button',function()
        {   

          $(this).parent().remove() ; 
        })
    })
})