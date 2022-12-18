import { useState } from 'react';

import { Input } from '../components/Input';
import { ItemRepo } from '../components/ItemRepo';
import { Button } from '../components/Button';

import { Container } from './styles';

import github from '../assets/github.png';
import { api } from '../services/api';

const App = () => {
	const [currentRepo, setCurrentRepo] = useState('');
	const [repos, setRepos] = useState([]);

	const handleSearchRepo = async () => {
		const { data } = await api.get(`users/${currentRepo}`);
		if (data.id) {
			const isExist = repos.find((repo) => repo.id === data.id);
			if (!isExist) {
				setRepos((prev) => [...prev, data]);
				setCurrentRepo('');
			}
		} else {
			alert('Não encontrado.');
		}
	};

	return (
		<Container>
			<img src={github} alt="logo Github" width={72} height={72} />
			<Input value={currentRepo} onChange={setCurrentRepo} />
			<Button onClick={handleSearchRepo} />
			{repos.map((repo) => (
				<ItemRepo key={repo.id} repo={repo} repos={repos} setRepos={setRepos} />
			))}
		</Container>
	);
};

export { App };
