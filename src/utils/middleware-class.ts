import {cookies} from "next/headers";

class MiddlewareUtils {
    isUserAuthenticate() {
        // Check if user is authenticated
        return cookies().get('isAuthenticated')?.value;
    }

// TODO: Implement route protection middleware
}

export default MiddlewareUtils;