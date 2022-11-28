/* Hooks */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Pages */
import Game from './pages/Game';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MyGames from "./pages/MyGames";

/* Components */
import NavBar from "./components/layout/NavBar";


function App() {

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Home />} />
				<Route path='/game/:id' element={<Game />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/mygames' element={<MyGames />} />
				<Route path='/checkout' element={<Checkout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
