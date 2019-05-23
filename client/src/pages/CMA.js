import React from "react";
import CMAS from '../components/CMA';
import CMAForm from '../components/CMAForm';
import Navbar from '../components/Navbar';


function CMAView() {
    return (
      <div>
        <div>
        <Navbar />
        <CMAS />
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Comparative Market Analysis</h1>
    <p class="lead">A comparative market analysis is an examination of the prices at which similar properties in the same area recently sold. Property owners approached for land acquisition regarding the rail have accused Texas Central of heavy handed tactics negotiating purchase options. The proper CMA ensures you have done your homework to fully understand the value of your property; giving you the position to stand firm when an offer to acquire your land presents itself. Because Texas Central NEEDS your property for construction on the Texas High-Speed Rail, they could potentially try to undercut the value and worth of your home/property. Utilize our Comparative Market Analysis search tool to ensure you know just what your property is worth before accepting an offer.</p>
  </div>
</div>
        </div>
        <CMAForm />
    </div>
    );
}

export default CMAView; 
