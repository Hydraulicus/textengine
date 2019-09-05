import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import mascots from './../../assets/logos'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    cursor: 'pointer',
    textTransform: 'capitalize',
    width: 450,
    // height: 450,
    // padding: '50px 30px',
  },
  gridListTile: {
  },
  info: {
    fontSize: '0.5rem'
  },
  mascotImg: {
    height: '120px',
    width: '120px',
    border: '#555 2px solid',
    borderRadius: '5px',
  }
}));

const tileData = [
       {
           img: mascots.elephant,
           title: 'elephant',
           author: 'Nature',
         },
       {
           img: mascots.horse,
           title: 'horse',
           author: 'Nature',
         },
       {
           img: mascots.rooster,
           title: 'rooster',
           author: 'Nature',
         },
       {
           img: mascots.react,
           title: 'react',
           author: 'Facebook',
         },
       {
           img: mascots.ninja,
           title: 'ninja',
           author: 'Historic',
         },
];


export default function ({eventHandler}) {
  const classes = useStyles();


  return (
    <div className={classes.root}>

      <Typography variant="h6" className={classes.title} color="primary">
        Please choose mascot
      </Typography>

      <GridList cellHeight={150} spacing={3} cols={3} className={classes.gridList} >
        {tileData.map(tile => (
          <GridListTile key={tile.img} className={classes.gridListTile}>
            <img
              className={classes.mascotImg}
              src={tile.img}
              alt={tile.title}
              onClick={ e => {
                eventHandler(
                  {
                    mascots: {id: e.target.alt}
                  }
                  )
              } }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}