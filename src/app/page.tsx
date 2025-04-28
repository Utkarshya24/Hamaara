import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <div >
      <Hero/>
    
      {/* Instrument Serif Font */}
     

      <h1 className="fonts-instrument-serif font-[65px] italic  text-center mb-4">
        Instrument Serif - Hamaara
      </h1>

      {/* DM Sans Font */}
      <h2 className="font-dm-sans  text-center mb-4">
        DM Sans - Hamaara
      </h2>

      {/* Inter Font */}
      <h3 className="font-inter  text-center mb-4">
        Inter - Hamaara
      </h3>

      {/* Montserrat Font */}
      <h4 className="font-montserrat  text-center mb-4">
        Montserrat - Hamaara
      </h4>

      {/* Roboto Font */}
      <h5 className="font-roboto  text-center mb-4">
        Roboto - Hamaara
      </h5>

      {/* Manrope Font */}
      <h6 className="font-manrope  text-center mb-4">
        Manrope - Hamaara
      </h6>

      {/* Geist Font */}
      <p className="font-geist  text-center mb-4">
        Geist - Hamaara
      </p>

      {/* Default Paragraph with Inter Font */}
      <p className="font-inter  text-center mb-4">
        Inter Font - This is a sample paragraph using the Inter font family.
      </p>

      {/* Default Paragraph with DM Sans Font */}
      <p className="font-dm-sans  text-center mb-4">
        DM Sans Font - This is a sample paragraph using the DM Sans font family.
      </p>
      
    </div>
  );
}
