const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            className="w-3/4 rounded-lg "
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="font-bold text-3xl text-[#0058A0] pb-3">About Us</h2>
          <h1 className="text-5xl font-bold">
            Curating Fashion Experiences, Not Just Clothes
          </h1>
          <p className="py-6 text-justify px-3">
            Welcome to Glamour X, where style meets sophistication in the world
            of fashion. Our journey began with a passion for curating a
            collection that embodies elegance, trendiness, and individuality. At
            Glamour X, we believe that fashion is not just about clothing; it's
            a form of self-expression, a way to showcase your personality and
            uniqueness to the world.
          </p>
          <p className="py-6 text-justify px-3">
            Founded with a commitment to bringing you the latest in fashion,
            Glamour X is your go-to destination for chic and on-trend apparel.
            Our carefully curated selection of clothing reflects a dedication to
            quality and craftsmanship, ensuring that every piece you find at
            Glamour X not only makes a statement but also stands the test of
            time. Whether you're looking for the perfect outfit for a special
            occasion or updating your wardrobe with the latest fashion
            essentials, Glamour X is here to inspire and elevate your style
            journey. Join us in celebrating the beauty of fashion and discover a
            world where glamour knows no bounds.
          </p>
          <button className="btn btn-primary">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
