import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessEmail: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("submitTriggered")
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.businessEmail ||
      !formData.phoneNumber ||
      !formData.message
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://cremecakesandcocktails.shop/contact-form.php", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-3">
          Contact us Today for Our
          <br />
          Catalogue of Catering Products!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="border-[1px] border-solid border-[#FFFFFF] rounded-[6.92px] p-4 max-w-[34.375rem] mx-auto space-y-4 mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              variant="outlined"
              fullWidth
              className="bg-transparent"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    color: "#FFFFFF",
                    borderColor: "#FFFFFF",
                    borderRadius: "7.04px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.23)",
                  },
                },
                "& input": {
                  color: "white",
                },
                "& input::placeholder": {
                  color: "#CCCCCC", // Placeholder color
                  opacity: 1, // Ensure the opacity doesn't make the placeholder lighter
                },
              }}
            />
            <TextField
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              variant="outlined"
              fullWidth
              className="bg-transparent"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FFFFFF",
                    borderRadius: "7.04px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.23)",
                  },
                },
                "& input": {
                  color: "white",
                },
                "& input::placeholder": {
                  color: "#CCCCCC", // Placeholder color
                  opacity: 1, // Ensure the opacity doesn't make the placeholder lighter
                },
              }}
            />
          </div>

          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            variant="outlined"
            fullWidth
            className="bg-transparent"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF",
                  borderRadius: "7.04px",
                },
                "&:hover fieldset": {
                  borderColor: "#FFFFFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.23)",
                },
              },
              "& input": {
                color: "white",
              },
              "& input::placeholder": {
                color: "#CCCCCC", // Placeholder color
                opacity: 1, // Ensure the opacity doesn't make the placeholder lighter
              },
            }}
          />

          <TextField
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="Business email"
            variant="outlined"
            fullWidth
            className="bg-transparent"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF",
                  borderRadius: "7.04px",
                },
                "&:hover fieldset": {
                  borderColor: "#FFFFFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.23)",
                },
              },
              "& input": {
                color: "white",
              },
              "& input::placeholder": {
                color: "#CCCCCC", // Placeholder color
                opacity: 1, // Ensure the opacity doesn't make the placeholder lighter
              },
            }}
          />

          <div className="flex gap-4">
            <TextField
              select
              defaultValue="+123"
              variant="outlined"
              className="w-24 bg-transparent"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FFFFFF",
                    borderRadius: "7.04px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.23)",
                  },
                },
                "& .MuiSelect-select": {
                  color: "white",
                },
              }}
            >
              <MenuItem value="+123">+123</MenuItem>
            </TextField>

            <TextField
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number"
              variant="outlined"
              fullWidth
              className="bg-transparent"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "0.8px solid",
                    borderColor: "#FFFFFF",
                    borderRadius: "4px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.23)",
                  },
                },
                "& input": {
                  color: "white",
                },
                "& input::placeholder": {
                  color: "#CCCCCC", // Placeholder color
                  opacity: 1, // Ensure the opacity doesn't make the placeholder lighter
                },
              }}
            />
          </div>

          <TextField
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help?"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            className="bg-transparent"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "0.8px",
                  borderColor: "#FFFFFF",
                  borderRadius: "7.04px",
                },
                "&:hover fieldset": {
                  borderColor: "#FFFFFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.23)",
                },
              },
              "& textarea": {
                color: "white",
              },
              "& textarea::placeholder": {
                color: "#CCCCCC", // Placeholder color
                opacity: 1, // Ensure the opacity doesn't make the placeholder lighter
              },
            }}
          />

          <Button
            sx={{ background: "#FFFFFF", color: "#000", padding: "0.99rem" }}
            type="submit"
            variant="contained"
            fullWidth
            className="hover:bg-white/90 py-3 text-base normal-case rounded"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
