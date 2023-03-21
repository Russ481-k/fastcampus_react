import React from 'react'
import PropTypes from 'prop-types'
function PropComponent(props) {
    return <div>{props.name}</div>
}
PropComponent.defaultProps = {
    name:'Russ',
    age:7,
}
PropComponent.propTypes={
    name: PropTypes.string,
    age: function(props, propName, componentName) {
        if(!/(7|8)/.test(props[propName])){
            console.log(componentName)
            return new Error(
                "Invalid prop `" + 
                propName + "` supplied to" + 
                "`" + componentName + "`. Validation failed."
            )
        }
    }
        //PropTypes.number.isRequired
}
export default function Component() {
  return (
    <PropComponent/>
  )
}
