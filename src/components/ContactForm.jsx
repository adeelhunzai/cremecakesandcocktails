import { TextField, Button, MenuItem } from "@mui/material";

export default function ContactForm() {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-3">
          Contact us Today for Our
          <br />
          Catalogue of Catering Products!
        </h2>

        <form className=" border-[1px] border-solid border-[#FFFFFF] rounded-[6.92px] p-4 max-w-[34.375rem] mx-auto space-y-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
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
                "& .MuiSelect-select::placeholder": {
                  color: "#CCCCCC", // Placeholder color
                  opacity: 1, // Ensure the opacity doesn't make the placeholder lighter
                },
              }}
            >
              <MenuItem value="+123">+123</MenuItem>
            </TextField>

            <TextField
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
            className=" hover:bg-white/90 py-3 text-base normal-case rounded "
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
