
import { NavLink } from "react-router-dom";
function HeaderNav() {
  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/stories", label: "STORIES" },
    { path: "/services", label: "SERVICES" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="  flex  items-center justify-between w-full h-full max-w-[450px] max-h-[68px] p-[10px] z-10 rounded-[200px] border border-[#4D4D4D] bg-[#222222]">
      <nav className="gap-[20px] w-full tiny:text-[14px] smaller:text-[20px] text-center flex  text-[#FFF]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-center h-[35px] rounded-[71px] ${
                isActive
                  ? "bg-[#D7FD44] p-2 text-[#000000] font-bold"
                  : "p-0 font-[400]"
              } gap-2 flex-1`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default HeaderNav;
