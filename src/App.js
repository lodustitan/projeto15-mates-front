/* Hooks */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

/* Pages */
import Game from './pages/Game';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export const global = createContext()

function App() {

	const [userId] = useState("63800b7cafb3e343893a1328");

	return (
		<global.Provider value={ {userId} }>
			<BrowserRouter>
				<Routes>
					<Route path='/game/:id' element={<Game />} />
					<Route path='/cart' element={< Cart />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</global.Provider>
	);
}

export default App;
