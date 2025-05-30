import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import React from "react";

export default function Layout() {
	return <>
		<Header />
		<Outlet />
	</>
}