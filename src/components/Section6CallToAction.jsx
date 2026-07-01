import React, { useState } from 'react';

// Data for Section 6
const actionCards = [
  {
    id: 1,
    title: "Tôn trọng bản sắc",
    description:
      "Không chế giễu tiếng nói, trang phục, phong tục, tập quán và đời sống văn hóa của các dân tộc.",
    icon: "HeartHandshake"
  },
  {
    id: 2,
    title: "Kiểm chứng trước khi chia sẻ",
    description:
      "Không lan truyền nội dung kỳ thị, chia rẽ dân tộc hoặc thông tin chưa được kiểm chứng trên mạng xã hội.",
    icon: "ShieldCheck"
  },
  {
    id: 3,
    title: "Lan tỏa giá trị tích cực",
    description:
      "Giới thiệu văn hóa, con người, sản phẩm địa phương và du lịch cộng đồng vùng dân tộc thiểu số.",
    icon: "Megaphone"
  },
  {
    id: 4,
    title: "Ủng hộ sinh kế địa phương",
    description:
      "Quan tâm sản phẩm OCOP, nông sản, thủ công truyền thống và các mô hình phát triển bền vững của đồng bào.",
    icon: "Sprout"
  },
  {
    id: 5,
    title: "Phản biện văn minh",
    description:
      "Khi gặp định kiến hoặc nội dung chia rẽ, hãy giải thích bằng thái độ bình tĩnh, tôn trọng và có dẫn chứng.",
    icon: "MessageCircle"
  }
];

// SVG Icons
const Icons = {
  HeartHandshake: () => (
    <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-5.618 3.03A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Megaphone: () => (
    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  Sprout: () => (
    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a3 3 0 003-3V6.707A2.5 2.5 0 0018.793 5L15.5 1.707A2.5 2.5 0 0013.793 1H10.5A2.5 2.5 0 008 3.5v.435z" />
    </svg>
  ),
  MessageCircle: () => (
    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Quote: () => (
    <svg className="w-8 h-8 text-[#DA251D]/20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.017 21v-7.391c0-5.704 3.748-9.77 9-10.807v2.137c-3.216.835-4.599 3.231-4.599 5.82h4.582v10.24h-9.017zm-12.017 0v-7.391c0-5.704 3.748-9.77 9-10.807v2.137c-3.216.835-4.599 3.231-4.599 5.82h4.582v10.24h-9.017z" />
    </svg>
  )
};

const renderIcon = (name) => {
  const IconComponent = Icons[name];
  return IconComponent ? <IconComponent /> : null;
};

export default function Section6CallToAction() {
  const [showSources, setShowSources] = useState(false);

  return (
    <section 
      id="keu-goi-doan-ket" 
      className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FFF8E7]/30 to-[#F8F4EA]/70 select-none"
    >
      {/* Subtle background embroidery SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden flex items-center justify-center">
        <svg className="w-[110%] md:w-[60%] aspect-square text-[#07111F]" fill="none" viewBox="0 0 100 100" stroke="currentColor">
          <polygon points="50,5 95,50 50,95 5,50" strokeWidth="0.8" />
          <polygon points="50,15 85,50 50,85 15,50" strokeWidth="0.4" strokeDasharray="3 2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-widest text-[#DA251D] bg-[#DA251D]/10 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DA251D]"></span>
            Cam kết hành động
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#07111F] tracking-tight leading-none mb-6">
            SINH VIÊN HÀNH ĐỘNG VÌ ĐẠI ĐOÀN KẾT
          </h2>
          <p className="text-base md:text-lg font-bold text-[#DA251D] leading-relaxed max-w-2xl mx-auto">
            Bình đẳng không chỉ nằm trong chính sách. Đoàn kết không chỉ nằm trong khẩu hiệu. Tương trợ bắt đầu từ những hành động nhỏ mỗi ngày.
          </p>
        </div>

        {/* 1. Large Quote Block */}
        <div className="max-w-4xl mx-auto bg-white border border-[#F8F4EA] rounded-3xl p-8 md:p-12 shadow-[0_4px_30px_rgba(7,17,31,0.01)] relative mb-16 text-center">
          <div className="absolute top-4 left-6">
            <Icons.Quote />
          </div>
          <div className="space-y-4 md:space-y-6 relative z-10">
            <p className="text-lg md:text-2xl font-black text-[#07111F] tracking-tight leading-relaxed">
              “Bình đẳng để mọi dân tộc được tôn trọng.”
            </p>
            <p className="text-lg md:text-2xl font-black text-[#DA251D] tracking-tight leading-relaxed">
              “Đoàn kết để đất nước vững mạnh.”
            </p>
            <p className="text-lg md:text-2xl font-black text-[#D97706] tracking-tight leading-relaxed">
              “Tương trợ để không ai bị bỏ lại phía sau.”
            </p>
          </div>
          <div className="absolute bottom-4 right-6 transform rotate-180">
            <Icons.Quote />
          </div>
        </div>

        {/* 2. Action Cards Grid */}
        <div className="mb-20">
          <h3 className="text-center text-xs font-black text-gray-400 uppercase tracking-widest mb-8">
            5 HÀNH ĐỘNG THIẾT THỰC CỦA MỖI SINH VIÊN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {actionCards.map((card) => (
              <div 
                key={card.id}
                className="bg-white border border-[#F8F4EA] rounded-2xl p-5 shadow-[0_4px_25px_rgba(7,17,31,0.01)] hover:shadow-[0_10px_30px_rgba(7,17,31,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                    {renderIcon(card.icon)}
                  </div>
                  {/* Title */}
                  <h4 className="text-sm md:text-base font-extrabold text-[#07111F] tracking-tight leading-snug mb-2">
                    {card.title}
                  </h4>
                  {/* Description */}
                  <p className="text-xs text-[#475569] leading-relaxed font-semibold">
                    {card.description}
                  </p>
                </div>
                
                {/* Index tag */}
                <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-300 font-bold select-none">
                  <span>Hành động #{card.id}</span>
                  <span>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Final Conclusion Block */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#07111F] to-[#172C45] rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl mb-12">
          {/* Subtle Drum Deco background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden flex items-center justify-center">
            <svg className="w-96 h-96 text-white animate-pulse" fill="none" viewBox="0 0 100 100" stroke="currentColor">
              <circle cx="50" cy="50" r="45" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-[#FFD65A] bg-white/5 border border-white/10 uppercase">
              Lời kết Chương 6
            </span>
            
            <p className="text-lg md:text-2xl lg:text-3xl font-black leading-snug tracking-tight text-[#FFD65A]">
              “54 dân tộc là 54 sắc màu của Việt Nam.<br className="hidden md:inline" />
              Khác biệt không làm chúng ta xa nhau.<br className="hidden md:inline" />
              Định kiến mới tạo ra khoảng cách.<br className="hidden md:inline" />
              Tôn trọng, đoàn kết và tương trợ là cách để cùng phát triển.”
            </p>

            <div className="w-12 h-1 bg-[#FFD65A] mx-auto rounded-full"></div>

            {/* Navigation and Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setShowSources(prev => !prev)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full font-bold text-xs md:text-sm bg-white/5 border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {showSources ? "Ẩn nguồn tham khảo" : "Xem nguồn tham khảo"}
              </button>
              
              <a
                href="#thanh-tuu"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full font-bold text-xs md:text-sm bg-[#DA251D] hover:bg-[#ff3b33] text-white shadow-[0_4px_15px_rgba(218,37,29,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 text-center flex items-center justify-center"
              >
                Quay lại thành tựu
              </a>
            </div>

            {/* Collapsible reference list */}
            {showSources && (
              <div className="animate-fade-up fade-delay-100 text-left bg-white/[0.03] border border-[#ffffff]/10 rounded-2xl p-6 mt-6 max-w-2xl mx-auto space-y-3.5 select-text text-white/80">
                <h5 className="text-xs md:text-sm font-bold text-[#FFD65A] border-b border-white/10 pb-2 mb-2 uppercase tracking-wider">
                  Nguồn Tư Liệu & Cơ Sở Pháp Lý Chính Thống
                </h5>
                <ul className="list-disc pl-5 text-xs space-y-2.5 font-medium leading-relaxed">
                  <li>
                    <strong className="text-white">Hiến pháp nước CHXHCN Việt Nam năm 2013 (Điều 5):</strong> Quy định rõ ràng nguyên tắc bình đẳng, đoàn kết, tôn trọng giữa các dân tộc, nghiêm cấm mọi hành vi kỳ thị, chia rẽ.
                  </li>
                  <li>
                    <strong className="text-white">Nghị quyết số 88/2019/QH14 của Quốc hội:</strong> Phê duyệt Đề án tổng thể phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021–2030.
                  </li>
                  <li>
                    <strong className="text-white">Quyết định số 1719/QĐ-TTg của Thủ tướng Chính phủ:</strong> Phê duyệt Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi.
                  </li>
                  <li>
                    <strong className="text-white">Cổng thông tin điện tử Ủy ban Dân tộc (CEMA):</strong> Bản tin chính thức về công tác dân tộc, số liệu thống kê phát triển kinh tế - xã hội, chính sách hỗ trợ đồng bào.
                  </li>
                  <li>
                    <strong className="text-white">Slide bài giảng lý luận Chương 6:</strong> Môn học Chủ nghĩa xã hội khoa học về vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội.
                  </li>
                </ul>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
