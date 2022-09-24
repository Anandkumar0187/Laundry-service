

import "./orderSummary.css"


const OrderSummary = ({ arr, order, setOpenModal, setCancel }) => {
  const data = arr.find(o => o.orderid === order)
  let btnid = "hidden"
  if (data.status === "Ready to pickup") {
    btnid = "nothidden"
  }


  return (
    <>
      <div className="summodal">
        <div className="div1">

        </div>
        <div className="modalBackground">
          <div className="summHeader">
            <h4 className="summary">Summary</h4>
            <button onClick={() => { setOpenModal(false) }} className="crossbtn">╳</button>
          </div>
          <div className="storeInfo">
            <div className="ch1">
              <h6 className="heading">Store Location</h6>
              <p>{data.StoreInformation.storeLocation}</p>
            </div>
            <div className="ch1">
              <h6 className="heading">Store Address:</h6>
              <p>{data.StoreInformation.storeAddress}</p>
            </div>
            <div className="ch1">
              <h6 className="heading">Phone</h6>
              <p>{data.StoreInformation.phone}</p>
            </div>
          </div>
          <div className="statusdiv">
            <div className="orderststus"><span className="status">Order status </span> : {data.status}</div>
          </div>
          <div>
            <h5 className="orderdetail">Order Details</h5>
            {data.Ord}
          </div>

          <div className="address">

            <table className="table table-striped">
              <tbody>
                {data.Orders.map((obj, i) => {
                  return (
                    <tr key={i}>
                      <td>{obj.name}</td>
                      {obj.washes.map((sub, j) => {
                        return (
                          <td className="cloths" key={j}>{sub.name}</td>
                        )
                      })}
                      <td>{obj.quantity}</td>
                      <td>{obj.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="totalStrip">
              <div className="rightfloat">
                <div><span className="total">Total:</span><span className="totalprice">Rs {data.totalPrice}</span></div>
              </div>
            </div>
            <h5 className="adresshead">Address:</h5>
            <div className="addresscontainer">

              <div className="home">Home</div>
              <div>{localStorage.getItem('address')}</div>

            </div>
          </div>
          <div id={btnid} className="btndiv">
            <button onClick={() => {
              setCancel(true)
              setOpenModal(false)
            }
            } className="cancelbtn">Cancel Order</button>
          </div>
        </div>
      </div>
    </>
  )


}
export default OrderSummary;
