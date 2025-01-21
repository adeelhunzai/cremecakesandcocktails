import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import "tailwindcss/tailwind.css";

const AgeVerificationModal = () => {
  const [open, setOpen] = useState(true);

  const handleOver18 = () => {
    setOpen(false);
  };

  const handleGoBack = () => {
    window.history.back(); // Redirects to the previous page
  };

  return (
    <Modal className="flex flex-col justify-center" open={open} onClose={() => {}} disableEscapeKeyDown>
      <Box
        className="bg-black  text-white p-2 rounded-lg shadow-lg mx-auto my-20 w-11/12 md:w-1/3"
        sx={{ outline: "none" }}
      >
        {" "}
        <div className="border-[1px] border-solid border-[#FFD700] rounded-[7px] p-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Age Verification
          </h2>
          <p className="mb-6 text-white text-center">
            You must be 18 or older to access this site.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              sx={{
                background: "#FFD700",
              }}
              variant="contained"
              color="primary"
              onClick={handleOver18}
              className="bg-[#FFD700] hover:bg-white hover:text-black"
            >
              Over 18
            </Button>
            <Button
              sx={{
                border: "1px solid #FFD700",
                color: "#FFD700",
                "&:hover": {
                  borderColor: "#FFB700",
                  color: "#000",
                  background: "#FFFFFF",
                },
              }}
              variant="outlined"
              onClick={handleGoBack}
            >
              Go Back
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AgeVerificationModal;
