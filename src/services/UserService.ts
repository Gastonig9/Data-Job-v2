/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddUserSkill, ChangeUserData, ChangeUserImage, ChangeUserRole } from "../models/user.model";
import { BASE_URL } from "../assets/url";

export class UserService {
    private readonly baseUrl = BASE_URL.prod;

    async getUserProfile(userId: string | undefined) {
        const response = await fetch(`${this.baseUrl}/user/get-user/${userId}`);

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            return dataError;
        }
    }

    async getUserSkillsProfile(userId: string | undefined) {
        {
            const response = await fetch(`${this.baseUrl}/user/get-skills/${userId}`);

            if (response.ok) {
                const dataSuccess = await response.json();
                return dataSuccess;
            } else {
                const dataError = await response.json();
                return dataError;
            }
        }
    }

    async saveJobInUserProfile(userId: string | undefined, jobId: string | undefined) {
        const response = await fetch(`${this.baseUrl}/user/save-job/${userId}/${jobId}`, {
            method: "POST",
        });

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            return dataError;
        }
    } 

    async updateUserInfo(userId: string | undefined, dataRegister: ChangeUserData) {
        const response = await fetch(`${this.baseUrl}/user/update-info/${userId}`, {
            method: "PUT",
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

    async updateUserRole(userId: string | undefined, newRole: ChangeUserRole) {
        const response = await fetch(`${this.baseUrl}/user/change-role/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRole),
        });

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            return dataError;
        }
    }

    async updateUserImage(userId: string | undefined, newImage: ChangeUserImage) {
        const response = await fetch(`${this.baseUrl}/user/update-image/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newImage),
        });

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            return dataError;
        }
    }

    async addUserSkill(userId: string | undefined, newSkill: AddUserSkill) {
        const response = await fetch(`${this.baseUrl}/user/add-skill/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSkill),
        });

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            return dataError;
        }
    }

    async deleteUserSkill(userId: string | undefined) {
        const response = await fetch(`${this.baseUrl}/user/delete-skill/${userId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            const dataSuccess = await response.json();
            return dataSuccess;
        } else {
            const dataError = await response.json();
            return dataError;
        }
    }

}