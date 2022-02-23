import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firabase-config";
import { collection, getDocs } from "firebase/firestore";

export default function UserList() {
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	useEffect(() => {
		const getUsers = async () => {
			const dataUser = await getDocs(usersCollectionRef);
			setUsers(dataUser.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getUsers();
	}, []);

	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "Nombre",
			headerName: "Nombre",
			width: 200,
		},
		{
			field: "Apellido",
			headerName: "Apellido",
			width: 120,
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "Gustos",
			headerName: "Gustos",
			width: 120,
		},
		{
			field: "totalTransacciones",
			headerName: "Transacciones totales",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/" + params.row.id}>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="userListDelete"
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="userList">
			<DataGrid
				rows={users}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
}
