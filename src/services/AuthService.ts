/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthLogin, AuthRegister } from "../models/auth.model";
import { BASE_URL } from "../assets/url";

export class AuthService {
    private readonly baseUrl = BASE_URL.prod

    async registerUser(dataRegister: AuthRegister) {
        const response = await fetch(`${this.baseUrl}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataRegister),
        });

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            return dataError;
        }
    }

    async loginUser(userBody: AuthLogin) {
        const response = await fetch(`${this.baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userBody),
        });

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            console.log(dataError);
            return dataError;
        }

    }

    logout() {
        localStorage.removeItem('token')
        window.location.reload()
    }

}