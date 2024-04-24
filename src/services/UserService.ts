/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddUserSkill, ChangePassword, ChangeUserData, ChangeUserImage, ChangeUserRole } from "../models/user.model";
import { BASE_URL } from "../assets/url";
import { UserResponse } from "../models/response.model";

export class UserService {
    private readonly baseUrl = BASE_URL.dev;

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

    async getUserRequestJobs(userId: string | undefined) {
        try {
            const response = await fetch(`${this.baseUrl}/user/get-user-applicants/${userId}`);
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

    async getUserSavedJobs(userId: string | undefined) {
        try {
            const response = await fetch(`${this.baseUrl}/user/get-saved-jobs/${userId}`);
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
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

    async sendApplyUser(userId: string | undefined, jobId: string | undefined) {
        try {
            const response = await fetch(`${this.baseUrl}/user/request-job/${userId}/${jobId}`);
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

    async markRequestAsView(userId: string | undefined, applicantId: string | undefined): Promise<UserResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/user/mark-request-view/${userId}/${applicantId}`, {
                method: "PUT",
            });
            const data = await response.json()
            return data;
        } catch (error:any) {
            return error;
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

    async deleteUserJobRequest(userId: string | undefined, applicantId: string | undefined) {
        try {
            const response = await fetch(`${this.baseUrl}/user/delete-request/${userId}/${applicantId}`, {
                method: 'DELETE'
            });
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

    async sendEmailRecoverPass(email: string | undefined) {
        try {
            const response = await fetch(`${this.baseUrl}/user/send-email-recover/${email}`, {
                method: 'POST'
            });
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

    async changeUserPassword(token: string | undefined, newPassword: ChangePassword) {
        try {
            const response = await fetch(`${this.baseUrl}/user/recover-password/${token}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPassword),
            });
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

}