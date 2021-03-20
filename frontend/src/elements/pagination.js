import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';
import Link from '@material-ui/core/Link';
import {Pagination} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: 30,

    },
  },
}));

export default function PaginationComponent({pages,page,isAdmin=false,keyword = ''}) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return  pages > 1 &&  (
    <div className={classes.root}>
   
        <Pagination>
            {[...Array(pages).keys()].map(x=> (
              <LinkContainer key={x+1} to={keyword ? `/search/${keyword}/page/${x+1}`: `/page/${x+1}`} >
                <Pagination.Item active={x+1 === page}>{x+1}</Pagination.Item>

              </LinkContainer>
            ))}
          </Pagination> 

    </div>
  );
}