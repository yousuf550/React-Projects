import React, { useState } from 'react'
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyle = makeStyles({
    root: {
        background: "linear-gradient(45deg, #D2122E, #A51C30)",
        border: 0,
        margin: 15,
        borderRadius: 10,
        color: "white",
        padding: "10px 20px",
    }
})

function ButtonStyled() {
    const classes = useStyle();
    return <button
        className={classes.root}>
        Test Style Button
    </button>
}

export const MUI = () => {
    const [checked, setChecked] = React.useState(true)
    let customStyle = {
        background: "#FFEBE7",
        padding: "10px",
        margin: "15px 0",
    }
    return (

        <div style={customStyle}>
            <h2>Material UI Practice</h2>
            <ButtonStyled />
            <TextField
                // variant='outlined'
                color='secondary'
                type="email"
                label="Email"
                placeholder="testing@gmail.com"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        // color='primary'
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                }
                label="Testing Checkbox"
            />

            <ButtonGroup variant="contained" size='large'>
                <Button
                    endIcon={<SaveIcon />}
                    href="#"
                    color="primary"
                    size='large'
                >
                    Save
                </Button>
                <Button
                    endIcon={<DeleteIcon />}
                    href="#"
                    color="secondary"
                >
                    Discard
                </Button>
            </ButtonGroup >



        </div >


    )
}
