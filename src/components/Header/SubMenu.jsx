import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";


const SubMenu = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isRootActive = location.pathname.startsWith(item.path);

  const positionClass =
    depth === 0
      ? "top-full" // منوی سطح اول
      : "top-[0] right-[300px]"; // زیرمنوهای سطح بعدی

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to={item.path}
        className={`block px-3 py-2 hover:text-[var(--red)] ${
          isRootActive
            ? "text-[var(--red)] border-b-3 border-[var(--red)]"
            : "text-[var(--gray-2)]"
        }`}
      >
        {item.label}
      </NavLink>

      {/* ======= تغییر اصلی: مگامنو با 5 ستون از طریق subMenu (هر ستون یک آیتم subMenu) ======= */}
      {item.type === "mega" && isOpen && (
        <div
          className={`absolute ${positionClass} min-w-[1000px] left-0 bg-white z-50 py-6`}
        >
          {/* 5 ستون گرید */}
          <div className="grid grid-cols-5">
            {item.subMenu?.map((column, colIndex) => (
              <div key={colIndex}>
                {/* عنوان ستون */}
                {column.label && (
                  <p className="font-semibold mb-2 text-gray-700">
                    {column.label}
                  </p>
                )}
                <ul className="space-y-1 border-l-1 border-[#e2e8f0] text-left ">
                  {/* لینک‌های ستون */}
                  {column.subMenu?.map((link, linkIndex) => (
                    <li className="hover:bg-[var(--gray-3)]" key={linkIndex}>
                      <NavLink
                        to={link.path}
                        className="text-sm text-gray-600 hover:text-[var(--red)] leading-8 px-3"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t-1 border-[#e2e8f0] pr-3 pt-4">
            <div className="flex items-center text-[var(--red)]"><NavLink>مشاهده دیگر برندها</NavLink><MdKeyboardArrowLeft /></div>
          </div>
        </div>
        
      )}

      {/* حالت عادی زیرمنو (وقتی type مگا نیست) */}
      {item.subMenu && item.type !== "mega" && isOpen && (
        <ul
          className={`absolute ${positionClass} bg-white w-[330px] z-50 min-w-[150px]`}
        >
          {item.subMenu?.map((subItem, subIndex) => {
            return (
              <li key={subIndex} className="hover:bg-[var(--gray-3)]">
                <SubMenu item={subItem} depth={depth + 1} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SubMenu;
