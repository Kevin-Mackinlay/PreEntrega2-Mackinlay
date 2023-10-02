const Toast = ({ mensaje, isOpen, estado }) => {
  return (
    <>
      <div style={isOpen ? styles.toastOpen : styles.toastClose}>
        <div style={estado === "error" ? styles.toastMessageError : styles.toastMessageSuccess}>{mensaje}</div>
      </div>
    </>
  );
};

const styles = {
  toastOpen: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    background: "black",
    color: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    zIndex: 1000,
  },
  toastClose: {
    display: "none",
  },
  toastMessageSuccess: {
    fontSize: "1.5rem",
    color: "lightgreen",
  },
  toastMessageError: {
    fontSize: "1.5rem",
    color: "red",
  },
};

export default Toast;
