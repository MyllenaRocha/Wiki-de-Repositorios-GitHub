import { BiGitRepoForked } from 'react-icons/bi';
import { SlSocialGithub } from 'react-icons/sl';
import { TiSocialGithub } from 'react-icons/ti';
import {ItemContainer} from './styles'


const ItemRepo = ({ repo, repos, setRepos }) => {
	const handleRemove = (id) => {
		const updateUsers = repos.filter((repo) => repo.id !== id);
		setRepos(updateUsers);
	};

	return (
		<ItemContainer>
			<div className="content">
				<img src={repo.avatar_url} alt={repo.name} />
				<div className="describe">
					<h3>{repo.name}</h3>
					<p>{repo.login}</p>
					<div>
						<ul className="social">
							<li>
								<BiGitRepoForked /> {repo.public_repos}
							</li>
							<li>
								<SlSocialGithub /> {repo.followers}
							</li>
							<li>
								<TiSocialGithub /> {repo.following}
							</li>
						</ul>
					</div>
					<div className="links">
						<a href={repo.html_url} target="_blank" rel="noreferrer">
							Ver Profile
						</a>
						<button className="remover" onClick={() => handleRemove(repo.id)}>
							Remover
						</button>
					</div>
				</div>
			</div>
		</ItemContainer>
	);
};

export { ItemRepo };
