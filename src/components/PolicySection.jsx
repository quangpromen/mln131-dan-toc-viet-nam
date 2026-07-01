import React, { useState } from 'react';

// Images Data Objects
const overviewImage = {
  src: "/images/policy/policy-overview.jpg",
  alt: "Thủ tướng Phạm Minh Chính chủ trì Hội nghị tổng kết Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi",
  credit: "Nguồn ảnh: Báo Điện tử Chính phủ",
  sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
};

const infrastructureImage = {
  src: "/images/policy/infrastructure-action.jpg",
  alt: "Hạ tầng đường giao thông kết nối liên thôn được nhựa hóa kiên cố vùng dân tộc thiểu số",
  credit: "Nguồn ảnh: Báo Điện tử Chính phủ",
  sourceUrl: "https://baochinhphu.vn/xoa-loi-ngheo-vung-dong-bao-dtts-va-mien-nui-bai-1-thu-hep-khoang-cach-phat-trien-102250710231336075.htm"
};

const legalCards = [
  {
    tag: "HIẾN PHÁP",
    title: "Hiến pháp 2013",
    description: "Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; nghiêm cấm kỳ thị, chia rẽ dân tộc; các dân tộc có quyền dùng tiếng nói, chữ viết, giữ gìn bản sắc văn hóa.",
    meaning: "Cơ sở pháp lý cao nhất cho tinh thần bình đẳng, đoàn kết, tương trợ.",
    sourceLabel: "Điều 5, Hiến pháp 2013",
    sourceUrl: "https://chinhphu.vn/hien-phap-nam-2013/chuong-i-che-do-chinh-tri-10052990",
    icon: "⚖️"
  },
  {
    tag: "QUỐC HỘI",
    title: "Nghị quyết 88/2019/QH14",
    description: "Quốc hội phê duyệt Đề án tổng thể phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021–2030.",
    meaning: "Cụ thể hóa chủ trương phát triển vùng dân tộc thiểu số và miền núi.",
    sourceLabel: "Nghị quyết 88/2019/QH14",
    sourceUrl: "https://vanban.chinhphu.vn/default.aspx?docid=198414&pageid=27160",
    icon: "🏛️"
  },
  {
    tag: "THỦ TƯỚNG CHÍNH PHỦ",
    title: "Quyết định 1719/QĐ-TTg",
    description: "Phê duyệt Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021–2030, giai đoạn I từ năm 2021 đến năm 2025.",
    meaning: "Chính sách trọng tâm để đầu tư, hỗ trợ và phát triển vùng dân tộc thiểu số và miền núi.",
    sourceLabel: "Quyết định 1719/QĐ-TTg",
    sourceUrl: "https://vanban.chinhphu.vn/?docid=204285&pageid=27160",
    icon: "📜"
  },
  {
    tag: "GIAI ĐOẠN MỚI",
    title: "Chương trình giai đoạn 2026–2030",
    description: "Giai đoạn mới tiếp tục đặt mục tiêu phát triển toàn diện vùng dân tộc thiểu số và miền núi, giảm nghèo đa chiều, bảo đảm an sinh xã hội, bảo tồn văn hóa và củng cố quốc phòng - an ninh.",
    meaning: "Cho thấy chính sách dân tộc tiếp tục được triển khai lâu dài, không dừng ở giai đoạn 2021–2025.",
    sourceLabel: "Bộ Dân tộc và Tôn giáo",
    sourceUrl: "https://bdttg.gov.vn/phe-duyet-ctmtqg-xay-dung-nong-thon-moi-giam-ngheo-ben-vung-va-phat-trien-ktxh-vung-dong-bao-dtts-mn-giai-doan-2026-2035-giai-doan-i-tu-nam-2026-den-nam-2030.htm",
    icon: "📅"
  }
];

const policyPillars = [
  {
    id: "pillar-1",
    title: "Chính trị",
    icon: "⚖️",
    description: "Thực hiện bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển giữa các dân tộc; bảo đảm quyền làm chủ, quyền tham gia quản lý nhà nước và xã hội của đồng bào các dân tộc.",
    meaning: "Đây là nền tảng của chính sách dân tộc. Bình đẳng chính trị giúp mọi dân tộc đều là chủ thể của đất nước, không phân biệt dân tộc đa số hay thiểu số.",
    quote: "Bình đẳng chính trị là nền móng để mọi dân tộc cùng tham gia xây dựng Nhà nước và bảo vệ Tổ quốc.",
    sourceLabel: "Hiến pháp 2013, Điều 5",
    sourceUrl: "https://chinhphu.vn/hien-phap-nam-2013/chuong-i-che-do-chinh-tri-10052990"
  },
  {
    id: "pillar-2",
    title: "Kinh tế",
    icon: "📈",
    description: "Ưu tiên đầu tư phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi; hỗ trợ hạ tầng, sinh kế, đất ở, nhà ở, đất sản xuất, nước sinh hoạt, phát triển sản xuất và giảm nghèo bền vững.",
    quote: "Phát triển kinh tế vùng dân tộc không chỉ là hỗ trợ khó khăn, mà là trao thêm điều kiện để đồng bào tự vươn lên.",
    image: {
      src: "/images/policy/economic-development.jpg",
      alt: "Đồng bào dân tộc thiểu số phát triển kinh tế vườn rừng, cải thiện thu nhập và đời sống",
      credit: "Nguồn ảnh: Báo Điện tử Chính phủ",
      sourceUrl: "https://baochinhphu.vn/xoa-loi-ngheo-vung-dong-bao-dtts-va-mien-nui-bai-cuoi-tap-trung-giai-quyet-5-nhat-102250711115252033.htm"
    },
    stats: [
      { value: "Trên 137.000 tỷ đồng", label: "Vốn thực hiện Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi (2021-2025)" },
      { value: "10 dự án", label: "Cấu phần chính của Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi" },
      { value: "Khoảng 423.000 tỷ đồng", label: "Ngân sách nhà nước bố trí (2026-2030)" }
    ],
    sourceLabel: "Báo Điện tử Chính phủ",
    sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
  },
  {
    id: "pillar-3",
    title: "Xã hội",
    icon: "🏥",
    description: "Bảo đảm an sinh xã hội, nâng cao khả năng tiếp cận giáo dục, y tế, nhà ở, nước sạch, thông tin và đào tạo nghề cho đồng bào dân tộc thiểu số.",
    quote: "An sinh xã hội là cách chính sách đi vào từng ngôi nhà, lớp học, trạm y tế và nguồn nước sinh hoạt của đồng bào.",
    image: {
      src: "/images/policy/social-welfare.jpg",
      alt: "Công tác giáo dục, chăm sóc sức khỏe và nâng cao an sinh xã hội cho con em vùng đồng bào dân tộc thiểu số",
      credit: "Nguồn ảnh: Báo Điện tử Chính phủ",
      sourceUrl: "https://baochinhphu.vn/xoa-loi-ngheo-vung-dong-bao-dtts-va-mien-nui-bai-cuoi-tap-trung-giai-quyet-5-nhat-102250711115252033.htm"
    },
    stats: [
      { value: "42.567 hộ", label: "Được hỗ trợ nhà ở" },
      { value: "479.358 hộ", label: "Được hỗ trợ nước sinh hoạt" },
      { value: "809 công trình", label: "Nước sạch tập trung xây dựng" },
      { value: "183 trạm", label: "Y tế xã được cải tạo, sửa chữa" },
      { value: "118 trạm", label: "Y tế được hỗ trợ trang bị" },
      { value: "629 công trình", label: "Trường, lớp học đạt chuẩn" }
    ],
    sourceLabel: "Báo Điện tử Chính phủ",
    sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
  },
  {
    id: "pillar-4",
    title: "Văn hóa",
    icon: "🎭",
    description: "Bảo tồn và phát huy tiếng nói, chữ viết, lễ hội, trang phục, tri thức bản địa, nghề thủ công, văn nghệ dân gian và các giá trị văn hóa truyền thống tốt đẹp của các dân tộc.",
    quote: "Thống nhất không có nghĩa là đồng hóa; mỗi bản sắc dân tộc là một phần làm giàu cho văn hóa Việt Nam.",
    image: {
      src: "/images/policy/cultural-preservation.jpg",
      alt: "Đồng bào các dân tộc thiểu số mặc trang phục truyền thống gìn giữ và phát huy bản sắc văn hóa dân tộc",
      credit: "Nguồn ảnh: Báo Điện tử Chính phủ",
      sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
    },
    stats: [
      { value: "48 làng, bản", label: "Được đầu tư bảo tồn" },
      { value: "69 điểm đến", label: "Du lịch truyền thống tiêu biểu" },
      { value: "4.409 nhà văn hóa", label: "Khu thể thao thôn được hỗ trợ" },
      { value: "124 lễ hội", label: "Lễ hội tiêu biểu được bảo tồn" },
      { value: "695 câu lạc bộ", label: "Sinh hoạt văn hóa dân gian" },
      { value: "5.760 đội", label: "Văn nghệ truyền thống thôn, bản" }
    ],
    sourceLabel: "Báo Điện tử Chính phủ",
    sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
  },
  {
    id: "pillar-5",
    title: "Quốc phòng - An ninh",
    icon: "🛡️",
    description: "Nhiều vùng đồng bào dân tộc thiểu số và miền núi nằm ở khu vực biên giới, núi cao, địa bàn chiến lược; vì vậy, phát triển kinh tế - xã hội phải gắn với giữ vững ổn định chính trị, trật tự an toàn xã hội, quốc phòng và an ninh.",
    quote: "Chăm lo đời sống đồng bào vùng dân tộc, miền núi cũng là củng cố thế trận lòng dân, thế trận quốc phòng toàn dân và an ninh nhân dân.",
    stats: [
      { value: "Trên 14,4 triệu người", label: "Dân số vùng DTTS & MN" },
      { value: "Chiếm 3/4", label: "Diện tích tự nhiên cả nước" }
    ],
    sourceLabel: "Báo Điện tử Chính phủ",
    sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
  }
];

const actionItems = [
  {
    num: "01",
    title: "Đầu tư hạ tầng thiết yếu",
    description: "Xây dựng, nâng cấp hệ thống đường giao thông kết nối, mạng lưới điện quốc gia, các công trình nước sinh hoạt sạch, trường học đạt chuẩn và trạm y tế cơ sở đạt chuẩn.",
    icon: "🛣️"
  },
  {
    num: "02",
    title: "Hỗ trợ sinh kế bền vững",
    description: "Đảm bảo đất sản xuất, giao đất giao rừng gắn với bảo vệ môi trường sinh thái, hỗ trợ chuyển đổi nghề nghiệp, đào tạo kỹ năng trồng trọt, chăn nuôi và hỗ trợ chuỗi giá trị nông lâm nghiệp.",
    icon: "🌾"
  },
  {
    num: "03",
    title: "Nâng cao chất lượng nguồn nhân lực",
    description: "Cung cấp học bổng, phát triển hệ thống trường phổ thông dân tộc nội trú và bán trú, tổ chức các lớp đào tạo nghề ngắn và dài hạn gắn liền với nhu cầu tuyển dụng tại địa phương.",
    icon: "🎓"
  },
  {
    num: "04",
    title: "Bảo tồn văn hóa truyền thống",
    description: "Duy trì và phát huy ngôn ngữ bản địa, bảo vệ di sản phi vật thể thông qua việc bảo tồn các ngày lễ hội cổ truyền, các câu lạc bộ văn hóa dân gian và xây dựng mô hình du lịch cộng đồng độc đáo.",
    icon: "🎨"
  },
  {
    num: "05",
    title: "Củng cố đoàn kết, chống chia rẽ",
    description: "Đẩy mạnh thông tin tuyên truyền chính sách pháp luật, ngăn chặn tình trạng phân biệt đối xử, kỳ thị dân tộc và kiên quyết đấu tranh chống mọi âm mưu lợi dụng vấn đề dân tộc để kích động chia rẽ.",
    icon: "🤝"
  }
];

const readMoreCards = [
  {
    title: "Từ Chương trình 135 đến Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi",
    description: "Phân tích hành trình phát triển vượt bậc của chính sách dân tộc Việt Nam, chuyển đổi mạnh mẽ từ tư duy 'hỗ trợ xã đặc biệt khó khăn' (xóa đói giảm nghèo đơn thuần) sang đầu tư tổng lực phát triển toàn diện vùng đồng bào dân tộc thiểu số và miền núi.",
    sourceLabel: "Quyết định 135/QĐ-TTg & Quyết định 1719/QĐ-TTg",
    sourceUrl: "https://vanban.chinhphu.vn/default.aspx?docid=5698&pageid=27160"
  },
  {
    title: "Hạ tầng là điều kiện của bình đẳng cơ hội",
    description: "Đánh giá vai trò nền tảng của hệ thống công trình điện đường trường trạm. Điện, đường giao thông thuận lợi không chỉ giúp phát triển giao thương mà còn mở rộng đáng kể cơ hội tiếp cận giáo dục chất lượng cao, dịch vụ y tế hiện đại và mở ra thị trường việc làm phong phú.",
    sourceLabel: "Tổng kết Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi (Báo Điện tử Chính phủ)",
    sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
  },
  {
    title: "Giữ bản sắc để phát triển bền vững",
    description: "Minh chứng thực tiễn về việc bảo tồn các lễ hội truyền thống, phục dựng các làng văn hóa thổ cẩm gắn liền với việc thúc đẩy du lịch sinh thái cộng đồng. Phát triển kinh tế song hành cùng lòng tự hào dân tộc và phát huy tinh hoa tri thức bản địa.",
    sourceLabel: "Tổng kết Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi (Báo Điện tử Chính phủ)",
    sourceUrl: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
  }
];

// Reusable Image component with credit overlay and custom error handling fallback
function ImageWithCredit({ image, className = "h-48", imgClassName = "object-cover", placeholderIcon = "🖼️", placeholderText = "Hình ảnh chính sách dân tộc" }) {
  const [hasError, setHasError] = useState(false);

  if (!image || !image.src || hasError) {
    return (
      <div className={`relative w-full ${className} rounded-2xl bg-gradient-to-br from-[#07111F] via-[#2A3E59] to-[#DA251D] flex flex-col items-center justify-center text-white/80 p-4 border border-white/10 overflow-hidden shadow-inner`}>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full text-white" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <span className="text-3xl mb-2">{placeholderIcon}</span>
        <span className="text-xs font-bold text-center tracking-wide">{placeholderText}</span>
        {image && image.credit && (
          <div className="absolute bottom-2 left-2 text-[10px] text-white/50">
            {image.credit}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl group shadow-md border border-[#F8F4EA]/80">
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full ${className} ${imgClassName} transition-transform duration-500 group-hover:scale-105`}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />
      {/* Credit overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 md:p-3 text-left flex justify-between items-end">
        <span className="text-[10px] text-white/95 leading-tight pr-4 font-medium line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
          {image.alt}
        </span>
        <a
          href={image.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] text-[#FFD65A] hover:underline whitespace-nowrap font-black shrink-0 flex items-center gap-0.5"
        >
          {image.credit} ↗
        </a>
      </div>
    </div>
  );
}

// Sub-components to keep code clean and modular
function LegalCard({ card }) {
  return (
    <div 
      className="bg-white rounded-[24px] p-6 md:p-8 border border-[#F8F4EA] shadow-[0_8px_30px_rgb(7,17,31,0.02)] hover:shadow-[0_15px_40px_rgba(7,17,31,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest text-[#DA251D] bg-[#DA251D]/10 px-3 py-1 rounded-full uppercase">
            {card.tag}
          </span>
          <span className="text-xl md:text-2xl">{card.icon}</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-[#07111F] mb-3 leading-tight">
          {card.title}
        </h3>
        <p className="text-sm text-[#475569] leading-relaxed mb-4">
          {card.description}
        </p>
      </div>
      <div className="pt-4 border-t border-gray-100 mt-auto">
        <p className="text-xs font-medium text-[#07111F] mb-2">
          <span className="text-[#DA251D] font-bold">Ý nghĩa:</span> {card.meaning}
        </p>
        <a 
          href={card.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-xs font-bold text-[#07111F] hover:text-[#DA251D] transition-colors duration-200 mt-2"
        >
          🔍 Xem nguồn: {card.sourceLabel}
          <span className="ml-1 text-[10px]">↗</span>
        </a>
      </div>
    </div>
  );
}

function PillarCard({ pillar }) {
  return (
    <div 
      className="bg-white rounded-[24px] p-6 md:p-8 border border-[#F8F4EA] shadow-[0_8px_30px_rgb(7,17,31,0.02)] hover:shadow-[0_15px_40px_rgba(7,17,31,0.05)] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 justify-between"
    >
      {/* Left side: content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Header and Title */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl p-2.5 bg-[#FFF8E7] rounded-xl text-[#DA251D] flex items-center justify-center">
              {pillar.icon}
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-[#07111F] tracking-tight">
              Trụ cột: {pillar.title}
            </h3>
          </div>

          {/* Core Info */}
          <p className="text-sm text-[#475569] leading-relaxed mb-6 font-medium">
            {pillar.description}
          </p>

          {/* Stats Section if available */}
          {pillar.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
              {pillar.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#FFF8E7]/40 border border-[#F8F4EA] p-3 rounded-2xl text-left">
                  <div className="text-base md:text-lg font-black text-[#DA251D] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#475569] font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Highlight quote */}
          <div className="bg-[#F8F4EA]/50 border-l-4 border-[#DA251D] p-3.5 rounded-r-xl mb-4">
            <p className="text-xs italic text-[#07111F] font-semibold leading-relaxed">
              "{pillar.quote}"
            </p>
          </div>
        </div>

        {/* Footer (Meaning and Source) */}
        <div className="pt-4 border-t border-gray-100 mt-4 flex flex-col gap-2">
          {pillar.meaning && (
            <p className="text-xs text-[#475569]">
              <span className="font-bold text-[#07111F]">Ý nghĩa thuyết trình: </span>
              {pillar.meaning}
            </p>
          )}
          <a 
            href={pillar.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-xs font-bold text-[#07111F] hover:text-[#DA251D] transition-colors duration-200"
          >
            📖 Nguồn chính thống: {pillar.sourceLabel}
            <span className="ml-1 text-[10px]">↗</span>
          </a>
        </div>
      </div>

      {/* Right side: Thumbnail if available */}
      {pillar.image && (
        <div className="w-full md:w-[260px] lg:w-[320px] shrink-0 self-center">
          <ImageWithCredit
            image={pillar.image}
            className="h-40 sm:h-44 md:h-52 w-full"
            imgClassName="object-cover rounded-2xl"
            placeholderText={`Hình ảnh Trụ cột ${pillar.title}`}
            placeholderIcon={pillar.icon}
          />
        </div>
      )}
    </div>
  );
}

function ActionCard({ item }) {
  return (
    <div className="group relative bg-white border border-[#F8F4EA] rounded-2xl p-5 shadow-[0_4px_20px_rgba(7,17,31,0.01)] hover:shadow-[0_10px_35px_rgba(7,17,31,0.04)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4">
      {/* Step Number and Icon */}
      <div className="flex items-center gap-3">
        <div className="text-lg md:text-xl font-black text-[#DA251D]/30 tracking-wider">
          {item.num}
        </div>
        <div className="text-2xl p-2 bg-[#FFF8E7] rounded-xl text-[#DA251D] flex items-center justify-center">
          {item.icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h4 className="text-sm md:text-base font-bold text-[#07111F] mb-1.5 group-hover:text-[#DA251D] transition-colors duration-200">
          {item.title}
        </h4>
        <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function ReadMoreCard({ card }) {
  return (
    <div className="bg-white border border-[#F8F4EA] rounded-2xl p-6 shadow-[0_4px_20px_rgba(7,17,31,0.01)] hover:shadow-[0_12px_30px_rgba(7,17,31,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <h4 className="text-base md:text-lg font-bold text-[#07111F] mb-2 leading-snug">
          {card.title}
        </h4>
        <p className="text-xs md:text-sm text-[#475569] leading-relaxed mb-4">
          {card.description}
        </p>
      </div>
      <div className="pt-3 border-t border-gray-100 mt-auto">
        <a 
          href={card.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-xs font-bold text-[#07111F] hover:text-[#DA251D] transition-colors duration-200"
        >
          🔗 Nguồn tư liệu: {card.sourceLabel}
          <span className="ml-1 text-[10px]">↗</span>
        </a>
      </div>
    </div>
  );
}

export default function PolicySection() {
  return (
    <section 
      id="chinh-sach-dan-toc" 
      className="relative scroll-mt-24 py-16 md:py-24 lg:py-28 overflow-hidden select-none bg-gradient-to-b from-[#FFF8E7] via-[#F8F4EA] to-[#FFFFFF]"
    >
      {/* Cultural Drum chìm Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        {/* Top Right drum pattern */}
        <svg className="absolute -top-[10%] -right-[10%] w-[100%] md:w-[60%] aspect-square max-w-none text-[#07111F]" fill="none" viewBox="0 0 1000 1000">
          <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1" strokeDasharray="10 15" />
          <circle cx="500" cy="500" r="380" stroke="currentColor" strokeWidth="2" />
          <circle cx="500" cy="500" r="320" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="260" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="200" stroke="currentColor" strokeWidth="2" strokeDasharray="20 10" />
          <circle cx="500" cy="500" r="140" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M500,500 L500,420 M500,500 L500,580 M500,500 L420,500 M500,500 L580,500 M500,500 L443,443 M500,500 L557,557 M500,500 L443,557 M500,500 L557,443" stroke="currentColor" strokeWidth="2" />
        </svg>
        {/* Bottom Left drum pattern */}
        <svg className="absolute -bottom-[10%] -left-[10%] w-[100%] md:w-[60%] aspect-square max-w-none text-[#07111F]" fill="none" viewBox="0 0 1000 1000">
          <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 8" />
          <circle cx="500" cy="500" r="350" stroke="currentColor" strokeWidth="2" />
          <circle cx="500" cy="500" r="250" stroke="currentColor" strokeWidth="1" strokeDasharray="15 5" />
          <circle cx="500" cy="500" r="150" stroke="currentColor" strokeWidth="2.5" />
          <path d="M500,500 L500,450 M500,500 L500,550 M500,500 L450,500 M500,500 L550,500 M500,500 L465,465 M500,500 L535,535 M500,500 L465,535 M500,500 L535,465" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* KHỐI 1: MỞ ĐẦU CHÍNH SÁCH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text - column span 7 */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up fade-delay-100 mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DA251D]/20 bg-[#DA251D]/5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#DA251D] animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-[#DA251D] uppercase">
                CƠ SỞ CHÍNH THỐNG
              </span>
            </div>

            {/* Heading */}
            <h2 className="animate-fade-up fade-delay-300 text-3xl md:text-5xl font-black text-[#07111F] tracking-tight leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#DA251D] to-[#FFD65A] bg-clip-text text-transparent">NĂM TRỤ CỘT</span>
              <br />CHÍNH SÁCH DÂN TỘC
            </h2>

            {/* Subline */}
            <p className="animate-fade-up fade-delay-400 text-[#DA251D] text-xs md:text-sm uppercase tracking-widest font-black mb-6">
              Bình đẳng – Đoàn kết – Tôn trọng – Giúp nhau cùng phát triển
            </p>

            {/* Description */}
            <p className="animate-fade-up fade-delay-500 text-sm md:text-base text-[#475569] leading-relaxed mb-6">
              Chính sách dân tộc của Đảng và Nhà nước Việt Nam hướng tới mục tiêu bảo đảm bình đẳng thực chất, củng cố khối đại đoàn kết toàn dân tộc, phát triển toàn diện vùng dân tộc thiểu số và miền núi, đồng thời giữ vững quốc phòng - an ninh trên các địa bàn chiến lược.
            </p>

            {/* Callout quote */}
            <div className="animate-fade-up fade-delay-600 bg-white border-l-4 border-[#DA251D] p-5 rounded-r-2xl shadow-md w-full text-left">
              <p className="text-xs md:text-sm font-semibold text-[#07111F] leading-relaxed">
                💡 <span className="font-extrabold text-[#DA251D]">Nhấn mạnh: </span>
                Bình đẳng không chỉ là quyền được ghi nhận trong pháp luật, mà còn là cơ hội được học tập, lao động, phát triển, giữ gìn bản sắc và tham gia xây dựng đất nước.
              </p>
            </div>
          </div>

          {/* Right: Image - column span 5 */}
          <div className="lg:col-span-5 w-full animate-fade-up fade-delay-600">
            <ImageWithCredit 
              image={overviewImage} 
              className="h-64 sm:h-80 md:h-[400px] lg:h-[350px]" 
              imgClassName="object-cover rounded-[28px]" 
              placeholderText="Tổng quan Chính sách Dân tộc Việt Nam"
              placeholderIcon="🤝"
            />
          </div>
        </div>

        {/* KHỐI 2: CƠ SỞ CHÍNH SÁCH CHÍNH THỐNG */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="border-b border-[#F8F4EA] pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#07111F] tracking-tight">
                Cơ sở chính sách chính thống
              </h3>
              <p className="text-sm text-[#475569] mt-2 font-medium">
                Các văn bản nền tảng thể hiện quan điểm nhất quán của Việt Nam về bình đẳng, đoàn kết, tôn trọng và hỗ trợ các dân tộc cùng phát triển.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalCards.map((card, index) => (
              <LegalCard key={index} card={card} />
            ))}
          </div>
        </div>

        {/* KHỐI 3: NĂM TRỤ CỘT CHÍNH SÁCH DÂN TỘC */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="border-b border-[#F8F4EA] pb-4">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#07111F] tracking-tight">
                Năm trụ cột chính sách dân tộc
              </h3>
              <p className="text-sm text-[#475569] mt-2 font-medium">
                Chính sách dân tộc được triển khai toàn diện trên các lĩnh vực chính trị, kinh tế, xã hội, văn hóa, quốc phòng - an ninh.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {policyPillars.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>

        {/* KHỐI 4: TỪ CHỦ TRƯƠNG ĐẾN ĐỜI SỐNG */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="border-b border-[#F8F4EA] pb-4">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#07111F] tracking-tight">
                Từ chủ trương đến đời sống
              </h3>
              <p className="text-sm text-[#475569] mt-2 font-medium">
                Chính sách dân tộc chỉ thực sự có ý nghĩa khi được chuyển hóa thành những công trình, sinh kế, cơ hội học tập, chăm sóc y tế và đời sống văn hóa cụ thể cho đồng bào.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Infrastructure Image - column span 5 */}
            <div className="lg:col-span-5 w-full flex flex-col justify-center">
              <ImageWithCredit
                image={infrastructureImage}
                className="h-64 sm:h-80 lg:h-full min-h-[300px]"
                imgClassName="object-cover rounded-[24px]"
                placeholderText="Hạ tầng thiết yếu vùng dân tộc thiểu số và miền núi"
                placeholderIcon="🛣️"
              />
            </div>

            {/* Right: 5 Action Cards - column span 7 */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {actionItems.map((item, index) => (
                <ActionCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* KHỐI 5: ĐỌC THÊM */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="border-b border-[#F8F4EA] pb-4">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#07111F] tracking-tight">
                Đọc thêm
              </h3>
              <p className="text-sm text-[#475569] mt-2 font-medium">
                Một số hướng mở rộng để liên hệ khi thuyết trình về chính sách dân tộc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {readMoreCards.map((card, index) => (
              <ReadMoreCard key={index} card={card} />
            ))}
          </div>
        </div>

        {/* CÂU CHỐT CUỐI SECTION 2 */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#07111F] via-[#5C1615] to-[#DA251D] p-8 md:p-14 text-center shadow-xl border border-white/10 group">
            {/* Ambient light effect inside Quote Card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Quote SVG Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-[#FFD65A]/80 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Paragraph */}
            <p className="text-lg md:text-2xl lg:text-[25px] font-black text-white leading-relaxed max-w-4xl mx-auto drop-shadow-md">
              Chính sách dân tộc của Đảng và Nhà nước Việt Nam là hệ thống chính sách toàn diện, vừa bảo đảm quyền bình đẳng của các dân tộc, vừa tạo điều kiện phát triển kinh tế - xã hội, bảo tồn văn hóa, củng cố quốc phòng - an ninh và tăng cường khối đại đoàn kết toàn dân tộc.
            </p>

            {/* Author indicator */}
            <div className="mt-6 flex justify-center items-center gap-3">
              <span className="w-10 h-[1.5px] bg-[#FFD65A]/50"></span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#FFD65A] font-bold">
                TỔNG KẾT LUẬN CHƯƠNG 6 • VẤN ĐỀ DÂN TỘC
              </span>
              <span className="w-10 h-[1.5px] bg-[#FFD65A]/50"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
