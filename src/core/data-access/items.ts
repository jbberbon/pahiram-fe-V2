import {cache} from 'react'

// REMINDER: Use these functions as DTOs
// import {
//     experimental_taintObjectReference,
//     experimental_taintUniqueValue,
// } from 'react'
import {IGetItemsPaginationApiResponse} from "@/lib/interfaces";
import {getParsedAuthCookie} from "@/core/data-access/cookies";

export const preloadItemsPagination = (page: number) => {
    void getItemsPagination(page);
}

export const preloadItem = (id: string) => {
    // void evaluates the given expression and returns undefined
    // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
    void getItem(id)
}

export const getItem = cache(async (id: string) => {

        return fetch(`http://127.0.0.1/api/item-inventory/${id}`)
            .then(response => response.json())
            .then(data => {
                return data
            })
            .catch(error => console.log(error))
    }
)

export const getItemsPagination = async (page: number): Promise<IGetItemsPaginationApiResponse> => {
    const authCookie = await getParsedAuthCookie();
    const userPahiramToken = authCookie?.pahiram_token;
    try {
        const response = await fetch(`http://127.0.0.1/api/item-inventory?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userPahiramToken}`
            }
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching items:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to fetch items: ${error.message}`);
        } else {
            throw new Error('Failed to fetch items: Unknown error');
        }
    }
}