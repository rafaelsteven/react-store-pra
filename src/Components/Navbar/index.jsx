import { MenuLeft, MenuRight } from "./navbar-item";
import { LiItem } from "./LiItem";
const Navbar = () => {
    return (
        <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                {MenuLeft().map((menu) =>
                    <LiItem
                        key={menu.text}
                        menu={menu}
                    />
                )}
            </ul>
            <ul className="flex items-center gap-3">
                {MenuRight().map((menu) => (
                    <LiItem
                        key={menu.text}
                        menu={menu}
                    />
                ))}
            </ul>
        </nav>
    );
}

export { Navbar };