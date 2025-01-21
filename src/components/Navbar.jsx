import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/34610697230?text=Hello%20there!", "_blank");
  };

  return (
    <>
      <div className="w-full bg-[#2E2810] text-white text-center py-2 text-xs sm:text-sm font-light">
        Free priority shipping to business customers within Europe
      </div>
      <AppBar
        sx={{ backgroundColor: "#FFD700", padding: "0.5rem" }}
        position="static"
        className="bg-[#FFD700] !important shadow-none"
      >
        <Toolbar className="container mx-auto px-4">
          <div className="flex justify-between items-center w-full">
            <img
              src={logo}
              alt="Creme Cakes & Cocktails"
              className="h-10 sm:h-14"
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div className="hidden sm:flex items-center justify-between md:min-w-[60%] lg:min-w-[80%] ">
                <span className="text-black text-base font-semibold ml-6 md:ml-20">
                  Catalogue
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0">
                    <IconButton sx={{ padding: "0px" }}>
                      <LanguageIcon className="  text-black w-6 h-6" />
                    </IconButton>
                    <IconButton sx={{ padding: "0px" }}>
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </div>
                  <IconButton
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent", // Remove the hover background color
                      },
                    }}
                  >
                    <PermIdentityIcon
                      fontSize="inheirt"
                      style={{ fontSize: "32px" }}
                      className="border-solid border-[1px] border-customBorder  rounded-[4px] p-1 text-black w-6 h-6  hover:bg-hoverColor"
                    />
                  </IconButton>
                  <IconButton
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent", // Remove the hover background color
                      },
                    }}
                  >
                    <WhatsAppIcon
                      fontSize="inheirt"
                      onClick={handleWhatsAppClick}
                      style={{ fontSize: "32px" }}
                      className="border-solid border-[1px] border-customBorder rounded-[4px] p-1 text-black w-6 h-6  hover:bg-hoverColor"
                    />
                  </IconButton>
                </div>
              </div>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                sx={{ marginLeft: "auto" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#000" }} />
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Catalogue</MenuItem>
              <MenuItem onClick={handleClose}>Language</MenuItem>
              <MenuItem onClick={handleClose}>Cart</MenuItem>
              <MenuItem onClick={handleClose}>WhatsApp</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
