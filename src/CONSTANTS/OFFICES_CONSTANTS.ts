// Define the type for the role details
interface RoleDetails {
    name: string;
    // Add more attributes here as needed
}

// Define the type for the office details
interface OfficeDetails {
    office: string;
    acronym: string;
    is_lending_office: boolean;
    roles?: { [key: string]: RoleDetails };
}

// Define the type for the office constants object
type OfficesConstants = {
    [key: string]: OfficeDetails;
};

// Define the actual object with the annotated type
const OFFICES_CONSTANTS: OfficesConstants = {
    ITRO: {
        office: "Information Technology and Resource Office",
        acronym: "ITRO",
        is_lending_office: true,
        roles: {
            LENDING_EMPLOYEE: { name: "LENDING EMPLOYEE" },
            SUPERVISOR: { name: "SUPERVISOR" },
            COSUPERVISOR: { name: "COSUPERVISOR" },
        },
    },
    BMO: {
        office: "Building Maintenance Office",
        acronym: "BMO",
        is_lending_office: true,
        roles: {
            LENDING_EMPLOYEE: { name: "LENDING EMPLOYEE" },
            SUPERVISOR: { name: "SUPERVISOR" },
            COSUPERVISOR: { name: "COSUPERVISOR" },
        },
    },
    ESLO: {
        office: "Engineering and Science Laboratory Office",
        acronym: "ESLO",
        is_lending_office: true,
        roles: {
            LENDING_EMPLOYEE: { name: "LENDING EMPLOYEE" },
            SUPERVISOR: { name: "SUPERVISOR" },
            COSUPERVISOR: { name: "COSUPERVISOR" },
        },
    },
    FAO: {
        office: "Finance and Accounting Office",
        acronym: "FAO",
        is_lending_office: false,
        roles: {
            PENALTY_MANAGER: { name: "PENALTY MANAGER" },
            SUPERVISOR: { name: "SUPERVISOR" },
            COSUPERVISOR: { name: "COSUPERVISOR" },
        },
    },
    PLO: {
        office: "Purchasing and Logistics Office",
        acronym: "PLO",
        is_lending_office: false,
        roles: {
            INVENTORY_MANAGER: { name: "INVENTORY MANAGER" },
            SUPERVISOR: { name: "SUPERVISOR" },
            COSUPERVISOR: { name: "COSUPERVISOR" },
        },
    },
    "N/A": {
        office: "No Designation",
        acronym: "N/A",
        is_lending_office: false,
    },
};

// Extract the acronyms of lending offices
const LENDING_OFFICES_ACRONYMS = Object.keys(OFFICES_CONSTANTS).filter(
    (office) => OFFICES_CONSTANTS[office].is_lending_office
);

// Extract the list of all offices
const LIST_OF_OFFICES = Object.keys(OFFICES_CONSTANTS);

// Function to get roles for a specific office
const getRolesForOffice = (officeAcronym: string): { [key: string]: RoleDetails } | undefined => {
    const office = OFFICES_CONSTANTS[officeAcronym];
    return office?.roles;
};

// Create a map of all roles by office
const rolesByOffice = Object.keys(OFFICES_CONSTANTS).reduce((acc, officeAcronym) => {
    const roles = getRolesForOffice(officeAcronym);
    if (roles) {
        acc[officeAcronym] = roles;
    }
    return acc;
}, {} as { [key: string]: { [key: string]: RoleDetails } });

export { OFFICES_CONSTANTS, LENDING_OFFICES_ACRONYMS, LIST_OF_OFFICES, rolesByOffice };
export type OfficeAcronym = keyof typeof OFFICES_CONSTANTS;
export type RoleForOffice<O extends OfficeAcronym> = keyof typeof rolesByOffice[O];