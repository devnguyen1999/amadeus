import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBlock from "../components/ProductBlock";
import axios from "axios";
import { useForm } from "react-hook-form";
import Carousel from "../components/Carousel";

function Search(props) {
  // console.log(props.location.state);
  // const [stt, setStt] = useState(0);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.post(
  //       `https://amadeuss.herokuapp.com/products/search`,
  //       {
  //         keySearch: props.location.state.keySearch,
  //       }
  //     );
  //     setProducts(response.data);
  //     console.log(products);
  //   })();
  // }, []);

  const [stt, setStt] = useState(0);
  const [products, setProducts] = useState([]);
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    axios
      .post(`https://amadeuss.herokuapp.com/products/search`, {
        keySearch: values.keySearch,
      })
      .then((response) => {
        setLoading(false);
        setProducts(response.data);
        console.log(products);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  const ascending = (event) => {
    let handled = products;
    for (let i = 1; i < handled.length; i++) {
      let j = i - 1;
      let temp = handled[i];
      while (j >= 0 && handled[j].price > temp.price) {
        handled[j + 1] = handled[j];
        j--;
      }
      handled[j + 1] = temp;
    }
    setProducts(handled);
    setStt(1);
  };
  const decrease = () => {
    let handled = products;
    for (let i = 1; i < handled.length; i++) {
      let j = i - 1;
      let temp = handled[i];
      while (j >= 0 && handled[j].price < temp.price) {
        handled[j + 1] = handled[j];
        j--;
      }
      handled[j + 1] = temp;
    }
    setProducts(handled);
    setStt(2);
  };
  const latest = () => {};
  return (
    <div>
      <Header />
      <Carousel/>
      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-md-3 pr-3">
            <h4 className="text-white mt-3">Sắp xếp sản phẩm</h4>
            <hr className="border-white mt-2" />
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link text-white sort-menu"
                type="button"
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                onClick={(event) => {
                  ascending(event);
                }}
              >
                Giá tăng dần
              </a>
              <a
                className="nav-link text-white sort-menu"
                type="button"
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                onClick={(event) => {
                  decrease(event);
                }}
              >
                Giá giảm dần
              </a>
              {/* <a
                className="nav-link text-white sort-menu"
                type="button"
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                onClick={(event) => {
                  latest(event);
                }}
              >
                Mới nhất
              </a> */}
            </div>
          </div>
          <div className="col-12 col-md-9 pl-5 mt-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="input-group form-inline mb-3 w-100"
            >
              <input
                name="keySearch"
                ref={register({
                  required: "Từ khoá không được để trống",
                })}
                className="form-control mr-sm-2"
                placeholder="Nhập tên sản phẩm muốn tìm kiếm..."
                type="search"
              />
              <input
                type="submit"
                className="btn btn-success"
                value={loading ? "Loading..." : "Tìm kiếm"}
                disabled={loading}
              />
            </form>
            {products.map((value, key) => {
              return (
                <ProductBlock
                  key={key}
                  prID={value.id}
                  prImg={value.img}
                  prTitle={value.name}
                  prPrice={value.price}
                  prFake={value.priceFake}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
