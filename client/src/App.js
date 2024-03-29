import React,{useEffect,useState} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import memories from './images/memories.png'
import useStyles from "./styles"
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts';

function App() {
    const [currentId,setCurrentId]=useState(null)
    const classes=useStyles()
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])
  
    return (
       <Container maxidth='lg'>
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
                Memories 
            </Typography>
            <img  className={classes.image} src={memories} alt="memores" height="50" />
        </AppBar>
        <Grow in>
            <container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                        </Grid> 
                        <Grid item xs={12} sm={5}>
                            <Form setCurrentId={setCurrentId} currentId={currentId}/>
                        </Grid> 

                </Grid>
            </container>
        </Grow>
       </Container>
    )
}

export default App