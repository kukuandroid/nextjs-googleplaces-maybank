import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const Input = ({ type, placeholder }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default Input
