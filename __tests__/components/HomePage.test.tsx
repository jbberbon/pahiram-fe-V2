import {fireEvent, render, screen} from '@testing-library/react';
import {describe, expect, it} from "vitest";
import HomePage from '../../src/app/page';

describe('HomePage - Component Test', () => {
    it('should render a link to the login page', () => {
        render(<HomePage/>)

        const linkElement = screen.getAllByRole('link', {name: 'Login'})
        expect(document).toContain(linkElement[0]);
    })

    it('should redirect to the login form', () => {
        const {getAllByRole, getAllByText} = render(<HomePage/>)
        const linkElement = getAllByRole('link', {name: 'Login'})
        expect(document).toContain(linkElement[0]);
        expect(linkElement[0]).toHaveProperty('href', 'http://localhost:3000/auth/login')
        fireEvent.click(linkElement[0])
        const titleElement = getAllByText('Login')
        expect(document).toContain(titleElement[0]);
    })
})