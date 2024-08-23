import {loginUser} from "@/core/data-access/users";

describe("loginUser", () => {
    it("should return a user object on successful login", async () => {
        const mockInput = {
            email: "jbberbon@student.apc.edu.ph",
            password: "12345678",
            remember: false,
        };
        const mockResponse = {
            success: true,
            data: {},
            message: "User logged in successfully! 🎉",
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        const result = await loginUser(mockInput);

        expect(result).toEqual(mockResponse);
    });

    it("should return an error message on failed login", async () => {
        const mockInput = {
            email: "test@apc.edu.ph",
            password: "wrongpassword",
            remember: false,
        };
        const mockResponse = {
            success: false,
            message: "Login Failed",
            errors: {
                "email": "Wrong email or password"
            },
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        const result = await loginUser(mockInput);

        expect(result).toEqual(mockResponse);
    });

    it("should return an errors object", async () => {
        const mockInput = {
            email: "test@apc.edu.ph",
            password: "password",
            remember: false,
        };


        const result = await loginUser(mockInput);

        expect(result).toEqual({
            success: false,
            message: "Login Failed",
            errors: {
                "email": "Wrong email or password"
            },
        });
    });

    it("should return an error message on invalid input", async () => {
        const mockInput = {
            email: "",
            password: "",
            remember: false,
        };

        const result = await loginUser(mockInput);

        expect(result).toEqual({
            success: false,
            message: "Login Failed",
            errors: {
                "email": "The email field is required."
            }
        });
    });
});