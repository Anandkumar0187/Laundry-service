import "./cancelAlert.css"
const CancelAlert = ({ id, setOpenModal }) => {
  const caneclOrder = () => {
    fetch(`http://localhost:8080/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI5OGM5NWRiODk1ODk4MjcxMmY4YjkiLCJpYXQiOjE2NjM3NDcwMzUsImV4cCI6MTY2NDM1MTgzNX0.YQxy2QAOtJz1W2V-iry6cT_672UjOg0WU6C4czH4R4o"
      },
    })
    setOpenModal(false)
    window.location.reload()

  }
  return (
    <>
      <div className="cancelParentp1">

        <div className="canceldiv1">

        </div>
        <div className="cancelcontainerp1">
          <div className="cancelHeaderp1">
            <p className="summaryp1">Alert</p>

            <button onClick={() => { setOpenModal(false) }} className="crossbtn" >╳</button>

          </div>
          <div className="alertcontainer">
            <div>
              <img className="dangerimage" src="./images/dangericon.png" alt="dangericon" height="33" width="33" />
            </div>
            <div className="warning">
              <div>Are you sure want to cancel the</div>
              <div className="orderno">Order No. {id}</div>

            </div>
          </div>
          <div className="cancelbtnp">
            <button onClick={() => { caneclOrder() }} className="proceedbtn">Proceed</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CancelAlert;
