import React from "react";
import style from "./editdelete.module.css";
const EditDelete = () => {
  return (
    <div className={style.EditDelete}>
      <div className={style.header}>
        <h4 className={style.headertext}>Week Edit/Delete form</h4>
      </div>
      <div>
        <form>
          <div className={style.form}>
            <label>
              Week Number:
              <input type="text" name="name" />
            </label>
            <label>
              Subject:
              <input type="text" name="name" />
            </label>
            <label>
              Date:
              <input type="text" name="name" />
            </label>
            <label>
              Time:
              <input type="text" name="name" />
            </label>
            <label>
              Location:
              <input type="text" name="name" />
            </label>
          </div>
          <div className={style.button}>
            <input type="submit" value="Submit" />
            <button>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDelete;