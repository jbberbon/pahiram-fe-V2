import {fireEvent, render, screen} from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage - Component Test', () => {
    it('should render a link to the login page', () => {
        render(<HomePage/>)

        expect(screen.getByRole('link', {name: 'Login'})).toBeInTheDocument()
    })

    it('should redirect to the login form', () => {
        const {getByRole, getByText} = render(<HomePage/>)
        const linkElement = getByRole('link', {name: 'Login'})
        expect(linkElement).toBeInTheDocument()
        expect(linkElement).toHaveAttribute('href', '/auth/login')
        fireEvent.click(linkElement)
        expect(getByText('Login')).toBeInTheDocument()
    })
})