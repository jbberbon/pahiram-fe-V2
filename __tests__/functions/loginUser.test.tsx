import {loginUser} from "@/core/data-access/users";
// TODO: Verify the response from the API @berbon
describe("loginUser", () => {
    it("should return a user object on successful login", async () => {
        const mockInput = {
            email: "test@apc.edu.ph",
            password: "password",
            remember: false,
        };
        const mockResponse = {
            success: true,
            userData: {
                apc_id: "1234567890",
                first_name: "John",
                last_name: "Doe",
                email: "test@apc.edu.ph",
                office: "DPS",
                role: "admin",
                is_admin: true,
            },
            message: "User logged in successfully! 🎉",
        };

        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse),
            ok: true,
        } as unknown as Response);

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
            message: "Invalid email or password",
        };

        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse),
            ok: false,
        } as unknown as Response);

        const result = await loginUser(mockInput);

        expect(result).toEqual(mockResponse);
    });

    it("should return an error message on server error", async () => {
        const mockInput = {
            email: "test@apc.edu.ph",
            password: "password",
            remember: false,
        };

        jest.spyOn(global, "fetch").mockRejectedValue(new Error("Server Error"));

        const result = await loginUser(mockInput);

        expect(result).toEqual({
            success: false,
            message: "Server Error",
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
            message: "Invalid input",
        });
    });
});