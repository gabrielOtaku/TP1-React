import logo from '../assets/Images/logo.jpg'
import '../styles/Banner.css'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../auth/auth-config';

interface BannerProps {
	titre: React.ReactNode
}
function Banner({ titre }: BannerProps) {
	const { instance } = useMsal();
	const activeAccount = instance.getActiveAccount();

	const handleConnexion = () => {
		instance
			.loginRedirect({
				...loginRequest,
				prompt: 'create',
			})
			.catch((error: unknown) => {
				console.error(error);
				throw error;
			});
	};

	const handleDeconnexion = () => {
		instance.logoutRedirect({
			postLogoutRedirectUri: '/',
		});
	};

	return (
		<div className='lmj-banner'>
			<img src={logo} alt="Fender" className='lmj-logo' />
			<h1 className='lmj-title'>{titre}</h1>
			<div>
				<AuthenticatedTemplate>
					{activeAccount && (
						<>
							<p>{activeAccount.name}</p>
							<button className="btn btn-primary" onClick={handleDeconnexion}>Déconnexion</button>
						</>
					)}
				</AuthenticatedTemplate>
				<UnauthenticatedTemplate>
					<button className="btn btn-primary" onClick={handleConnexion}>Connexion</button>
				</UnauthenticatedTemplate>
			</div>
		</div>
	)
}


export default Banner
