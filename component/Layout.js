/* eslint-disable @next/next/no-sync-scripts */

import Head from 'next/head';
import AsideMenu from './AsideMenu';
import NavBar from './NavBar'
import Footer from './Footer';
import { useEffect } from 'react';


const Layout = ({ children }) => {

	useEffect(() => {
		const body = document.body;
		body.setAttribute("id", "kt_body");
		body.classList.add('header-fixed', 'header-tablet-and-mobile-fixed', 'toolbar-enabled', 'toolbar-fixed', 'aside-enabled', 'aside-fixed');
	}, [])

	return (
		<div>
			<Head>
				<base href="../../" />
				<title> Metronic - Layout</title>
				<meta name="description" content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue & Laravel versions. Grab your copy now and get life-time updates for free." />
				<meta name="keywords" content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				{/* <meta property="og:title" content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular & Laravel Admin Dashboard Theme" /> */}
				<meta property="og:url" content="https://keenthemes.com/metronic" />
				<meta property="og:site_name" content="Keenthemes | Metronic" />
				<link rel="canonical" href="https://preview.keenthemes.com/metronic8" />
				<link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
				{/*begin::Fonts*/}
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
				{/*end::Fonts*/}
				{/*begin::Global Stylesheets Bundle(used by all pages)*/}
				<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
				<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
				{/*end::Global Stylesheets Bundle*/}
				{/*end::Head*/}
				{/*begin::Body*/}
				{/*begin::Main*/}
				{/*begin::Root*/}
			</Head>
			{/* <div className="page d-flex flex-row flex-column-fluid"> */}
			<div>
				<nav>
					<AsideMenu />
				</nav>

				<nav>
					<NavBar />
				</nav>

				{/* <main className="m-0 vh-100 row justify-content-center align-items-center"> */}
				<main>
					{children}
				</main>

				<footer>
					<Footer />
				</footer>
			</div>

			<script>var hostUrl = `assets/`;</script>
			<script src="assets/plugins/global/plugins.bundle.js"></script>
			<script src="assets/js/scripts.bundle.js"></script>
			<script src="assets/js/custom/widgets.js"></script>
			<script src="assets/js/custom/apps/chat/chat.js"></script>
			<script src="assets/js/custom/modals/create-app.js"></script>
			<script src="assets/js/custom/modals/upgrade-plan.js"></script>
		</div>
	)
}

export default Layout





