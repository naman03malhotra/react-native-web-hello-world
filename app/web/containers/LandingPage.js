/** landing page js */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from '../../utils/storage';
import APIManager from '../../utils/APIManager';
import { API } from '../../configs/app_config';

import SignUp from '../components/landing/signup';

class LandingPage extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	};
	state = {
		open: false
	};
	handleRequestClose = () => {
		this.setState({ open: !this.state.open });
	};
	render() {
		const { open } = this.state;
		const { store } = this.props;
		return (
			<Provider store={store}>
				<div>
					<header id="header" className="sections">
						<div id="part" />
						<nav className="navbar navbar-inverse navbar-findcond">
							<div className="container">
								<div className="navbar-header">
									<button
										type="button"
										className="navbar-toggle collapsed"
										data-toggle="collapse"
										data-target="#navbar"
									>
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar" />
										<span className="icon-bar" />
										<span className="icon-bar" />
									</button>
									<a
										className="navbar-brand"
										href="#"
										title="Activate Lazy Scrolling "
									>
										<img
											src="/images/logo/alco-plain-wt.png"
											style={{ width: '160px', marginTop: '-6px' }}
											alt="Alconomy Logo"
										/>
									</a>
								</div>
								<div className="collapse navbar-collapse" id="navbar">
									<ul className="nav navbar-nav navbar-right">
										<li className="hvr-underline-from-center">
											<a href="#getStated">Get Started</a>
										</li>

										<li className="hvr-underline-from-center">
											<a title="+91 98999 13649"> +91 98999 13649</a>
										</li>

										<li className="hvr-underline-from-center">
											<a href="mailto:care@alconomy.com">care@alconomy.com</a>
										</li>

										<li
											className="hvr-float-shadow active"
											style={{ cursor: 'pointer' }}
										>
											<a onClick={this.handleRequestClose}>Sign In/Sign Up</a>
										</li>
									</ul>
								</div>
							</div>
						</nav>

						<div
							id="top-content"
							className="wow bounceInUp"
							data-wow-delay="0.2s"
							data-wow-duration="1.5s"
						>
							<h2 className="text-bold">BUY AND SELL DIGITAL CURRENCY</h2>
							<br />
							<h4 id="texterX">
								Alconomy - The Alternate Economy <br /> is South Asia's easiest
								way to buy and sell bitcoin.
							</h4>
							<br />
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-4" />
									<div className="col-md-4">
										<a
											className="btn-block btn btn-lg btn-default btn-cta"
											onClick={this.handleRequestClose}
										>
											Get Started
										</a>
										<br />
										<div className="row">
											<div className="col-md-12 col-xs-12 text-center">
												<a
													href="https://www.youtube.com/watch?v=Um63OQz3bjo"
													target="_blank"
												>
													New to bitcoin?
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>

					<section className="sectionsFull" id="getStated">
						<div className="container-fluid">
							<div className="row">
								<h3 className="section-heading text-center">
									How to get started?
								</h3>
								<hr className="primary" />
							</div>
							<div
								className="row wow fadeInUp"
								data-wow-delay="0.2s"
								data-wow-duration="1s"
							>
								<div className="col-md-7">
									<div className="row" onClick={this.handleRequestClose}>
										<div className="col-md-2">
											<div className="stepnumber">
												<div className="number">1</div>
											</div>
										</div>
										<div className="col-md-10">
											<div className="steptext">
												<div className="numberlabel">Sign Up</div>
												<p>
													Create a digital currency wallet where you can
													securely store digital currency.
												</p>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-2">
											<div className="stepnumber">
												<div className="number">2</div>
											</div>
										</div>
										<div className="col-md-10">
											<div className="steptext">
												<div className="numberlabel">Connect</div>
												<p>
													Connect your bank account, debit card, or credit card
													so that you can exchange digital currency into and out
													of your local currency.
												</p>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-2">
											<div className="stepnumber">
												<div className="number">3</div>
											</div>
										</div>
										<div className="col-md-10">
											<div className="steptext">
												<div className="numberlabel">Buy Bitcoin</div>
												<p>
													Buy some bitcoin to begin using the future of money.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<img className="img-responsive" src="/images/signup.png" />
								</div>
							</div>
						</div>
					</section>

					<section className="sections" id="work">
						<div className="container-fluid">
							<div className="row">
								<h3 className="section-heading text-center">Why Alconomy?</h3>
								<hr className="primary" />
							</div>
							<div
								className="row wow fadeInUp"
								data-wow-delay="0.2s"
								data-wow-duration="1s"
							>
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-12">
											<div className="row featurebox">
												<div className="col-md-2">
													<img src="/images/icons/wallet.png" />
												</div>
												<div className="col-md-10">
													<div className="numberlabel">mobile wallet</div>
													<p>
														Our Web App also runs on any Android or iPhone
														browser as progressive web app
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-12">
											<div className="row featurebox">
												<div className="col-md-2">
													<img src="/images/icons/instant.png" />
												</div>
												<div className="col-md-10">
													<div className="numberlabel">Instant Exchange</div>
													<p>
														Send and receive digital currency that is
														immediately exchanged to your local currency.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-12" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-12">
											<div className="row featurebox">
												<div className="col-md-2">
													<img src="/images/icons/secure.png" />
												</div>
												<div className="col-md-10">
													<div className="numberlabel">secure storage</div>
													<p>
														We store the vast majority of the digital assets in
														secure offline storage.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-12">
											<div className="row featurebox">
												<div className="col-md-2">
													<span className="fa fa-money" />
												</div>
												<div className="col-md-10">
													<div className="numberlabel">CHEAPEST PRICE</div>
													<p>
														We have proprietary algorithms to determine the
														cheapest possible price of bitcoin.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-12" />
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="sections" id="sponsor">
						<div className="container-fluid">
							<div className="row">
								<h3 className="section-heading text-center">Powered By</h3>
								<hr className="primary" />
							</div>
							<div className="row">
								<div className="col-md-12 text-center">
									<a
										target="_blank"
										href="https://msg91.com/startups/?utm_source=startup-banner"
									>
										<img
											src="https://msg91.com/images/startups/msg91Badge.png"
											width="120"
											height="90"
											title="MSG91 - SMS for Startups"
											alt="Bulk SMS - MSG91"
										/>
									</a>
								</div>
							</div>
						</div>
					</section>
					<footer className="sections">
						<div
							className="container-fluid wow fadeInUp"
							data-wow-delay="0.2s"
							data-wow-duration="1s"
						>
							<div className="row" id="alc-footer">
								<div className="col-md-12 text-center">
									<h5 className="color-white">
										<i className="fa fa-copyright" /> Alconomy 2017
									</h5>
								</div>
							</div>
						</div>
					</footer>
					<SignUp open={open} onRequestClose={this.handleRequestClose} />
				</div>
			</Provider>
		);
	}
}

export default LandingPage;
