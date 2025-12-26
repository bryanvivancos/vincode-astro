import { atom } from 'nanostores'

export const isMenuOpen = atom(false)

export const toggleMenu = () => {
    isMenuOpen.set(!isMenuOpen.get())
}