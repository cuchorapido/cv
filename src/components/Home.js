import React from 'react';
import { connect } from 'react-redux';
import { Resume } from 'react-vitae-material-theme';
import res from '../fixtures/resume'
import '../css/custom.css';
 
const Home = ({ props }) => (
  <Resume resume={res} />   
);

export default connect()(Home);
 