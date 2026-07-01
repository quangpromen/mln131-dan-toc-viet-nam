import React, { useState } from 'react';

// Data for Section 5
const scenarios = [
  {
    id: 1,
    situation:
      "Bạn nghe một người nói: “Người dân tộc thì học kém.” Bạn sẽ làm gì?",
    options: [
      {
        key: "A",
        text: "Im lặng vì nghĩ không liên quan đến mình.",
        correct: false,
        feedback:
          "Im lặng có thể khiến định kiến tiếp tục được lặp lại. Trong nhiều trường hợp, một lời giải thích ôn hòa sẽ giúp thay đổi cách nhìn."
      },
      {
        key: "B",
        text: "Hùa theo để câu chuyện vui hơn.",
        correct: false,
        feedback:
          "Hùa theo định kiến là tiếp tay cho kỳ thị. Những câu đùa kiểu này có thể làm tổn thương cộng đồng và làm suy yếu đoàn kết."
      },
      {
        key: "C",
        text: "Giải thích rằng đây là định kiến và cần nhìn vào điều kiện học tập, cơ hội tiếp cận giáo dục, không quy chụp cả cộng đồng.",
        correct: true,
        feedback:
          "Chính xác! Phản biện văn minh, chỉ ra các yếu tố khách quan giúp bảo vệ sự tôn trọng, bình đẳng và tinh thần đoàn kết."
      }
    ]
  },
  {
    id: 2,
    situation:
      "Bạn thấy một bài đăng chế giễu trang phục truyền thống của một dân tộc thiểu số. Bạn sẽ làm gì?",
    options: [
      {
        key: "A",
        text: "Chia sẻ lại vì thấy buồn cười.",
        correct: false,
        feedback:
          "Chia sẻ nội dung chế giễu sẽ làm định kiến lan rộng hơn và biến bản sắc văn hóa thành đối tượng bị xúc phạm."
      },
      {
        key: "B",
        text: "Bỏ qua hoàn toàn.",
        correct: false,
        feedback:
          "Bỏ qua không sai trong một số tình huống, nhưng nếu có thể, hãy góp phần giảm lan truyền nội dung kỳ thị."
      },
      {
        key: "C",
        text: "Không chia sẻ, có thể bình luận nhắc nhở lịch sự hoặc báo cáo nếu nội dung xúc phạm rõ ràng.",
        correct: true,
        feedback:
          "Đúng vậy. Không lan truyền và chủ động báo cáo nội dung xấu độc là cách thiết thực bảo vệ đoàn kết dân tộc trên không gian mạng."
      }
    ]
  },
  {
    id: 3,
    situation:
      "Một người nói: “Vùng dân tộc thiểu số chỉ nhận hỗ trợ, không đóng góp gì cho đất nước.” Bạn sẽ phản hồi thế nào?",
    options: [
      {
        key: "A",
        text: "Đồng ý vì nghĩ vùng đó còn khó khăn.",
        correct: false,
        feedback:
          "Khó khăn không có nghĩa là không đóng góp. Nhiều vùng dân tộc thiểu số có vị trí chiến lược, văn hóa đặc sắc, tài nguyên, sản phẩm địa phương và vai trò quan trọng trong bảo vệ Tổ quốc."
      },
      {
        key: "B",
        text: "Phản hồi rằng cần nhìn cả đóng góp về văn hóa, kinh tế, môi trường, quốc phòng - an ninh và tiềm năng phát triển.",
        correct: true,
        feedback:
          "Đúng. Đây là cách nhìn toàn diện, tôn trọng thực tế lịch sử và hiện tại, giúp các dân tộc gắn bó mật thiết, bình đẳng."
      },
      {
        key: "C",
        text: "Tranh cãi gay gắt để bảo vệ quan điểm.",
        correct: false,
        feedback:
          "Phản biện cần văn minh, dựa trên số liệu và lập luận khoa học. Tranh cãi gay gắt có thể làm cuộc đối thoại mất hiệu quả."
      }
    ]
  }
];

export default function Section5ScenarioQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedKey, setSelectedKey] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentScenario = scenarios[currentIdx];
  const progressPercent = ((currentIdx + 1) / scenarios.length) * 100;

  const handleSelectOption = (key) => {
    // Only allow selection if not already selected
    if (selectedKey !== null) return;
    setSelectedKey(key);
  };

  const handleNext = () => {
    if (currentIdx < scenarios.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedKey(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedKey(null);
    setQuizFinished(false);
  };

  return (
    <section 
      id="tinh-huong-tuong-tac" 
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#07111F] via-[#111e2f] to-[#0c1827] select-none text-white"
    >
      {/* Decorative Gradient Background Highlights */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-[#DA251D] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-[#FFD65A] opacity-[0.03] blur-[120px] pointer-events-none" />

      {/* Decorative Drum Pattern (Very Faded) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden flex items-center justify-center">
        <svg className="w-[120%] md:w-[60%] aspect-square max-w-none text-white" fill="none" viewBox="0 0 1000 1000">
          <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1" strokeDasharray="5 10" />
          <circle cx="500" cy="500" r="350" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="250" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-widest text-[#FFD65A] bg-white/5 border border-white/10 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD65A] animate-pulse"></span>
            Tương tác đa chiều
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-none mb-6">
            BẠN SẼ LÀM GÌ?
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto font-medium">
            Một lựa chọn nhỏ cũng có thể góp phần bảo vệ tinh thần bình đẳng, đoàn kết và tương trợ giữa các dân tộc. Hãy thử sức xử lý các tình huống thực tế dưới đây.
          </p>
        </div>

        {/* Quiz Box Container */}
        <div className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative">
          
          {!quizFinished ? (
            <div>
              {/* Progress and Question Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] md:text-xs font-extrabold tracking-widest text-[#FFD65A] uppercase bg-[#FFD65A]/10 border border-[#FFD65A]/20 px-3 py-1 rounded-full">
                  Tình huống {currentIdx + 1} / {scenarios.length}
                </span>
                
                {/* Visual Progress bar */}
                <div className="w-32 md:w-48 bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#FFD65A] h-full transition-all duration-500 ease-out" 
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Situation/Question text */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-bold leading-relaxed text-white">
                  {currentScenario.situation}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="space-y-4 mb-8">
                {currentScenario.options.map((option) => {
                  const isSelected = selectedKey === option.key;
                  const hasAnswered = selectedKey !== null;
                  
                  let optionStyle = "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20";
                  let badgeStyle = "bg-white/10 text-white/80";

                  if (isSelected) {
                    if (option.correct) {
                      optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-100 ring-2 ring-emerald-500/20";
                      badgeStyle = "bg-emerald-500 text-white";
                    } else {
                      optionStyle = "border-rose-500 bg-rose-500/10 text-rose-100 ring-2 ring-rose-500/20";
                      badgeStyle = "bg-rose-500 text-white";
                    }
                  } else if (hasAnswered) {
                    // Show correct answer even if not selected
                    if (option.correct) {
                      optionStyle = "border-emerald-500/40 bg-emerald-500/5 text-emerald-100/70";
                      badgeStyle = "bg-emerald-500/30 text-emerald-200";
                    } else {
                      optionStyle = "border-white/5 bg-white/[0.01] opacity-40 cursor-not-allowed";
                    }
                  }

                  return (
                    <button
                      key={option.key}
                      onClick={() => handleSelectOption(option.key)}
                      disabled={hasAnswered}
                      className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${optionStyle} ${
                        !hasAnswered ? 'cursor-pointer hover:-translate-y-0.5' : 'cursor-default'
                      }`}
                    >
                      {/* Option Key Badge */}
                      <span className={`w-7 h-7 rounded-lg font-black flex items-center justify-center shrink-0 text-xs md:text-sm shadow-md transition-colors duration-300 ${badgeStyle}`}>
                        {option.key}
                      </span>
                      
                      {/* Option Text */}
                      <span className="text-xs md:text-sm font-semibold leading-relaxed pt-0.5">
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Next Button */}
              {selectedKey !== null && (
                <div className="animate-fade-up fade-delay-100 border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  
                  {/* Feedback Message */}
                  <div className="flex-1 text-left">
                    <h5 className="text-[11px] font-black uppercase tracking-wider mb-1 text-gray-400">
                      Nhận xét phản biện
                    </h5>
                    <p className={`text-xs md:text-sm font-medium leading-relaxed ${
                      currentScenario.options.find(o => o.key === selectedKey)?.correct 
                        ? 'text-emerald-400' 
                        : 'text-rose-300'
                    }`}>
                      {currentScenario.options.find(o => o.key === selectedKey)?.feedback}
                    </p>
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 shrink-0 rounded-full font-bold text-xs md:text-sm bg-[#DA251D] hover:bg-[#ff3b33] text-white shadow-[0_4px_15px_rgba(218,37,29,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5"
                  >
                    {currentIdx === scenarios.length - 1 ? "Hoàn thành" : "Tình huống tiếp theo"}
                    <span>➔</span>
                  </button>

                </div>
              )}
            </div>
          ) : (
            /* Completion Screen */
            <div className="text-center py-10 space-y-6">
              {/* Huge check mark icon */}
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                  XUẤT SẮC! BẠN ĐÃ HOÀN THÀNH TÌNH HUỐNG
                </h3>
                <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                  Nhận thức đúng và hành động văn minh là bước đầu tiên để chung tay xóa bỏ định kiến, củng cố sức mạnh của tinh thần đại đoàn kết toàn dân tộc.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full font-bold text-xs md:text-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  Thử lại các tình huống
                </button>
                <a
                  href="#keu-goi-doan-ket"
                  className="px-6 py-2.5 rounded-full font-bold text-xs md:text-sm bg-[#FFD65A] text-[#07111F] hover:bg-[#ffe390] transition-all duration-300 shadow-[0_4px_15px_rgba(255,214,90,0.2)] hover:scale-105 active:scale-95"
                >
                  Tiến tới cam kết hành động ➔
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
