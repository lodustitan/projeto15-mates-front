/* Hooks */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Pages */
import Game from './pages/Game';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/game/:id' element={<Game />} />
				<Route path='/cart' element={< Cart />} />
				<Route path='/checkout' element={<Checkout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
