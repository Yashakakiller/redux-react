import React, { useState , useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table'
import {DELETE} from '../redux/actions/action'
import { useDispatch } from 'react-redux'

const Header = () => {
  
  const [price, setPrice] = useState(0)
  console.log(price)
  const getData = useSelector((state) => state.cartReducer.carts)
  // console.log(getData)

  const dispatch = useDispatch();


  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteHandler = (id) => {
    dispatch(DELETE(id))
  }

  const total = () => {
      let price = 0 ;
      getData.map((e)=>{
        price = e.price * e.qnty  + price 
      })
      setPrice(price);
  }

  useEffect(()=>{
    total()
  },[total])

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>


          <Badge badgeContent={getData.length} color="primary" id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>

            <i className='fa-solid fa-cart-shopping text-light' style={{ cursor: "pointer", fontSize: 20 }}></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          {getData.length ? (
           <div className='card_details' style={{width:"24rem",padding:10}}>
            <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, cursor: "pointer" }} onClick={handleClose}> </i>
           <Table>
               {/* <thead>
                   <tr>
                       <th>Photo</th>
                       <th>Restaurant Name</th>
                   </tr>
               </thead> */}
               <tr>
                <th className='text-center'>Your FOOD Items</th>
                </tr>
               <tbody>
                   {
                       getData.map((e)=>{
                           return (
                               <div key={e.id}>
                                   <tr >
                                       <td>
                                       <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                       <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                       </NavLink>   
                                       </td>
                                       <td>
                                           <p>{e.rname}</p>
                                           <p>Price : ₹{e.price}</p>
                                           <p>Quantity : {e.qnty}</p>
                                           <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={() => deleteHandler(e.id)}>
                                               <i className='fas fa-trash smalltrash'></i>
                                           </p>
                                       </td>

                                       <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  >
                                       <i className='fas fa-trash largetrash' onClick={() => deleteHandler(e.id)}></i>
                                       </td>
                                   </tr>
                                  
                               </div>
                           )
                       })
                   }
                   <p className='text-center'>Total :₹ {price}</p>
               </tbody>
           </Table>
       </div>

          ) : (
            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem" }}>
              <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, cursor: "pointer" }} onClick={handleClose}> </i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              <img src="./cart.gif" className='emptycart_img' style={{ width: "5rem", padding: 10 }} alt="" />
            </div>
          )}

        </Menu>
      </Navbar>
    </>
  )
}

export default Header