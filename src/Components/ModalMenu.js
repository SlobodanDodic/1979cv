import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
//import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const ModalMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="button-modal" onClick={handleOpen}>
        <MenuIcon />
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="class-modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="class-paper">
            <Link
              to="/aboutme"
              color="inherit"
              variant="body1"
              className="all-links"
            >
              <h2>about me</h2>
            </Link>

            <Link
              to="/projects"
              variant="body1"
              color="inherit"
              className="all-links"
            >
              <h2>projects</h2>
            </Link>

            <Link
              to="/history"
              variant="body1"
              color="inherit"
              className="all-links"
            >
              <h2>history</h2>
            </Link>

            {/*<Link variant="body1" color="inherit" className="all-links">
              <h2>contact me</h2>
            </Link> */}
            <div className="bg-img-modal"></div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalMenu;
