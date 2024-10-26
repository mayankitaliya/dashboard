
import NavLinks from './nav-links';

export default function Layouts({ children }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
            <div className="p-12 w-full flex-none md:w-64 bg-black">
                <NavLinks />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 ">{children}</div>
        </div>
    );
}