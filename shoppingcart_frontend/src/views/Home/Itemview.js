import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { PinDropSharp } from '@material-ui/icons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Home from '@material-ui/icons/Home';    
import { Notifications } from '@material-ui/icons';  
import ContactsIcon from '@material-ui/icons/Contacts'; 
import PhoneIcon from '@material-ui/icons/Phone';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Pizza Shop
          </Typography>
          <div style ={{ 'paddingLeft': "1600px"}}>
            <Home/> 
          </div>
          <div style ={{ 'paddingLeft': "20px"}}>
          <Notifications/>  
           </div>
           <div style ={{ 'paddingLeft': "20px"}}>
           <PhoneIcon/>
           </div>
           <div style ={{ 'paddingLeft': "20px"}}>
           <AddShoppingCartIcon/>
           </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Wellcome to Pizza Shop
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about t
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.state.products.length !==0 ? props.state.products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.imgURL}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                    </Typography>
                    <Typography>
                    {product.discription}
                    </Typography>
                    <Typography>
                    {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="#000000" style={{backgroundColor: "#8bc34a"}}>
                      <Link href="http://localhost:3000/pricing">AddToCart</Link>
                    </Button>
                    <Button size="small" color="#000000" style={{backgroundColor: "#ffc107"}}>
                      <Link href="http://localhost:3000/checkout">Checkout</Link>
                    </Button> 
                  </CardActions>
                </Card>
              </Grid>
            )):null}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
     
    </React.Fragment>
  );
}