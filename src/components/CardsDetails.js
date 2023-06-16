import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DELETE , ADD , REMOVE_SINGLE} from '../redux/actions/action'



const CardsDetails = () => { 
  const navigate = useNavigate()

  const [data, setData] = useState([])
  // console.log(data , "hello")

  const getData =  useSelector((state) => state.cartReducer.carts)
  // console.log(getData)

  const dispatch = useDispatch() ;


  const {id} = useParams()
  // console.log(id);

  const compareFunction = () =>{
    let compareData = getData.filter((e)=>{
      return e.id == id
    })
    setData(compareData)
  }

  const deleteHandler = (id) => {
    dispatch(DELETE(id)) ;
    navigate("/")
  }

  const send = (e) => {
    // console.log(e) 
    dispatch(ADD(e))
}

  const deleteitem = (e) => {
    // console.log(e) 
    dispatch(REMOVE_SINGLE(e))
}

useEffect(()=>{
    compareFunction()
},[id])


  return (


    <div className="container mt-2">
      <h2 className='text-center'>Iteams Details Page
      </h2>
      <section className='container mt-3'>
        {data.map((e)=>(


  <div className="iteamsdetails">


  <div className="items_img">
    <img src={e.imgdata} alt="" />
  </div>

  <div className="details">
    <Table>
      <tr>
        <td>
          <p> <strong>Restaurant</strong>  : {e.rname}</p>
          <p> <strong>Price</strong>  : ₹ {e.price}</p>
          <p> <strong>Dishes</strong>  :{e.address} </p>
          <p> <strong>Total</strong>  :₹ {e.price * e.qnty} </p>
          <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
            <span style={{ fontSize: 24 }} onClick={e.qnty <=1 ? ()=>deleteHandler(e.id) :()=> deleteitem(e)}>-</span>
            <span style={{ fontSize: 22 }}>{e.qnty}</span>
            <span style={{ fontSize: 24 }} onClick={()=> send(e)}>+</span>

          </div>

        </td>
        <td>

          <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 7px", borderRadius: "5px" }}> {e.rating}★	</span></p>
          <p><strong>Order Review : </strong> <span >	{e.somedata}</span></p>


          <p ><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => deleteHandler(e.id)}></i>	</span></p>
        </td>
      </tr>
    </Table>
  </div>





</div>

      
))}
      </section>
    </div>
  )
}

export default CardsDetails