import React from 'react'
import { connect } from 'react-redux'

import MenuItem from "../menu-item/menu-item.component"

import './directory.styles.scss'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'


const Directory = ({sections}) => {
  return (
      <div className='directory-menu'>
        {
          sections.map(({id, ...rest})=>{
            return(
              <MenuItem key={id} {...rest}/>
            )
          })
        }
      </div>
    )
}

const MapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(MapStateToProps)(Directory)
