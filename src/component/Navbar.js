import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='d-flex justify-content-between' style={{paddingRight:30,paddingLeft:30,paddingTop:10,paddingBottom:5,backgroundColor:'#f0f0f0'}}>
            <div className='d-flex align-items-center'>
                <h3>Dibiatek</h3>
            </div>
            <div className='d-flex justify-content-end' style={{ padding:10}}>
                <Link to="/" style={{ paddingRight: 10, fontSize: 20,color:"#000",textDecoration:'none'}}>Home</Link>
                <Link to="/About" style={{ paddingRight: 10, fontSize: 20, color: "#000", textDecoration: 'none' }}>About</Link>
                <Link to="/Contact" style={{ paddingRight: 10, fontSize: 20, color: "#000", textDecoration: 'none' }}>Contact</Link>
                <Link to="/DibatesForm" style={{ paddingRight: 10, fontSize: 20, color: "#000", textDecoration: 'none'}}>Form</Link>
            </div>
        </div>
    )
}

export default Navbar

