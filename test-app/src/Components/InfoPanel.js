import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundColor: "#CAE1FF",
    maxWidth: 1000,
    margin: "30px",
}));

const useStyle = makeStyles({
    title:{
        color:"#0096FF"
    }
})  


export default function InfoPanel() {
    const classes = useStyle()
    const [GlobaData, setGlobalData] = useState({});

    useEffect(() => {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
            headers: {
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
                'X-RapidAPI-Key': '9511630625mshc9e6f0a5aaf06cdp19e8bajsnbf9118d8bb46'
            }
        };

        axios.request(options).then(function (response) {
            let data = response.data.data;
            delete data.recovered;
            delete data.lastChecked;
            delete data.lastReported;
            setGlobalData(data)
            console.log(data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                {Object.keys(GlobaData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Item elevation={3}>
                                <h3 className={classes.title}>{key.toUpperCase()}</h3>
                                <h4>{GlobaData[key]}</h4>
                            </Item>
                        </Grid>
                    )
                })}
            </Grid>
        </Box >
    );
}
