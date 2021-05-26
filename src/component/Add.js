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

import IconButton from "@material-ui/core/IconButton";

//date
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
      <IconButton
        style={{ backgroundColor: "#00bcd4", minWidth: 50, minHeight: 50, color: "white" }}
        color="primary"
        onClick={handleClickOpen}
      >
        +
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new expense</DialogTitle>
        <DialogContent>
          <form style={{ minWidth: 300 }} onSubmit={props.handleSubmit}>
            <TextField
              fullWidth
              type="text"
              id="standard-basic"
              label="Expense Name"
              name="expenseName"
              value={props.expenseName}
              onChange={(event) => props.onChange(event)}
            />
            <br />
            <TextField
              fullWidth
              type="number"
              id="standard-basic2"
              label="Amount"
              name="totalAmount"
              value={props.totalAmount}
              onChange={(event) => props.onChange(event)}
            />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                style={{ paddingBottom: 30 }}
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={props.date}
                onChange={(event) => props.handleDateChange(event)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>

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
            <InputLabel
              style={{ paddingTop: 30 }}
              id="demo-mutiple-checkbox-label1"
            >
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

            <button style={{ marginTop: 30 }} onClick={handleClose}>
              Submit
            </button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default Add;
