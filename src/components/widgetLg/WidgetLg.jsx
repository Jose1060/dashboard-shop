import "./widgetLg.css";

export default function WidgetLg() {
	const Button = ({ type }) => {
		return <button className={"widgetLgButton " + type}>{type}</button>;
	};
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Ultimas Ventas</h3>
			<table className="widgetLgTable">
				<tr className="widgetLgTr">
					<th className="widgetLgTh">Comprador</th>
					<th className="widgetLgTh">Fecha</th>
					<th className="widgetLgTh">Monto</th>
					<th className="widgetLgTh">Cantidad</th>
					<th className="widgetLgTh">Producto</th>
					<th className="widgetLgTh">Estado</th>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Carol</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgAmount" style={{ textAlign: "center" }}>
						5
					</td>
					<td className="widgetLgDate">AirPods</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Carol</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgAmount" style={{ textAlign: "center" }}>
						5
					</td>
					<td className="widgetLgDate">AirPods</td>
					<td className="widgetLgStatus">
						<Button type="Declined" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Carol</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgAmount" style={{ textAlign: "center" }}>
						5
					</td>
					<td className="widgetLgDate">AirPods</td>
					<td className="widgetLgStatus">
						<Button type="Pending" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">Susan Carol</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgAmount" style={{ textAlign: "center" }}>
						5
					</td>
					<td className="widgetLgDate">AirPods</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
}
