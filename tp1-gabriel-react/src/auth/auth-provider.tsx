import { type AccountInfo, EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./auth-config";
import { MsalProvider } from "@azure/msal-react";
import { type ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const msalInstance = new PublicClientApplication(msalConfig);

    if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
        msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    }


    msalInstance.addEventCallback((event) => {
        // À partir de la version 5.0.2 de msal-browser, le payload pour LOGIN_SUCCESS est maintenant un objet AccountInfo 
        // plutôt qu'un objet AuthentificationResult. https://azuread.github.io/microsoft-authentication-library-for-js/ref/types/_azure_msal_common.AccountInfo.html
        const authenticationResult = event?.payload as AccountInfo;
        if (event.eventType === EventType.LOGIN_SUCCESS && authenticationResult) {
            msalInstance.setActiveAccount(authenticationResult);
            window.location.reload();
        }
    });

    return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};