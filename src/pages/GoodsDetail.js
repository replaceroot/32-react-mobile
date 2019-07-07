import React, { Component, Fragment } from 'react';
 class GoodsDetail extends Component { 
 render() { 
 return ( 
 <Fragment>
   {this.props.match.params.id}
 </Fragment> 
 );  
} 
 } 
 export default GoodsDetail;

