export function NavbarItem({ label }: { label: string }) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
}
