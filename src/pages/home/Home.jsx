import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { salesData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React from "react";

export default function Home() {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={salesData}
				title="Analisis de Ventas"
				grid
				dataKey="Ventas"
			/>
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
