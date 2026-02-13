import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./auth-config";
import { urlAPI } from '../Config';
import axios from 'axios';
const nomBackend = import.meta.env.VITE_ACTIVEDIRECTORY_AZURE_NOM_BACKEND.trim();

const msalInstance = new PublicClientApplication(msalConfig);


const apiClient = axios.create({
    baseURL: urlAPI,
});

msalInstance.initialize().then(() => {
    // Interceptor pour ajouter le token
    apiClient.interceptors.request.use(async (config) => {
        const account = msalInstance.getActiveAccount();
        if (account) {
            const tokenResponse = await msalInstance.acquireTokenSilent({
                account: account,
                scopes: [`api://${nomBackend}/access_as_user`],
            });
            config.headers.Authorization = `Bearer ${tokenResponse.accessToken}`;
        }
        return config;
    });

    // Interceptor pour gérer les erreurs avec messages en français
    apiClient.interceptors.response.use(
        (response) => response,
        async (error) => {
            const response = error.response;

            // Si le backend a envoyé un message personnalisé
            if (response?.data?.message) {
                throw new Error(response.data.message);
            }
            // Sinon, afficher des messages génériques en français
            else if (response?.status === 401) {
                throw new Error("Vous devez vous connecter pour accéder à cette fonctionnalité. (E401)");
            }
            else if (response?.status === 403) {
                throw new Error("Vous ne disposez pas des droits nécessaires pour réaliser cette action. (E403)");
            }
            else if (response?.status === 400) {
                throw new Error("Veuillez remplir tous les champs du formulaire. (E400)");
            }
            else if (response?.status === 404) {
                throw new Error("La ressource demandée n'existe pas.(E404)");
            }
            else if (response?.status === 500) {
                throw new Error("Une erreur est survenue. Veuillez réessayer ou contactez le support TI. (E500)");
            }

            throw new Error("Une erreur inattendue est survenue.");
        }
    );
});

export default apiClient;