import React, { useState } from 'react';

// Data for Section 4
const prejudiceCards = [
  {
    id: 1,
    label: "Định kiến #1",
    prejudice: "“Người dân tộc thiểu số thì lạc hậu.”",
    truth:
      "Mỗi dân tộc đều có tri thức bản địa, kinh nghiệm sản xuất, kỹ thuật canh tác, y học dân gian, nghệ thuật và thiết chế cộng đồng riêng.",
    whyWrong:
      "Gọi một cộng đồng là “lạc hậu” là cách đánh giá phiến diện, lấy điều kiện hạ tầng hoặc mức phát triển kinh tế để quy chụp bản chất con người. Điều đó vừa sai về nhận thức, vừa gây tổn thương và tạo khoảng cách xã hội.",
    action:
      "Dùng cách gọi tôn trọng, tìm hiểu bối cảnh trước khi nhận xét, nhìn vào cả tiềm năng, tri thức và nỗ lực phát triển của cộng đồng.",
    source:
      "Slide Chương 6 môn Chủ nghĩa xã hội khoa học; Bộ Dân tộc và Tôn giáo",
    color: {
      light: "bg-rose-50/50",
      border: "border-rose-100",
      text: "text-rose-600",
      accent: "#E11D48",
      hoverBorder: "hover:border-rose-300"
    }
  },
  {
    id: 2,
    label: "Định kiến #2",
    prejudice: "“Vùng cao không có điều kiện phát triển.”",
    truth:
      "Vùng cao có tài nguyên cảnh quan, văn hóa, nông sản đặc hữu, tiềm năng du lịch cộng đồng và vị trí chiến lược về quốc phòng - an ninh.",
    whyWrong:
      "Cách nói này bỏ qua nỗ lực của đồng bào và các chính sách đang đầu tư vào giao thông, điện, nước, trường học, y tế, sinh kế và phát triển sản xuất.",
    action:
      "Khi nói về vùng cao, cần nhắc cả tiềm năng và khó khăn. Có thể ủng hộ sản phẩm địa phương, du lịch cộng đồng và chia sẻ thông tin có nguồn kiểm chứng.",
    source:
      "Báo Điện tử Chính phủ; Bộ Dân tộc và Tôn giáo",
    color: {
      light: "bg-amber-50/50",
      border: "border-amber-100",
      text: "text-amber-600",
      accent: "#D97706",
      hoverBorder: "hover:border-amber-300"
    }
  },
  {
    id: 3,
    label: "Định kiến #3",
    prejudice: "“Tập quán khác biệt là kỳ lạ.”",
    truth:
      "Khác biệt về trang phục, tiếng nói, ẩm thực, lễ hội, phong tục và tín ngưỡng là một phần của nền văn hóa Việt Nam thống nhất trong đa dạng.",
    whyWrong:
      "Biến khác biệt thành trò cười làm giảm giá trị bản sắc, tạo cảm giác tự ti văn hóa và có thể dẫn tới kỳ thị, xa cách giữa các cộng đồng.",
    action:
      "Tôn trọng tên gọi, bối cảnh văn hóa và quy tắc cộng đồng. Không quay, đăng hoặc chia sẻ hình ảnh có tính chế giễu, xúc phạm.",
    source:
      "Hiến pháp 2013; Slide Chương 6 môn Chủ nghĩa xã hội khoa học",
    color: {
      light: "bg-emerald-50/50",
      border: "border-emerald-100",
      text: "text-emerald-600",
      accent: "#059669",
      hoverBorder: "hover:border-emerald-300"
    }
  },
  {
    id: 4,
    label: "Định kiến #4",
    prejudice: "“Chia sẻ câu đùa kỳ thị trên mạng cũng không sao.”",
    truth:
      "Không gian mạng có thể làm định kiến lan truyền rất nhanh. Một bình luận hạ thấp cộng đồng vẫn là hành vi chia rẽ, dù được ngụy trang thành đùa vui.",
    whyWrong:
      "Kỳ thị lặp đi lặp lại làm suy yếu tinh thần đoàn kết, tạo môi trường cho thông tin xấu độc và các luận điệu lợi dụng vấn đề dân tộc.",
    action:
      "Không chia sẻ, không cổ vũ, giải thích ôn hòa khi có thể, báo cáo nội dung kích động chia rẽ và ưu tiên nguồn tin chính thống.",
    source:
      "Hiến pháp 2013; Bộ Dân tộc và Tôn giáo",
    color: {
      light: "bg-indigo-50/50",
      border: "border-indigo-100",
      text: "text-indigo-600",
      accent: "#4F46E5",
      hoverBorder: "hover:border-indigo-300"
    }
  }
];

// SVG Icons
const Icons = {
  AlertTriangle: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  CheckCircle: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h2v-2.243a5 5 0 013.536 0z" />
    </svg>
  ),
  HandHeart: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  BookOpen: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
};

export default function Section4Prejudice() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section 
      id="phe-phan-chia-re" 
      className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FFF8E7]/30 to-[#FFFFFF] select-none"
    >
      {/* Decorative Drum Background Pattern (Faded) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden">
        <svg className="absolute -top-[20%] -left-[20%] w-[80%] md:w-[50%] aspect-square max-w-none text-[#07111F]" fill="none" viewBox="0 0 1000 1000">
          <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1" strokeDasharray="10 15" />
          <circle cx="500" cy="500" r="380" stroke="currentColor" strokeWidth="2" />
          <circle cx="500" cy="500" r="320" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="200" stroke="currentColor" strokeWidth="2" strokeDasharray="20 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-widest text-[#DA251D] bg-[#DA251D]/10 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DA251D]"></span>
            Phản biện định kiến
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#07111F] tracking-tight leading-none mb-6">
            LẬT MỞ ĐỊNH KIẾN
          </h2>
          <p className="text-base md:text-lg font-bold text-[#DA251D] leading-relaxed mb-4 max-w-2xl mx-auto">
            Khác biệt không phải để chia rẽ. Mỗi định kiến cần được đối thoại bằng sự thật, sự tôn trọng và tinh thần đoàn kết.
          </p>
          <div className="w-16 h-1 bg-[#DA251D] mx-auto mb-6 rounded-full"></div>
          <p className="text-xs md:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto font-medium">
            Đoàn kết không chỉ nằm trong khẩu hiệu. Nó bắt đầu từ cách ta nói về một cộng đồng, cách ta phản ứng trước định kiến và cách ta kiểm chứng thông tin trước khi chia sẻ.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {prejudiceCards.map((card) => {
            const isExpanded = !!expandedCards[card.id];
            const colors = card.color;

            return (
              <div 
                key={card.id}
                onClick={() => toggleCard(card.id)}
                className={`group relative bg-white border ${colors.border} ${colors.hoverBorder} rounded-3xl p-6 md:p-8 shadow-[0_4px_30px_rgba(7,17,31,0.02)] hover:shadow-[0_12px_40px_rgba(7,17,31,0.06)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isExpanded ? 'ring-2 ring-offset-2 ring-offset-white' : ''
                }`}
                style={{
                  ringColor: colors.accent
                }}
              >
                {/* Visual Accent Badge */}
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-[0.03] translate-x-6 -translate-y-6">
                  <div 
                    className="w-full h-full rounded-full"
                    style={{ backgroundColor: colors.accent }}
                  />
                </div>

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] md:text-xs font-black tracking-widest text-gray-400 uppercase">
                      {card.label}
                    </span>
                    <span className={`text-[10px] md:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${colors.light} ${colors.text} border ${colors.border}`}>
                      {isExpanded ? "Đã lật mở" : "Chờ đối thoại"}
                    </span>
                  </div>

                  {/* Prejudice Display (Always Visible) */}
                  <div className="flex items-start gap-3.5 mb-6">
                    <span className="text-xl md:text-2xl p-2.5 bg-rose-50 rounded-2xl text-rose-500 flex items-center justify-center shrink-0">
                      <Icons.AlertTriangle />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">ĐỊNH KIẾN PHỔ BIẾN</h4>
                      <p className="text-base md:text-lg lg:text-xl font-extrabold text-[#07111F] leading-snug italic tracking-tight">
                        {card.prejudice}
                      </p>
                    </div>
                  </div>

                  {/* Details Container (Expandable) */}
                  <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-gray-100' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden space-y-5">
                      
                      {/* Part 2: Truth */}
                      <div className="flex items-start gap-3">
                        <span className="text-lg p-2 bg-emerald-50 rounded-xl text-emerald-500 flex items-center justify-center shrink-0">
                          <Icons.CheckCircle />
                        </span>
                        <div>
                          <h5 className="text-[11px] font-black text-emerald-600 uppercase tracking-widest mb-0.5">Sự thật khách quan</h5>
                          <p className="text-xs md:text-sm text-[#07111F] leading-relaxed font-bold">
                            {card.truth}
                          </p>
                        </div>
                      </div>

                      {/* Part 3: Why Wrong */}
                      <div className="flex items-start gap-3">
                        <span className="text-lg p-2 bg-indigo-50 rounded-xl text-indigo-500 flex items-center justify-center shrink-0">
                          <Icons.Brain />
                        </span>
                        <div>
                          <h5 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest mb-0.5">Vì sao quan điểm này sai?</h5>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed font-medium">
                            {card.whyWrong}
                          </p>
                        </div>
                      </div>

                      {/* Part 4: Should Do */}
                      <div className="flex items-start gap-3">
                        <span className="text-lg p-2 bg-amber-50 rounded-xl text-amber-500 flex items-center justify-center shrink-0">
                          <Icons.HandHeart />
                        </span>
                        <div>
                          <h5 className="text-[11px] font-black text-[#D97706] uppercase tracking-widest mb-0.5">Hành động nên làm</h5>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed font-medium bg-[#FFF8E7]/40 p-2.5 rounded-xl border border-[#F8F4EA]">
                            {card.action}
                          </p>
                        </div>
                      </div>

                      {/* Source */}
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold pt-2 select-none">
                        <Icons.BookOpen />
                        <span>Nguồn đối chiếu: {card.source}</span>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Card Footer Interaction Prompt */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-bold select-none">Click để đọc phân tích</span>
                  <button 
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-black text-[#07111F] hover:text-[#DA251D] transition-colors duration-300"
                    style={{ color: isExpanded ? "#DA251D" : "" }}
                  >
                    {isExpanded ? "Thu gọn phân tích" : "Lật mở sự thật"}
                    <span className={`inline-block transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'translate-x-0.5'}`}>
                      ▼
                    </span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
