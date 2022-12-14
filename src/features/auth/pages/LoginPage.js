import { Box, Button, CircularProgress, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../authSlice";

const useStyle = makeStyles((theme) =>({
    root:{
        display: 'flex',
        flexFlow :'row nowrap',
        justifyContent: 'center',
        alignItems :'center',
        minHeight: '100vh'
    },
    box:{
        padding : theme.spacing(4),
    },
    boxBtn:{
        marginTop : 16,
    }
}))
function LoginPage() {
    const classes =useStyle();
    const dispatch = useDispatch();
    const isLogging = useSelector((state) => state.auth.logging)
    const handleLoginClick =() =>{
        dispatch(authActions.login({
            userName:"",
            password: ""
        }));
    }

    return ( <div className={classes.root}>
        <Paper elevation={1} className={classes.box}>
            <Typography  variant="h5" component='h1' >
                Student Manager
            </Typography>
            <Box className={classes.boxBtn} >
                <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
                {isLogging && <CircularProgress size={20} color="secondary" />} &nbsp;
                    Fake Login</Button>
            </Box>
        </Paper>
    </div> );
}

export default LoginPage;