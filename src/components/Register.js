const AboutUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 mb-4">About Us</h1>
            <p className="lead">Welcome to our restaurent.</p>
            <p>With our team of experienced professionals, we aim to make you fully satisfied.</p>
            <p>We have perfect cafe ,international recipe with cool stufs </p>
          </div>
          <div className="col-md-6">
            <div className="card border-0">
              <img src="/path/to/aboutus-image.jpg" alt="About Us" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Why Choose Us?</h5>
                <p className="card-text">
                  We provide top-notch food and lodge and personalized rooms to ensure a memorable experience for every traveler.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;