import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './components/Home.page'
import RQSuperHeroesPage from './components/RQSuperHeroes.page'
import SuperHeroesPage from './components/SuperHeroes.page'
import Layout from './components/Layout';

function App() {
  return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/super-heroes" element={<SuperHeroesPage />} />
						<Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
					</Route>
				</Routes>
			</Router>
		</>
  )
}

export default App
