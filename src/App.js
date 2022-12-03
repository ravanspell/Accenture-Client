import React from 'react';
import "./App.css";
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes, BrowserRouter as Router, } from "react-router-dom";
import store from "./redux/store";
import LayoutTemplate from './templates/LayoutTemplate';
import { Container } from '@material-ui/core';
import Classes from './pages/Classes';
import CreateClasses from './pages/CreateClasses';
import Teachers from './pages/Teachers';
import CreateTeachers from './pages/CreateTeachers';
import EditTeacher from './pages/EditTeacher';



function App() {
	return (
		<Provider store={store} >
			<Router>
				<LayoutTemplate>
					<Container maxWidth="xl" style={{ height: '100%' }}>
						<Routes>
							<Route exact path="/" element={<Teachers />} />
							<Route exact path="/classes" element={<Classes />} />
							<Route exact path="/class/add" element={<CreateClasses />} />
							<Route exact path="/teacher/add" element={<CreateTeachers />} />
							<Route path="/teacher/edit" element={<EditTeacher />} />
						</Routes>
						<ToastContainer />
					</Container>
				</LayoutTemplate>
			</Router>
		</Provider>
	);
}

export default App;
