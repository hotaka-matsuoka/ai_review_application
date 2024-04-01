// タスクリストオブジェクト配列
const tasks = [
  {id: 1, name: 'task1', isDone: true},
  {id: 2, name: 'task2', isDone: false},
  {id: 3, name: 'task3', isDone: true},
  {id: 4, name: 'task4', isDone: false},
];

// 特定のタスクを検索する関数
function findTask(id) {
  // 検索処理
  for (let task of tasks) {
    if (task.id === id) {
      return task;
    }
  }

  // タスクが見つからなければundefinedを返す
  return undefined;
}

// 全てのタスクを完了する処理
function completeAllTasks() {
  for (let task of tasks) {
    if (!task.isDone) {
      task.isDone = true;
      console.log('Task', task.id, 'is completed');
    }
  }
}

// 特定のIDのタスクを探す
const taskToFind = findTask(3);
// タスクの状態を出力
if (taskToFind) {
  console.log('Found task:', taskToFind.name, ', status:', taskToFind.isDone ? 'Done' : 'Not Done');
} else {
  console.log('Task not found');
}

// 全てのタスクを完了する
console.log('Completing all tasks...');
completeAllTasks();
