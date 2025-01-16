import { Button } from '@mui/material';
import banner from "../assets/img/hero-bg.png"

export default function Hero() {
  return (
    <div 
    className="w-full min-h-[71.6rem] bg-black bg-cover bg-center"
    style={{ backgroundImage: `url(${banner})` }}
  >
      <div className="container mx-auto px-4 text-center pt-12 sm:pt-20 pb-8 sm:pb-12">
        <h1 className="text-3xl mt-[10.6rem] max-w-[49rem] m-auto : sm:text-5xl md:text-[5.12rem] font-bold mb-4 text-white">
          Explore the Flavours of Power
        </h1>
        <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto mt-[2.5rem]">
          Experience the ultimate burst of flavour with our premium gas canisters designed for those who seek quality in every use
        </p>
        <Button 
        sx={{background:"#FFD700"}}
          variant="contained" 
          className=" text-black hover:bg-[#FFD700]/90 px-6 sm:px-8 py-2 rounded-md text-sm sm:text-base font-medium"
        >
          Contact Us
        </Button>
      </div>
      <div className="w-full">
        {/* <img 
          src={banner} 
          alt="Product Canisters" 
          className="w-full h-auto"
        /> */}
      </div>
    </div>
  );
}

