import React from "react";

function Carousel(props) {
  return (
    // <div
    //   id="carousel"
    //   className="carousel slide"
    //   data-ride="carousel"
    // >
    //   <ol className="carousel-indicators">
    //     <li
    //       data-target="#carousel"
    //       data-slide-to="0"
    //       className="active"
    //     ></li>
    //     <li data-target="#carousel" data-slide-to="1"></li>
    //     <li data-target="#carousel" data-slide-to="2"></li>
    //     <li data-target="#carousel" data-slide-to="3"></li>
    //     <li data-target="#carousel" data-slide-to="4"></li>
    //   </ol>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img
    //         className="d-block mx-auto"
    //         src="https://wongstore.com/uploads/2/2020-04/15615.jpg"
    //         alt="First slide"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         className="d-block mx-auto"
    //         src="https://wongstore.com/uploads/2/2020-02/new_project.jpg"
    //         alt="Second slide"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         className="d-block mx-auto"
    //         src="https://wongstore.com/uploads/2/2020-02/avenger2222.jpg"
    //         alt="Third slide"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         className="d-block mx-auto"
    //         src="https://wongstore.com/uploads/2/2020-02/2.jpg"
    //         alt="Fourth slide"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         className="d-block mx-auto"
    //         src="https://wongstore.com/uploads/2/2020-02/1.jpg"
    //         alt="Fifth slide"
    //       />
    //     </div>
    //   </div>
    //   <a
    //     className="carousel-control-prev"
    //     href="#carousel"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Previous</span>
    //   </a>
    //   <a
    //     className="carousel-control-next"
    //     href="#carousel"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Next</span>
    //   </a>
    // </div>
    <div id="carouselId" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselId" data-slide-to={0} className="active" />
        <li data-target="#carouselId" data-slide-to={1} />
        <li data-target="#carouselId" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            src="https://wongstore.com/uploads/2/2020-04/15615.jpg"
            alt="First slide"
            className="img-fluid d-block mx-auto"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://wongstore.com/uploads/2/2020-02/new_project.jpg"
            alt="Second slide"
            className="img-fluid d-block mx-auto"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://wongstore.com/uploads/2/2020-02/avenger2222.jpg"
            alt="Third slide"
            className="img-fluid d-block mx-auto"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselId"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselId"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
