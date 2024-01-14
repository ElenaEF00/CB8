import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const TodoItem = ({ todoData, setListData }) => {
  const { id, todo, completed, userId } = todoData;

  const onHandleDelete = () => {
    const confirmIt = confirm("Sei sicuro di voler cancellare?");

    if (confirmIt) {
      setListData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const [checked, setChecked] = useState(completed);
  const [newText, setNewText] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setNewText(todo);
  }, [todo]);

  const onHandleCheck = () => setChecked(!checked);
  const onHandleEdit = () => setEditing(!editing);

  const onHandleEditChanges = (event) => setNewText(event.target.value);

  return (
    <div className={`${styles.TodoItem}`} id={todoData.id}>
      <div className={styles.TodoItem__item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={onHandleCheck}
        />
        <div className={styles.text}>
          <span>{userId}</span>
          {!editing ? (
            <h3 className={checked ? styles.checkedTitle : styles.title}>
              {newText}
            </h3>
          ) : (
            <input
              type="text"
              value={newText}
              onBlur={onHandleEdit}
              onChange={onHandleEditChanges}
            />
          )}
        </div>
        <button onClick={onHandleEdit} className={styles.editBtn}>
          ✏️
        </button>
        <button onClick={onHandleDelete} className={styles.closeBtn}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
