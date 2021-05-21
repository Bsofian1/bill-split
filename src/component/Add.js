import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import users from "../data/usersData";

const names = users.map((user) => user.name);

const Add = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>Add</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new expense</DialogTitle>
        <DialogContent>
          <form onSubmit={props.handleSubmit}>
            <TextField
              type="text"
              id="standard-basic"
              label="Expense Name"
              name="expenseName"
              value={props.expenseName}
              onChange={(event) => props.onChange(event)}
            />
            <br />
            <TextField
              type="number"
              id="standard-basic2"
              label="Amount"
              name="totalAmount"
              value={props.totalAmount}
              onChange={(event) => props.onChange(event)}
            />
            <br />
            <InputLabel id="demo-mutiple-checkbox-label">Paid by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              fullWidth
              id="demo-simple-select"
              name="ownerExpense"
              value={props.ownerExpense}
              onChange={(event) => props.onChange(event)}
            >
              {names.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
            <br />
            <InputLabel id="demo-mutiple-checkbox-label1">
              Shared with
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={props.userExpense}
              onChange={(event) => props.onMultiChange(event)}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={props.userExpense.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            <br />

            <button>Submit</button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default Add;
