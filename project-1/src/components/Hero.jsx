const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="HeroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Catagory</button>
        </div>

        <div className="Shopping">
          <p>Also available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipcart" />
          </div>
        </div>
      </div>
      <div className="HeroHeroImage">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default HeroSection;
