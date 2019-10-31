// general
import Carousel from "./Carousel"
import HomeInfo from "./HomeInfo"
import React from "react"
import GridComponent from './GridComponent'
import VerticalTabs from "./VerticalTabs"
import ContactsForm from "./ContactsForm"
import MissionComponent from "./MissionComponent"
import Bullets from "./Bullets"
import PoweredBy from "./PoweredBy"
import Text from "./Text"

const Components = (componentId, props) => {
  const componentContent = props.content != null ? props.content.map(content => ({...content, imgSrc: content.imgSrc != null ? content.imgSrc.childImageSharp.fluid : null})) : null
  const style = props.style != null ? JSON.parse(props.style) : {}
  switch(componentId) {
    case "grid-component":
      return <GridComponent {...props} content={componentContent} style={style}/>
    case "carousel":
      return <Carousel {...props} content={componentContent} style={style}/>
    case "homeInfo":
      return <HomeInfo {...props} content={componentContent} style={style}/>
    case "verticalTabs":
      return <VerticalTabs {...props} content={componentContent} style={style}/>
    case "contactsForm":
      return <ContactsForm {...props} content={componentContent} style={style}/>
    case "missionComponent":
      return <MissionComponent {...props} content={componentContent} style={style}/>
    case "bullets":
      return <Bullets {...props} content={componentContent} style={style}/>
    case "poweredBy":
      return <PoweredBy {...props} content={componentContent} style={style}/>
    case "text":
      return <Text {...props} content={componentContent} style={style}/>
    default: return null
  }
}

export default Components