import React, { Component } from "react";

import "./../../bootstrap.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggenIn: false,
    };
  }

 

  render = () => {
    return (
        
		<section id="footer">
		<div className="container">
	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="#!" onClick={ () => { window.open("https://www.facebook.com/profile.php?id=100009084205665")}}><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="#!" onClick={ () => { window.open("https://www.instagram.com/shihara_dil/")}}><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="#!" onClick={ () => { window.open("https://www.linkedin.com/in/shihara-dilshan-5297711a4/")}}><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a href="#!" onClick={ () => { window.open("https://github.com/Shihara-Dilshan")}}><i className="fa fa-github"></i></a></li>
						<li className="list-inline-item"><a href="#!" onClick={ () => { window.open("https://stackoverflow.com/users/13052660/shihara-dilshan")}}><i className="fa fa-stack-overflow"></i></a></li>
					</ul>
				</div>
				<hr />
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/">NoobStack </a></u> is an education platform created by Shihara Dilshan, This entire project is built with JavaScript. </p>
					<p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" >NoobStack</a></p>
				</div>
				<hr />
			</div>	
		</div>
	</section>

	
    );
  };
}

export default Footer;
