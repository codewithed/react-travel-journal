import logo from './assets/nav-logo.svg';

export default function Navbar() {
    return (
        <nav className="bg-[#F55A5A] p-3 flex justify-center align-middle">
            <img className="w-[24px] mx-[5px]" src={logo}></img>
            <p className="text-white text-sm">my travel journal.</p>
        </nav>
    )
}