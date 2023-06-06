import React from 'react'
import LocationMarker from '../src/assets/location-marker.svg'


export default (props) => {
  let flag
    if (props.country === "Argentina") {
      flag = "Argentina"
    } else if (props.country === "Chile") {
      flag = "Chile"
    } else if (props.country === "Peru") {
      flag = "Peru"
    } else {
      flag = "Colombia"
    }
    const flagStyle = {
      background: `url("Flag-${flag}.jpg") no-repeat center `
    }
    const coverImg = {
      background: `url("${props.img}") no-repeat center `
    }

  return (
      <div className='card'>
        <div className="cover--img" style={coverImg}></div>
        {/* <img src={props.img} className='cover--img'/> */}
        <div className="content">
          <div className="top--details">
            {/* <img src={LocationMarker} className='location--marker'/> */}
            <div className="flag" style={flagStyle}></div>
            <a href={props.link}><p className="location">{props.country}</p></a>
          </div>
          <h1>{props.location}</h1>
          <p><b>{props.date.start} - {props.date.end}</b></p>
          <p>{props.description}</p>
        </div>
      </div>
  )
}