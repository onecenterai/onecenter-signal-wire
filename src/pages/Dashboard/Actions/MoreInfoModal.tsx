import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { InfoRounded } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  border: "0",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

interface MoreInfoModalProps {
  api: string;
  description: string;
  sample_request: string;
  sample_response: string;
}

export default function MoreInfoModal({ api, description, sample_request, sample_response }: MoreInfoModalProps) {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <div>
      <Box onClick={handleModalOpen} sx={{ width: "100%" }}>
        More Info
      </Box>
      <Modal open={open} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <InfoRounded sx={{ verticalAlign: "middle" }} /> More Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            API url: {api}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sample Request: {sample_request}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sample Response: {sample_response}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
