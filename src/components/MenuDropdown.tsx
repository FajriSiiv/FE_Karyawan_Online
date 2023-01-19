import { Menu } from "@headlessui/react";

export default function MenuDropdown() {
  return (
    <Menu>
      <Menu.Button className="py-1 border-2 rounded-[3px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute right-0 -top-5 flex flex-col bg-white border-2 p-2 rounded-md ">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Edit
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Delete
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
