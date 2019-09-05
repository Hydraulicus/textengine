import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import templates from './../../assets/templates'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
    backgroundColor: theme.palette.background.paper,
    height: '120px',
    width: '120px',
    border: '#555 1px solid',
    borderRadius: '5px',
  }
}));

// const tileData = [
//        {
//            img: mascots.elephant,
//          },
//
// ];


export default function ({eventHandler}) {
  const classes = useStyles();

console.log('templates =',templates)
  return (
    <div className={classes.root}>

      <Typography variant="h6" className={classes.title} color="primary">
        Please select template
      </Typography>

      <GridList cellHeight={150} spacing={3} cols={3} className={classes.gridList} >
        {templates.map(tile => (
          <GridListTile key={tile.id} className={classes.gridListTile}>
            <img
              className={classes.mascotImg}
              src={tile.img}
              alt={tile.id}
              onClick={ e => {
                eventHandler(
                  {
                    template: {id: e.target.alt}
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