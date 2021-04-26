import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
} from '@material-ui/core';

const Confirm = (props) => {
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="simple-dialog-title"
      open={props.open !== 0}
    >
      <DialogTitle id="simple-dialog-title">Are you sure?</DialogTitle>
      <DialogContent>
        Sind sie sicher dass Sie den Datensatz mit der id {props.id} löschen
        möchten?
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => {
            props.handleClose(true);
          }}
        >
          yes
        </Button>
        <Button color="secondary" onClick={() => props.handleClose(false)}>
          no
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
