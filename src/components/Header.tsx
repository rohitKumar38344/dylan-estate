import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const activeLink = {
    textDecoration: "underline",
  };
  return (
    <header className="flex justify-between h-13 bg-[#FCF8F4] border-[#F6EFE6] px-16">
      <Link className="mt-2" to="/">
        <img
          src="/assets/icons/logo.png"
          alt="dalyen estate logo"
          className="w-12"
        />
        <p className="text-[18px] text-[#B0854C] font-bold">Dylan Estate</p>
      </Link>
      <nav className="flex h-fit self-end">
        <ul className="flex items-center gap-10 border-r-2 border-r-black mr-10 font-bold text-sm">
          <li className="p-[10px] pr-0">
            <a href="#">Properties</a>
          </li>
          <li>
            <a href="#">MyDashboard/Activity</a>
          </li>
          <Link to={"list-your-property"}>List Your Property</Link>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li className="pr-10">
            <a href="#">More</a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-8">
          <img src="/assets/icons/translate.png" alt="translator" />
          <img src="/assets/icons/user.png" alt="user" />
        </div>
      </nav>
    </header>
  );
};
