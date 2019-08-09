import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import mascots from './../../assets/logos'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    cursor: 'pointer',
    textTransform: 'capitalize',
    width: 500,
    height: 450,
  },
  icon: {
    color: 'gray',
    backgroundColor: 'rgba(255, 255, 255, 0.54)',
    borderRadius: '50%',
    width: '1.2rem',
    height: '1.2rem',
    marginRight: '1rem'
  },
  info: {
    fontSize: '0.5rem'
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
];


export default function ({eventHandler}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Please choose mascot</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img} >
            <img
              src={tile.img}
              alt={tile.title}
              onClick={ e => { eventHandler({mascot: e.target.alt}) } }
            />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <span className={classes.info}>i</span>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}