import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    const apiUrl = process.env.REACT_APP_API_URL;
    await fetch(`${apiUrl}/api/myOrderData`, {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });

    // await res.map((data)=>{
    //    console.log(data)
    // })
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div >
    <div
      style={{
        backgroundImage:
          'url("https://c4.wallpaperflare.com/wallpaper/192/942/370/pepper-red-hot-food-wallpaper-preview.jpg")',
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <div>
        <Navbar />
      </div>

      <div className="container" >
        <div className="row">
          {orderData !== {}
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data
                      .slice(0)
                      .reverse()
                      .map((item) => {
                        return item.map((arrayData) => {
                          return (
                            <div>
                              {arrayData.Order_date ? (
                                <div className="m-auto mt-5">
                                  {(data = arrayData.Order_date)}
                                  <hr />
                                </div>
                              ) : (
                                <div className="col-12 col-md-6 col-lg-3">
                                  <div
                                    className="card mt-3"
                                    style={{
                                      width: "18rem",
                                      maxHeight: "400px",
                                    }}
                                  >
                                    {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {arrayData.name}
                                      </h5>
                                      <div
                                        className="container w-100 p-0"
                                        style={{ height: "80px" }}
                                      >
                                        <span className="m-2">
                                          {arrayData.qty}
                                        </span>
                                        <span className="m-2">
                                          {arrayData.size}
                                        </span>
                                        <span className="m-1" > at {data}</span>
                                        <div className="m-3">
                                        <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                          Total Price : {arrayData.price}/-
                                        </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })
                  : "";
              })
            : ""}
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
}
