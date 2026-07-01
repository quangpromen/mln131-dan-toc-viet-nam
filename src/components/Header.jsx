import React from 'react';

export default function Header() {
  const menuItems = [
    { label: 'Mở đầu', href: '#hero' },
    { label: 'Chính sách dân tộc', href: '#chinh-sach-dan-toc' },
    { label: 'Thành tựu', href: '#thanh-tuu' },
    { label: 'Phê phán chia rẽ', href: '#phe-phan-chia-re' },
    { label: 'Kêu gọi đoàn kết', href: '#keu-goi-doan-ket' }
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-6 px-6 md:px-12 lg:px-16 border-b border-white/10 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Subtitle */}
        <div className="flex flex-col items-start select-none">
          <span className="text-xl md:text-2xl font-black tracking-wider text-white">
            CNXH KHOA HỌC
          </span>
          <span className="text-xs uppercase tracking-widest text-[#FFD65A]/90 font-medium mt-0.5">
            Chương 6 • Vấn đề dân tộc
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-white/80 hover:text-[#FFD65A] hover:scale-105 transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD65A] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
