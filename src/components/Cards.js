import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import { useState } from 'react';
import './style.css'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action'; // ACTION IMPORTED



const Cards = () => {

  const [data, setData] = useState(Cardsdata)



    const dispatch = useDispatch(); // dispatch is used for calling actions


  const send = (e) => {
        // console.log(e) 
        dispatch(ADD(e))
  }

  return (
    <>
      <div className='container mt-3'>

        <h2 className='text-center'>Add To Your Stomach</h2>

        <div className='row'>

          {data.map((element, id) => (

            <Card key={id} style={{ width: '19rem', border: "none" }} className="mx-2 mt-4 card_style">

              <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />

              <Card.Body>

                <Card.Title>{element.rname}</Card.Title>

                <Card.Text>
                  Price : ₹ {element.price}
                </Card.Text>

                <div className="button_div d-flex justify-content-center">

                  <Button variant="primary"
                    onClick={() => send(element)}
                    className='col-lg-12'>Add to Cart</Button>

                </div>

              </Card.Body>

            </Card>
          ))}

        </div>
      </div>
    </>
  )
}

export default Cards