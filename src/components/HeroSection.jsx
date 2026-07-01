import React from 'react';

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-cover bg-center select-none"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(5,10,25,0.96) 0%, rgba(5,10,25,0.8) 42%, rgba(5,10,25,0.25) 100%),
          url("/images/hero-54-dan-toc.jpg"),
          linear-gradient(135deg, #07111F 0%, #1A2E40 100%)
        `
      }}
    >
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-4 flex flex-col justify-between h-full relative z-10">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-3xl my-auto">
          
          {/* Tagline Badge */}
          <div className="animate-fade-up fade-delay-100 mb-2 md:mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DA251D] animate-pulse"></span>
            <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">
              Chương 6 • Chủ nghĩa xã hội khoa học
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up fade-delay-300 font-extrabold tracking-tight text-white mb-2 md:mb-3 leading-[1.05] drop-shadow-md">
            <span className="block text-[32px] md:text-[46px] lg:text-[54px] xl:text-[60px] bg-gradient-to-r from-[#FFD65A] via-[#FFF2A8] to-[#F8B400] bg-clip-text text-transparent">
              BÌNH ĐẲNG
            </span>
            <span className="block text-[32px] md:text-[46px] lg:text-[54px] xl:text-[60px] bg-gradient-to-r from-[#FFD65A] via-[#FFF2A8] to-[#F8B400] bg-clip-text text-transparent">
              ĐOÀN KẾT
            </span>
            <span className="block text-[32px] md:text-[46px] lg:text-[54px] xl:text-[60px] bg-gradient-to-r from-[#FFD65A] via-[#FFF2A8] to-[#F8B400] bg-clip-text text-transparent">
              TƯƠNG TRỢ
            </span>
            <span className="block text-base md:text-xl lg:text-[24px] font-bold text-white tracking-widest mt-1">
              GIỮA CÁC DÂN TỘC VIỆT NAM
            </span>
          </h1>

          {/* Short Description */}
          <p className="animate-fade-up fade-delay-500 text-xs md:text-sm lg:text-[15px] text-white/80 leading-relaxed max-w-2xl mb-4 md:mb-6 drop-shadow-sm">
            Cơ sở xây dựng khối đại đoàn kết toàn dân tộc, phát huy sức mạnh cộng đồng 54 dân tộc Việt Nam trong sự nghiệp xây dựng và bảo vệ Tổ quốc.
          </p>

          {/* 3 Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full mb-4 md:mb-6">
            {/* Card 1 */}
            <div className="animate-fade-up fade-delay-700 group relative p-3.5 lg:p-4 rounded-[16px] bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              <div className="text-xl mb-1.5 flex items-center justify-start h-7 w-7 rounded bg-white/5 justify-center text-[#FFD65A]">
                ＝
              </div>
              <h3 className="text-xs lg:text-sm font-bold text-white mb-1 tracking-wide group-hover:text-[#FFD65A] transition-colors duration-300">
                Bình đẳng
              </h3>
              <p className="text-[10px] lg:text-[11px] text-white/70 leading-relaxed">
                Các dân tộc đều có quyền và nghĩa vụ như nhau trong cộng đồng quốc gia Việt Nam.
              </p>
            </div>

            {/* Card 2 */}
            <div className="animate-fade-up fade-delay-800 group relative p-3.5 lg:p-4 rounded-[16px] bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              <div className="text-lg mb-1.5 flex items-center justify-start h-7 w-7 rounded bg-white/5 justify-center">
                🤝
              </div>
              <h3 className="text-xs lg:text-sm font-bold text-white mb-1 tracking-wide group-hover:text-[#FFD65A] transition-colors duration-300">
                Đoàn kết
              </h3>
              <p className="text-[10px] lg:text-[11px] text-white/70 leading-relaxed">
                Gắn bó trong khối đại đoàn kết toàn dân tộc, cùng xây dựng và bảo vệ Tổ quốc.
              </p>
            </div>

            {/* Card 3 */}
            <div className="animate-fade-up fade-delay-900 group relative p-3.5 lg:p-4 rounded-[16px] bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              <div className="text-lg mb-1.5 flex items-center justify-start h-7 w-7 rounded bg-white/5 justify-center text-[#DA251D]">
                ❤
              </div>
              <h3 className="text-xs lg:text-sm font-bold text-white mb-1 tracking-wide group-hover:text-[#FFD65A] transition-colors duration-300">
                Tương trợ
              </h3>
              <p className="text-[10px] lg:text-[11px] text-white/70 leading-relaxed">
                Các dân tộc hỗ trợ, giúp đỡ nhau cùng phát triển, không để ai bị bỏ lại phía sau.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="animate-fade-up fade-delay-1000 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="px-6 py-2.5 rounded-full font-bold text-xs md:text-sm text-white bg-[#DA251D] hover:bg-[#ff3b33] transition-all duration-300 shadow-[0_4px_15px_rgba(218,37,29,0.3)] hover:shadow-[0_6px_20px_rgba(218,37,29,0.55)] hover:scale-105 active:scale-95 text-center">
              Bắt đầu thuyết trình
            </button>
            <button className="px-6 py-2.5 rounded-full font-bold text-xs md:text-sm text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 text-center backdrop-blur-sm">
              Xem chính sách dân tộc
            </button>
          </div>

        </div>

        {/* Footer Area */}
        <div className="flex items-center justify-between w-full mt-2 pt-2.5 border-t border-white/5">
          {/* Photo Source */}
          <p className="text-[9px] md:text-xs text-white/50 tracking-wider">
            Nguồn ảnh minh họa: <span className="text-white/70">Đồng bào Việt phục</span>
          </p>

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center gap-0.5 select-none pointer-events-none md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-3">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-semibold">
              Cuộn xuống
            </span>
            <div className="text-white/60 text-xs animate-scroll-down">
              ↓
            </div>
          </div>
          
          {/* Dummy space for layout alignment */}
          <div className="w-16 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
}
