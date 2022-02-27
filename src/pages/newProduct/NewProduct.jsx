import React, { useState } from "react";
import "./newProduct.css";
import { Field, Formik } from "formik";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { TextField } from "@material-ui/core";
import { ColorLens } from "@material-ui/icons";

export default function NewProduct() {
	const [productoCreado, setProductoCreado] = useState(false);
	const [productoError, setProductoError] = useState(false);

	const createProduct = async (valores) => {
		const productCollectionRef = collection(db, "Productos");
		const rpt = await addDoc(productCollectionRef, {
			Descripcion: valores.descripcion,
			nombre: valores.nombre,
			Precio: valores.precio,
			Stock: valores.stock,
			Color: valores.color,
			Categorias: ["Categoria 1", "Categoria 2", "Categoria 3"],
		});
		return rpt;
	};

	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New Product</h1>
			<Formik
				initialValues={{
					nombre: "",
					descripcion: "",
					stock: 0,
					precio: 0.0,
					color: "#ff0000",
				}}
				validate={(valores) => {
					let errores = {};

					//Validacion Nombre
					if (!valores.nombre) {
						errores.nombre = "Por favor ingrese un nombre";
					}

					//Validacion Descripcion
					if (!valores.descripcion) {
						errores.descripcion = "Por favor ingrese una descripcion";
					}

					//Validacion Stock
					if (!valores.stock) {
						errores.stock = "Por favor ingrese un stock";
					}

					//Validacion Precio
					if (!valores.precio) {
						errores.precio = "Por favor ingrese un precio";
					}

					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					const rpt = createProduct(valores);
					rpt.then(
						() => {
							setProductoCreado(true);
							resetForm();
							setTimeout(() => setProductoCreado(false), 5000);
						},
						(error) => {
							setProductoError(true);
							setTimeout(() => setProductoCreado(false), 5000);
							console.log(error);
						}
					);
				}}>
				{({
					values,
					errors,
					handleSubmit,
					touched,
					handleChange,
					handleBlur,
				}) => (
					<form className="addProductForm" onSubmit={handleSubmit}>
						<div className="addProductItem">
							<Field
								type="text"
								placeholder="Producto"
								id="nombre"
								name="nombre"
								value={values.nombre}
								onChange={handleChange}
								component={TextField}
								label="Producto"
							/>
							{touched.nombre && errors.nombre && (
								<span className="errorMessage">{errors.nombre}</span>
							)}
						</div>
						<div className="addProductItem">
							<Field
								type="text"
								placeholder="descripcion"
								id="descripcion"
								name="descripcion"
								value={values.descripcion}
								onChange={handleChange}
								onBlur={handleBlur}
								component={TextField}
								label="Descripcion"
							/>
							{touched.descripcion && errors.descripcion && (
								<span className="errorMessage">{errors.descripcion}</span>
							)}
						</div>
						<div className="addProductItem">
							<Field
								type="number"
								placeholder="123"
								id="stock"
								name="stock"
								value={values.stock}
								onChange={handleChange}
								onBlur={handleBlur}
								component={TextField}
								label="Stock"
							/>
							{touched.stock && errors.stock && (
								<span className="errorMessage">{errors.stock}</span>
							)}
						</div>
						<div className="addProductItem">
							<label htmlFor="stock">Color</label>
							<Field
								type="color"
								placeholder="123"
								id="color"
								name="color"
								value={values.color}
								onChange={handleChange}
								onBlur={handleBlur}
								component={ColorLens}
								label="Color"
							/>

							{touched.color && errors.color && (
								<span className="errorMessage">{errors.color}</span>
							)}
							<div className="boxBtn">
								<button className="btnAddInput">+ Agregar</button>
							</div>
						</div>

						<div className="addProductItem">
							<label htmlFor="precio">Precio</label>
							<Field
								type="number"
								placeholder="123"
								id="precio"
								name="precio"
								value={values.precio}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.precio && errors.precio && (
								<span className="errorMessage">{errors.precio}</span>
							)}
						</div>

						<button className="addProductButton" type="submit">
							Crear
						</button>
						{productoCreado && (
							<span className="successMessage">Producto creado con exito</span>
						)}
						{productoError && (
							<span className="errorMessageProduct">
								Error al crear el producto
							</span>
						)}
					</form>
				)}
			</Formik>
		</div>
	);
}
