import React from 'react'
import { useParams } from 'react-router'
import data from '../../sfpopos-data.js'
import './POPOSDetails.css'
import POPOSFeatureList from '../POPOSFeature/POPOSFeatureList'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]
  
  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`/images/${images}`} alt="" />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }</p>
        <p className="POPOSDetails-features">{ features }</p>
        <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
        <POPOSFeatureList features={features}/>
        <p className="POPOSDetails-geo">{ geo.lat }</p>
        
      </div>
    </div>
  )
}

export default POPOSDetails