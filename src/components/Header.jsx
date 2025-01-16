import { AppBar, Toolbar, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
  return (
    <>
      <div className="w-full bg-black text-white text-center py-2 text-sm">
        Free priority shipping to business customers within Europe
      </div>
      <AppBar position="static" className="bg-[#FFD700]">
        <Toolbar className="justify-between">
          <img 
            src="/logo.png" 
            alt="Creme Cakes & Cocktails" 
            className="h-12"
          />
          <div className="flex items-center gap-4">
            <span className="text-black">Catalogue</span>
            <IconButton>
              <LanguageIcon className="text-black" />
            </IconButton>
            <IconButton>
              <ShoppingBagIcon className="text-black" />
            </IconButton>
            <IconButton>
              <WhatsAppIcon className="text-black" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

