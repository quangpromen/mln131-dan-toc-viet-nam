import React, { useState } from 'react';

// Official Sources definition for data mapping
const sourceLinks = {
  governmentSummary: {
    label: "Báo Điện tử Chính phủ",
    url: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm"
  },
  governmentPhase2: {
    label: "Báo Điện tử Chính phủ",
    url: "https://baochinhphu.vn/chuong-trinh-1719-giai-doan-ii-giai-quyet-5-van-de-nhuc-nhoi-nhat-102250813125148488.htm"
  },
  cemaSummary: {
    label: "CEMA/Bộ Dân tộc và Tôn giáo",
    url: "https://www.cema.gov.vn/tin-tuc/tin-hoat-dong/hoat-dong-cua-uy-ban/bo-truong-dao-ngoc-dung-chuong-trinh-1719-giai-doan-i-dat-nhung-thanh-tuu-quan-trong-tao-nen-tang-cho-su-phat-trien-cach-mang-o-giai-doan-ii.htm"
  }
};

// SVG Icon Components
const SVGIcons = {
  Budget: () => (
    <svg className="w-6 h-6 text-[#FFD65A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Target: () => (
    <svg className="w-5 h-5 text-[#DA251D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-5 h-5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
    </svg>
  ),
  TrendingDown: () => (
    <svg className="w-5 h-5 text-[#DA251D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-9-9-4 4-6-6" />
    </svg>
  ),
  Graduation: () => (
    <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" />
    </svg>
  ),
  Home: () => (
    <svg className="w-5 h-5 text-[#DA251D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Water: () => (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13c0 5-3.5 7-8 7s-8-2-8-7c0-3.5 3-7 8-11 5 4 8 7.5 8 11z" />
    </svg>
  ),
  Land: () => (
    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  Road: () => (
    <svg className="w-6 h-6 text-[#07111F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  Power: () => (
    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Clinic: () => (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  School: () => (
    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Tree: () => (
    <svg className="w-6 h-6 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Leaf: () => (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Link: () => (
    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  Briefcase: () => (
    <svg className="w-5 h-5 text-[#DA251D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Book: () => (
    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg className="w-3.5 h-3.5 text-[#DA251D] shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2.166 4.9L8 1.154l5.834 3.746A1 1 0 0114.333 5.8v4.4c0 3.32-2.106 6.31-5.333 7.8a1 1 0 01-.8 0C4.94 16.51 2.833 13.52 2.833 10.2V5.8a1 1 0 01.5-.9zM9 11l3-3a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 11z" clipRule="evenodd" />
    </svg>
  ),
  SecondaryShield: () => (
    <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-5.618 3.03A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-3.5 h-3.5 ml-1 inline-block shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
};

// Custom visual component 1: PolicyDocumentVisual (1719/QĐ-TTg, 88/2019/QH14)
function PolicyDocumentVisual({ documentCode }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#7F1D1D] to-[#92400E] flex flex-col justify-center items-center p-6 relative overflow-hidden text-center select-none">
      {/* Traditional Vietnamese drum circle background pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
        <svg className="w-56 h-56 text-white" fill="none" viewBox="0 0 100 100" stroke="currentColor">
          <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="35" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="25" strokeWidth="1" strokeDasharray="5 2" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" strokeWidth="1" />
        </svg>
      </div>

      {/* Decorative top icon */}
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3 border border-white/20 shadow-inner">
        <svg className="w-5 h-5 text-[#FFD65A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <span className="text-[9px] font-black tracking-[0.25em] text-[#FFD65A] uppercase mb-1">
        Hệ thống pháp luật Việt Nam
      </span>
      
      <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
        Văn bản Chính phủ
      </h5>
      
      {/* Code display box */}
      <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-1.5 backdrop-blur-md shadow-md">
        <span className="text-sm md:text-base font-black text-[#FFD65A] tracking-wider block">
          {documentCode}
        </span>
      </div>

      <div className="absolute right-4 bottom-4 opacity-30">
        <svg className="w-8 h-8 text-[#FFD65A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-5.618 3.03A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    </div>
  );
}

// Custom visual component 2: StatisticsReportVisual (Cục Thống kê)
function StatisticsReportVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#07111F] to-[#1F2E45] flex flex-col justify-between p-6 relative overflow-hidden text-left select-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" fill="none" viewBox="0 0 200 120" stroke="currentColor">
          <line x1="0" y1="20" x2="200" y2="20" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="200" y2="40" strokeWidth="0.5" />
          <line x1="0" y1="60" x2="200" y2="60" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="200" y2="80" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.5" />
          <line x1="40" y1="0" x2="40" y2="120" strokeWidth="0.5" />
          <line x1="80" y1="0" x2="80" y2="120" strokeWidth="0.5" />
          <line x1="120" y1="0" x2="120" y2="120" strokeWidth="0.5" />
          <line x1="160" y1="0" x2="160" y2="120" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between w-full">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-[8px] font-black tracking-widest text-[#FFD65A] uppercase">
            Tổng cục Thống kê Việt Nam
          </span>
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
          </svg>
        </div>

        <div className="my-auto py-1">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 leading-snug">
            Điều tra 53 dân tộc thiểu số
          </h5>
          <span className="text-sm font-black text-emerald-400 tracking-wide block">
            BÁO CÁO KẾT QUẢ NĂM 2024
          </span>
        </div>

        {/* Dynamic clean SVG chart visual */}
        <div className="flex items-end gap-1.5 h-12 w-full pt-1">
          <div className="bg-emerald-500/30 hover:bg-emerald-500/50 w-full h-[35%] rounded-t transition-all duration-300"></div>
          <div className="bg-[#DA251D]/30 hover:bg-[#DA251D]/50 w-full h-[60%] rounded-t transition-all duration-300"></div>
          <div className="bg-[#FFD65A]/30 hover:bg-[#FFD65A]/50 w-full h-[80%] rounded-t transition-all duration-300"></div>
          <div className="bg-blue-500/30 hover:bg-blue-500/50 w-full h-[45%] rounded-t transition-all duration-300"></div>
          <div className="bg-indigo-500/30 hover:bg-indigo-500/50 w-full h-[95%] rounded-t transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}

// Custom visual component 3: EthnicCommunityFallback (CEMA/Bộ Dân tộc)
function EthnicCommunityFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#7C2D12] to-[#7F1D1D] flex flex-col justify-between p-6 relative overflow-hidden text-left select-none">
      {/* Traditional ethnic embroidery pattern chìm */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
        <svg className="w-56 h-56 text-[#FFD65A]" fill="none" viewBox="0 0 100 100" stroke="currentColor">
          <polygon points="50,5 95,50 50,95 5,50" strokeWidth="1" />
          <polygon points="50,15 85,50 50,85 15,50" strokeWidth="0.5" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="12" strokeWidth="1" />
          <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.5" />
          <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between w-full">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[8px] font-black tracking-widest text-[#FFD65A] uppercase">
            Ủy ban Dân tộc • CEMA
          </span>
          <svg className="w-4 h-4 text-[#FFD65A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>

        <div className="my-auto py-1">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 leading-snug">
            Cơ quan công tác chuyên ngành
          </h5>
          <span className="text-sm font-black text-[#FFD65A] tracking-wider block">
            VÙNG ĐỒNG BÀO DTTS & MN
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[9px] text-gray-200 font-bold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD65A] animate-pulse"></span>
          Đại đoàn kết toàn dân tộc
        </div>
      </div>
    </div>
  );
}

// Custom visual component 4: MountainDevelopmentFallback (Chiến lược vùng cao)
function MountainDevelopmentFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0B1628] to-[#047857] flex flex-col justify-between p-6 relative overflow-hidden text-left select-none">
      {/* Mountain range outline with CSS/SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-25 pointer-events-none">
        <svg className="w-full h-full text-emerald-100" viewBox="0 0 100 50" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,50 L25,15 L45,35 L75,8 L100,50 Z" />
          <path d="M12,50 L38,25 L65,40 L90,18 L100,50 Z" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between w-full">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[8px] font-black tracking-widest text-[#FFD65A] uppercase">
            Chiến lược quốc gia 2030
          </span>
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
          </svg>
        </div>

        <div className="my-auto py-1">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 leading-snug">
            Phát triển hạ tầng bền vững
          </h5>
          <span className="text-sm font-black text-emerald-400 tracking-wider block">
            VÙNG CAO & MIỀN NÚI VIỆT NAM
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[9px] text-green-200 font-bold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Tầm nhìn chiến lược 2045
        </div>
      </div>
    </div>
  );
}

// SafeImage component for handling load errors and custom fallbacks dynamically
function SafeImage({ src, alt, visualType, documentCode }) {
  const [hasError, setHasError] = useState(false);

  // Directly check types that shouldn't load external images
  if (visualType === "policy-document") {
    return <PolicyDocumentVisual documentCode={documentCode} />;
  }
  if (visualType === "statistics-report" || !src) {
    return <StatisticsReportVisual />;
  }

  if (hasError) {
    if (visualType === "ethnic-community") {
      return <EthnicCommunityFallback />;
    }
    if (visualType === "mountain-development") {
      return <MountainDevelopmentFallback />;
    }
    return <StatisticsReportVisual />;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
  );
}

// Source link chip component
function SourceChip({ sourceKey }) {
  const source = sourceLinks[sourceKey];
  if (!source) return null;
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200 bg-white hover:border-[#DA251D] hover:text-[#DA251D] text-[#475569] shadow-sm hover:shadow transition-all duration-300 pointer-events-auto"
    >
      Nguồn: {source.label} <SVGIcons.ExternalLink />
    </a>
  );
}

// Source Badges Container for block-level footers
function SourceGroup({ primaryKey, secondaryKey }) {
  const primary = sourceLinks[primaryKey];
  const secondary = sourceLinks[secondaryKey];
  return (
    <div className="flex flex-wrap gap-3 justify-end items-center mt-6 pt-4 border-t border-gray-100/50">
      {primary && (
        <a
          href={primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full border border-red-200 bg-red-50/40 hover:bg-red-50 text-[#DA251D] hover:border-[#DA251D] hover:shadow-sm transition-all duration-300 pointer-events-auto"
        >
          <SVGIcons.ShieldCheck />
          <span>
            {secondaryKey ? "Nguồn chính: " : "Nguồn: "}
            {primary.label}
          </span>
          <SVGIcons.ExternalLink />
        </a>
      )}
      {secondary && (
        <a
          href={secondary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 bg-gray-50/50 hover:bg-gray-100 text-gray-600 hover:border-gray-400 hover:shadow-sm transition-all duration-300 pointer-events-auto"
        >
          <SVGIcons.SecondaryShield />
          <span>Nguồn bổ sung: {secondary.label}</span>
          <SVGIcons.ExternalLink />
        </a>
      )}
    </div>
  );
}

// Block Wrapper Component
function AchievementBlock({ id, title, description, children }) {
  return (
    <div id={id} className="relative z-10 py-12 border-b border-gray-150 last:border-b-0 animate-fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-8 text-left">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#07111F] tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-xs md:text-sm lg:text-base text-[#475569] font-medium leading-relaxed">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function AchievementSection() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  // Upgraded Reference Sources Data Array with context-safe images and visuals
  const referenceSources = [
    {
      id: 1,
      source: "Báo Điện tử Chính phủ",
      category: "Số liệu tổng kết",
      title: "Thủ tướng chủ trì hội nghị tổng kết Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi",
      summary: "Nguồn tổng hợp chính cho các số liệu về vốn đầu tư, giảm nghèo, nhà ở, hạ tầng, sinh kế, giáo dục và bảo tồn văn hóa trong giai đoạn 2021–2025.",
      image: "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/8/13/img9197-17550529290781656695381.jpg",
      url: "https://baochinhphu.vn/thu-tuong-chu-tri-hoi-nghi-tong-ket-chuong-trinh-muc-tieu-quoc-gia-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102250813095443062.htm",
      meta: "Giai đoạn 2021–2025",
      featured: true,
      visualType: "official-image",
      badge: "Nguồn chính"
    },
    {
      id: 2,
      source: "Hệ thống văn bản Chính phủ",
      category: "Văn bản pháp lý",
      title: "Quyết định 1719/QĐ-TTg của Thủ tướng Chính phủ",
      summary: "Cơ sở pháp lý trực tiếp phê duyệt Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn I 2021–2025.",
      image: "",
      url: "https://vanban.chinhphu.vn/?docid=204285&pageid=27160",
      meta: "Văn bản chính sách",
      featured: false,
      visualType: "policy-document",
      documentCode: "1719/QĐ-TTg",
      badge: "Văn bản nền tảng"
    },
    {
      id: 3,
      source: "Hệ thống văn bản Chính phủ",
      category: "Định hướng chính sách",
      title: "Nghị quyết 88/2019/QH14 của Quốc hội",
      summary: "Phê duyệt Đề án tổng thể phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021–2030.",
      image: "",
      url: "https://vanban.chinhphu.vn/default.aspx?docid=198414&pageid=27160",
      meta: "Quốc hội · 2021–2030",
      featured: false,
      visualType: "policy-document",
      documentCode: "88/2019/QH14",
      badge: "Định hướng chính sách"
    },
    {
      id: 6,
      source: "Báo Điện tử Chính phủ",
      category: "Cập nhật mới",
      title: "Đẩy mạnh thực hiện Chiến lược công tác dân tộc đến năm 2030, tầm nhìn đến năm 2045",
      summary: "Bài viết cập nhật định hướng mới, cho thấy thành tựu hiện tại là nền tảng nhưng vẫn còn nhiều vấn đề cần tiếp tục giải quyết.",
      image: "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2026/5/12/photo-1735292538836-1735292540634618495002-1778581415722163662909.jpg",
      url: "https://baochinhphu.vn/day-manh-thuc-hien-chien-luoc-cong-tac-dan-toc-den-nam-2030-tam-nhin-den-nam-2045-102260512172745238.htm",
      meta: "Cập nhật 2026",
      featured: true,
      visualType: "mountain-development",
      badge: "Định hướng mới"
    }
  ];

  // Filters mapping
  const filterAgencies = [
    'Tất cả',
    'Báo Chính phủ',
    'Văn bản Chính phủ'
  ];

  const filteredSources = activeFilter === 'Tất cả'
    ? referenceSources
    : referenceSources.filter(src => {
        if (activeFilter === 'Báo Chính phủ') return src.source === 'Báo Điện tử Chính phủ';
        if (activeFilter === 'Văn bản Chính phủ') return src.source === 'Hệ thống văn bản Chính phủ';
        return true;
      });

  // Data definitions inside component for blocks
  const povertyIncomeStats = [
    {
      value: "6/9",
      label: "nhóm mục tiêu đạt hoặc vượt kế hoạch",
      description: "Sau 5 năm thực hiện Chương trình, có 6 nhóm nhiệm vụ cơ bản đạt hoặc vượt kế hoạch.",
      icon: "Target",
      badge: "Hoàn thành tốt",
      sourceKey: "governmentPhase2"
    },
    {
      value: "3,4%",
      label: "giảm nghèo bình quân",
      description: "Mức giảm nghèo vùng đồng bào dân tộc thiểu số đạt bình quân 3,4%, vượt dự kiến của chương trình là 3,2%.",
      icon: "TrendingDown",
      badge: "Vượt mục tiêu",
      sourceKey: "governmentPhase2"
    },
    {
      value: "43,4 triệu",
      unit: "đồng/người/năm",
      label: "thu nhập bình quân",
      description: "Thu nhập bình quân của người dân tộc thiểu số đạt 43,4 triệu đồng/người/năm, tăng 3,1 lần so với năm 2020.",
      icon: "TrendingUp",
      sourceKey: "governmentPhase2"
    },
    {
      value: "54,8%",
      label: "lao động được đào tạo nghề",
      description: "Tỷ lệ lao động trong độ tuổi được đào tạo nghề phù hợp với nhu cầu, điều kiện đạt bình quân 54,8%, vượt mục tiêu chương trình là 50%.",
      icon: "Graduation",
      badge: "Vượt mục tiêu",
      sourceKey: "governmentPhase2"
    }
  ];

  const housingWaterStats = [
    {
      value: "10.549 hộ",
      label: "được hỗ trợ đất ở",
      icon: "Land",
      sourceKey: "governmentSummary"
    },
    {
      value: "42.567 hộ",
      label: "được hỗ trợ nhà ở",
      icon: "Home",
      sourceKey: "governmentSummary"
    },
    {
      value: "13.387 hộ",
      label: "được hỗ trợ trực tiếp đất sản xuất",
      icon: "Land",
      sourceKey: "governmentSummary"
    },
    {
      value: "54.899 hộ",
      label: "được hỗ trợ chuyển đổi nghề",
      icon: "Briefcase",
      sourceKey: "governmentSummary"
    },
    {
      value: "479.358 hộ",
      label: "được hỗ trợ nước sinh hoạt phân tán",
      icon: "Water",
      sourceKey: "governmentSummary"
    },
    {
      value: "809 công trình",
      label: "nước sinh hoạt tập trung được đầu tư xây dựng",
      icon: "Water",
      sourceKey: "governmentSummary"
    }
  ];

  const infrastructureStats = [
    { value: "6.018 công trình", label: "giao thông nông thôn được hỗ trợ đầu tư", icon: "Road" },
    { value: "442 công trình", label: "cung cấp điện", icon: "Power" },
    { value: "183 trạm y tế xã", label: "được cải tạo, sửa chữa", icon: "Clinic" },
    { value: "118 trạm y tế xã", label: "được hỗ trợ trang thiết bị", icon: "Clinic" },
    { value: "629 công trình", label: "trường, lớp học đạt chuẩn", icon: "School" }
  ];

  const livelihoodStats = [
    { value: "25.056 hộ", label: "được quy hoạch, sắp xếp, bố trí ổn định dân cư", icon: "Users" },
    { value: "403 dự án", label: "hỗ trợ sản xuất theo chuỗi giá trị", icon: "Link" },
    { value: "306 tỷ đồng", label: "tổng giá trị các dự án chuỗi giá trị", icon: "Briefcase" },
    { value: "383 dự án/mô hình", label: "chăn nuôi, trồng trọt", icon: "Leaf" },
    { value: "36.654 hộ", label: "tham gia các mô hình chăn nuôi, trồng trọt", icon: "Users" }
  ];

  const educationJobStats = [
    { value: "1.901 mô hình", label: "đào tạo nghề được hỗ trợ", icon: "Graduation", sourceKey: "governmentSummary" },
    { value: "115.575 lao động", label: "tham gia các mô hình đào tạo nghề", icon: "Users", sourceKey: "governmentSummary" },
    { value: "5.385 lao động", label: "được hỗ trợ đào tạo kỹ năng nghề, ngoại ngữ, đi làm việc ở nước ngoài", icon: "Graduation", sourceKey: "governmentSummary" },
    { value: "37.718 lao động", label: "được hỗ trợ giới thiệu, tư vấn đi làm việc ở nước ngoài theo hợp đồng", icon: "Briefcase", sourceKey: "governmentSummary" }
  ];

  const cultureStats = [
    { value: "48 làng, bản", label: "được hỗ trợ đầu tư xây dựng, bảo tồn", icon: "Home" },
    { value: "69 điểm đến du lịch", label: "tiêu biểu truyền thống của các dân tộc thiểu số", icon: "Sparkles" },
    { value: "4.409 nhà văn hóa/thể thao", label: "tại thôn, bản vùng đồng bào dân tộc thiểu số", icon: "Users" },
    { value: "124 lễ hội truyền thống", label: "tiêu biểu được bảo tồn, phát huy", icon: "Sparkles" },
    { value: "695 câu lạc bộ", label: "sinh hoạt văn hóa dân gian", icon: "Sparkles" },
    { value: "5.760 đội văn nghệ", label: "truyền thống tại các thôn, bản", icon: "Users" }
  ];

  return (
    <section id="thanh-tuu" className="scroll-mt-24 w-full relative">
      
      {/* ==================================================
          KHỐI 1: HEADER SECTION & MINI PREVIEW
          ================================================== */}
      <div className="bg-[#07111F] text-white pt-24 pb-20 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-[30%] -left-[10%] w-[50%] aspect-square rounded-full bg-red-950/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="animate-fade-up fade-delay-100 mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#DA251D] animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-[#FFD65A] uppercase">
                THÀNH TỰU THỰC TIỄN
              </span>
            </div>

            <h2 className="animate-fade-up fade-delay-300 text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              TỪ CHÍNH SÁCH
              <br />
              ĐẾN{" "}
              <span className="bg-gradient-to-r from-[#FFD65A] via-[#DA251D] to-[#FFD65A] bg-clip-text text-transparent">
                THÀNH TỰU THỰC TIỄN
              </span>
            </h2>

            <p className="animate-fade-up fade-delay-500 text-sm md:text-base text-gray-300 leading-relaxed font-medium">
              Những kết quả nổi bật trong phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi cho thấy chính sách dân tộc không chỉ dừng ở chủ trương, mà đã chuyển hóa thành hạ tầng, sinh kế, giáo dục, y tế, văn hóa và cơ hội phát triển cụ thể.
            </p>
          </div>

          <div className="w-full lg:w-96 animate-fade-up fade-delay-600 bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl relative">
            <div className="absolute top-3 right-3 flex space-x-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            
            <h4 className="text-xs uppercase tracking-widest text-[#FFD65A] font-bold mb-4 border-b border-white/5 pb-2">
              Dữ liệu tổng hợp
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-left">
                <span className="text-xs text-gray-400">Tổng ngân sách</span>
                <span className="text-sm font-black text-white">137.000+ tỷ đồng</span>
              </div>
              <div className="flex items-center justify-between text-left">
                <span className="text-xs text-gray-400">Dự án cốt lõi</span>
                <span className="text-sm font-black text-white">10 dự án lớn</span>
              </div>
              <div className="flex items-center justify-between text-left">
                <span className="text-xs text-gray-400">Mục tiêu cơ bản</span>
                <span className="text-sm font-black text-emerald-400 flex items-center gap-1">
                  6/9 đạt & vượt
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-medium">
              <span>Cập nhật giai đoạn I (2021–2025)</span>
              <span className="text-emerald-400 font-bold">● Đã xác thực</span>
            </div>
          </div>

        </div>
      </div>

      {/* ==================================================
          KHỐI 2: DASHBOARD TỔNG QUAN / QUY MÔ CHÍNH SÁCH
          ================================================== */}
      <div className="bg-[#07111F] pb-16 px-6 md:px-12 lg:px-16 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="bg-white rounded-[32px] border border-gray-150 p-8 md:p-10 shadow-[0_15px_50px_rgba(7,17,31,0.08)] text-left relative overflow-hidden">
            
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-80 aspect-square rounded-full border-[16px] border-red-500/5 pointer-events-none" />
            <div className="absolute right-12 top-12 w-24 aspect-square rounded-full border border-yellow-500/10 pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              
              <div className="max-w-3xl flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Chương trình 1719", "2021–2025", "10 Dự án thành phần", "Vùng DTTS&MN"].map((badge, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-[#07111F] border border-gray-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl md:text-6xl font-black text-[#DA251D] tracking-tight">
                    137.000+
                  </span>
                  <span className="text-xl md:text-2xl font-extrabold text-[#07111F]">
                    tỷ đồng
                  </span>
                </div>

                <p className="text-sm md:text-base text-[#475569] leading-relaxed font-medium mb-6">
                  Tổng mức vốn thực hiện Chương trình mục tiêu quốc gia 1719 giai đoạn 2021–2025 là trên 137.000 tỷ đồng. Chương trình gồm 10 dự án, tập trung vào đất ở, nhà ở, đất sản xuất, nước sinh hoạt, hạ tầng, giáo dục, y tế, văn hóa, bình đẳng giới, nhóm dân tộc còn nhiều khó khăn và công tác truyền thông.
                </p>

                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-6 flex relative">
                  <div className="bg-[#DA251D] w-[65%] h-full rounded-l-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 animate-pulse"></div>
                  </div>
                  <div className="bg-[#FFD65A] w-[20%] h-full"></div>
                  <div className="bg-[#16A34A] w-[15%] h-full rounded-r-full"></div>
                </div>

                <SourceGroup primaryKey="governmentSummary" />
              </div>

              <div className="hidden lg:flex items-center justify-center w-40 h-40 rounded-3xl bg-[#07111F]/5 border border-[#07111F]/10 shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-[#07111F] flex items-center justify-center shadow-lg">
                  <SVGIcons.Budget />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ==================================================
          LIGHT BACKGROUND WRAPPER (BLOCKS 3 TO 8)
          ================================================== */}
      <div className="bg-gradient-to-b from-[#F8F4EA] via-[#FFF8E7] to-[#FFFFFF] py-12 px-6 md:px-12 lg:px-16 relative">
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden">
          <svg className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] aspect-square text-[#07111F]" fill="none" viewBox="0 0 1000 1000">
            <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 15" />
            <circle cx="500" cy="500" r="380" stroke="currentColor" strokeWidth="2" />
            <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="500" cy="500" r="200" stroke="currentColor" strokeWidth="2" />
            <path d="M500,500 L500,300 M500,500 L500,700 M500,500 L300,500 M500,500 L700,500" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* ==================================================
            KHỐI 3: GIẢM NGHÈO - THU NHẬP - ĐÀO TẠO NGHỀ
            ================================================== */}
        <AchievementBlock
          id="giam-ngheo-thu-nhap"
          title="1. Giảm nghèo, thu nhập và đào tạo nghề"
          description="Sau 5 năm nỗ lực bền bỉ, đời sống kinh tế và tay nghề lao động của đồng bào vùng dân tộc thiểu số đã đạt được những bước chuyển dịch tích cực, vượt các chỉ tiêu ban đầu đề ra."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {povertyIncomeStats.map((stat, idx) => {
              const IconComp = SVGIcons[stat.icon];
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#F8F4EA] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                        {IconComp && <IconComp />}
                      </div>
                      {stat.badge && (
                        <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-[#16A34A] border border-emerald-100 flex items-center gap-1">
                          ★ {stat.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl lg:text-4xl font-black text-[#07111F] tracking-tight">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-xs font-bold text-[#475569]">{stat.unit}</span>
                      )}
                    </div>

                    <h4 className="text-xs font-black uppercase text-[#07111F] tracking-wider mb-2">
                      {stat.label}
                    </h4>
                    
                    <p className="text-[11px] lg:text-xs text-[#475569] leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-50">
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${stat.badge ? 'bg-[#16A34A]' : 'bg-[#DA251D]'}`} 
                        style={{ width: stat.value.includes('%') ? stat.value : '85%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <SourceGroup primaryKey="governmentPhase2" />
        </AchievementBlock>

        {/* ==================================================
            KHỐI 4: NHÀ Ở - ĐẤT Ở - ĐẤT SẢN XUẤT - NƯỚC SINH HOẠT
            ================================================== */}
        <AchievementBlock
          id="dieu-kien-song"
          title="2. Hỗ trợ nhà ở, đất ở, đất sản xuất và nước sinh hoạt"
          description="Các chính sách hỗ trợ hạ tầng thiết yếu và sinh hoạt cơ bản giúp nâng cao chất lượng cuộc sống thực tế, giải quyết trực tiếp những khó khăn cốt lõi của từng hộ gia đình."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {housingWaterStats.map((stat, idx) => {
              const IconComp = SVGIcons[stat.icon];
              return (
                <div 
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                    {IconComp && <IconComp />}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-[#07111F] leading-tight mb-1">
                      {stat.value}
                    </h4>
                    <p className="text-xs font-semibold text-[#475569]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <SourceGroup primaryKey="governmentSummary" />
        </AchievementBlock>

        {/* ==================================================
            KHỐI 5: HẠ TẦNG THIẾT YẾU
            ================================================== */}
        <AchievementBlock
          id="ha-tang"
          title="3. Phát triển hạ tầng thiết yếu"
          description="Đường giao thông, điện lưới, cơ sở giáo dục và y tế được xây dựng kiên cố là đòn bẩy mở rộng cơ hội tiếp cận tri thức, chăm sóc sức khỏe và phát triển thị trường tiêu thụ."
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <div className="lg:col-span-5 bg-gradient-to-br from-[#07111F] to-[#1E293B] text-white rounded-[24px] p-8 shadow-md flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-6 translate-y-6">
                <SVGIcons.Road />
              </div>
              
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD65A] border border-[#FFD65A]/20 px-3 py-1 rounded-full bg-white/5 inline-block mb-6">
                  ĐỘT PHÁ GIAO THÔNG
                </span>
                
                <div className="mb-4">
                  <span className="block text-4xl lg:text-5xl font-black text-[#FFD65A] tracking-tight mb-1">
                    8.673 km
                  </span>
                  <span className="text-sm font-bold text-gray-300">
                    đường giao thông nông thôn
                  </span>
                </div>
                
                <p className="text-xs text-gray-300 leading-relaxed font-medium">
                  Đường giao thông được nhựa hóa, bê tông hóa hoặc cứng hóa nông thôn được hỗ trợ đầu tư và nâng cấp, giúp kết nối liên thông các vùng dân tộc thiểu số và miền núi.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5 text-[11px] text-[#FFD65A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse"></span>
                  Giao thông đi trước mở đường
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-150 rounded-[20px] p-5 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 text-left">
                <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  <SVGIcons.Road />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-[#07111F] leading-tight mb-0.5">
                    6.018 công trình
                  </h4>
                  <p className="text-xs font-semibold text-[#475569] leading-snug">
                    giao thông nông thôn được hỗ trợ đầu tư
                  </p>
                </div>
              </div>

              {infrastructureStats.slice(1).map((stat, idx) => {
                const IconComp = SVGIcons[stat.icon];
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-gray-150 rounded-[20px] p-5 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 text-left"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                      {IconComp && <IconComp />}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-black text-[#07111F] leading-tight mb-0.5">
                        {stat.value}
                      </h4>
                      <p className="text-xs font-semibold text-[#475569] leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
          <SourceGroup primaryKey="governmentSummary" />
        </AchievementBlock>

        {/* ==================================================
            KHỐI 6: SINH KẾ - SẢN XUẤT - BẢO VỆ RỪNG
            ================================================== */}
        <AchievementBlock
          id="sinh-ke-va-rung"
          title="4. Sinh kế bền vững và bảo vệ tài nguyên rừng"
          description="Chính sách hỗ trợ sản xuất gắn liền với khoán quản bảo vệ tài nguyên giúp đồng bào vừa bảo đảm được sinh kế, nâng cao thu nhập, vừa giữ vững môi trường sinh thái."
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {livelihoodStats.map((stat, idx) => {
                const IconComp = SVGIcons[stat.icon];
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-[#E8F5E9] rounded-[20px] p-5 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 text-left"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green-50/50 border border-green-100 flex items-center justify-center shrink-0">
                      {IconComp && <IconComp />}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-black text-[#07111F] leading-tight mb-0.5">
                        {stat.value}
                      </h4>
                      <p className="text-xs font-semibold text-[#475569] leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white rounded-[24px] p-8 shadow-md flex flex-col justify-between text-left relative overflow-hidden order-1 lg:order-2">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-6 translate-y-6">
                <SVGIcons.Tree />
              </div>
              
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD65A] border border-white/20 px-3 py-1 rounded-full bg-white/5 inline-block mb-6">
                  BẢO VỆ MÔI TRƯỜNG SINH THÁI
                </span>
                
                <div className="mb-4">
                  <span className="block text-3xl lg:text-4xl font-black text-[#FFD65A] tracking-tight mb-1">
                    1.478.962 ha
                  </span>
                  <span className="text-sm font-bold text-white">
                    rừng đặc dụng, rừng phòng hộ được hỗ trợ khoán bảo vệ
                  </span>
                </div>
                
                <p className="text-xs text-green-100 leading-relaxed font-medium">
                  Hơn 323.769 hộ gia đình được hỗ trợ thông qua khoán bảo vệ rừng, góp phần phát triển kinh tế bền vững gắn liền với bảo vệ tài nguyên xanh.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-1.5 text-[11px] text-green-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD65A] animate-pulse"></span>
                  Giao khoán bảo vệ tài nguyên
                </div>
              </div>
            </div>

          </div>
          <SourceGroup primaryKey="governmentSummary" />
        </AchievementBlock>

        {/* ==================================================
            KHỐI 7: GIÁO DỤC - NGHỀ NGHIỆP - VIỆC LÀM
            ================================================== */}
        <AchievementBlock
          id="giao-duc-va-viec-lam"
          title="5. Giáo dục đào tạo và giải quyết việc làm"
          description="Nâng cao dân trí, phát triển chất lượng nguồn nhân lực thông qua đào tạo nghề nghiệp và phổ cập xóa mù chữ cho đồng bào các dân tộc thiểu số."
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 to-indigo-950 text-white rounded-[24px] p-8 shadow-md flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-6 translate-y-6">
                <SVGIcons.Book />
              </div>
              
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD65A] border border-white/20 px-3 py-1 rounded-full bg-white/5 inline-block mb-6">
                  PHỔ CẬP GIÁO DỤC CƠ SỞ
                </span>
                
                <div className="mb-4">
                  <span className="block text-4xl lg:text-5xl font-black text-[#FFD65A] tracking-tight mb-1">
                    95.033
                  </span>
                  <span className="text-sm font-bold text-gray-300">
                    người dân tham gia xóa mù chữ
                  </span>
                </div>
                
                <p className="text-xs text-gray-300 leading-relaxed font-medium">
                  Thông qua 4.752 lớp học xóa mù chữ được tổ chức bài bản tại thôn bản, mang lại cơ hội đọc viết và tiếp cận tri thức thiết thực cho đồng bào.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-[10px] text-gray-400">Nguồn: CEMA / Bộ Dân tộc</span>
                <a
                  href={sourceLinks.cemaSummary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FFD65A] hover:underline flex items-center gap-0.5"
                >
                  Link nguồn <SVGIcons.ExternalLink />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationJobStats.map((stat, idx) => {
                  const IconComp = SVGIcons[stat.icon];
                  return (
                    <div 
                      key={idx}
                      className="bg-white border border-gray-150 rounded-[20px] p-5 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 text-left"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                        {IconComp && <IconComp />}
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-black text-[#07111F] leading-tight mb-0.5">
                          {stat.value}
                        </h4>
                        <p className="text-xs font-semibold text-[#475569] leading-snug">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
          <SourceGroup primaryKey="governmentSummary" secondaryKey="cemaSummary" />
        </AchievementBlock>

        {/* ==================================================
            KHỐI 8: VĂN HÓA - DU LỊCH CỘNG ĐỒNG
            ================================================== */}
        <AchievementBlock
          id="van-hoa-du-lich"
          title="6. Bảo tồn văn hóa & phát triển du lịch cộng đồng"
          description="Bảo tồn bản sắc văn hóa các dân tộc không chỉ là bảo vệ di sản của quốc gia, mà còn tạo động lực kinh tế mới thông qua du lịch cộng đồng và mô hình sinh kế bản địa."
        >
          <div className="bg-[#FFF8E7] border-l-4 border-[#DA251D] p-6 rounded-r-3xl text-left mb-8 shadow-sm relative overflow-hidden">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <svg className="w-20 h-20 text-[#DA251D]" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" />
              </svg>
            </div>
            
            <p className="text-sm md:text-base font-extrabold text-[#07111F] leading-relaxed italic mb-1">
              “Thống nhất không có nghĩa là đồng hóa; mỗi bản sắc dân tộc là một phần làm giàu cho văn hóa Việt Nam.”
            </p>
            <span className="text-xs font-bold text-[#DA251D] uppercase tracking-wider">
              — Định hướng cốt lõi trong bảo tồn và phát triển văn hóa
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureStats.map((stat, idx) => {
              const IconComp = SVGIcons[stat.icon];
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#FFF8E7] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50/50 border border-amber-100 flex items-center justify-center shrink-0">
                    {IconComp && <IconComp />}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-[#07111F] leading-tight mb-1">
                      {stat.value}
                    </h4>
                    <p className="text-xs font-semibold text-[#475569]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <SourceGroup primaryKey="governmentSummary" />
        </AchievementBlock>

      </div>

      {/* ==================================================
          KHỐI 9: CÂU CHỐT CUỐI SECTION
          ================================================== */}
      <div className="bg-white pb-20 px-6 md:px-12 lg:px-16 text-center">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-gradient-to-br from-[#07111F] via-[#1E293B] to-[#7F1D1D] rounded-[28px] p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(7,17,31,0.15)] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 aspect-square rounded-full bg-red-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 aspect-square rounded-full bg-yellow-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              <svg className="w-12 h-12 text-[#FFD65A]/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.85h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.85h3.999v10h-10z" />
              </svg>

              <p className="text-base md:text-xl lg:text-2xl font-bold leading-relaxed mb-8 text-center drop-shadow-sm">
                Những thành tựu phát triển vùng dân tộc thiểu số và miền núi cho thấy chính sách dân tộc của Việt Nam đã từng bước chuyển hóa thành kết quả thực tiễn: hạ tầng được cải thiện, sinh kế được mở rộng, đời sống xã hội được nâng lên, bản sắc văn hóa được bảo tồn và khối đại đoàn kết toàn dân tộc được củng cố.
              </p>

              <div className="w-20 h-1 bg-[#FFD65A] rounded-full"></div>
            </div>

          </div>

        </div>
      </div>

      {/* ==================================================
          TIỂU MỤC MỚI: THÔNG TIN THAM KHẢO CHÍNH THỐNG
          ================================================== */}
      <div className="bg-[#F8F4EA] border-t border-gray-250/70 py-20 px-6 md:px-12 lg:px-16 text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 aspect-square rounded-full bg-[#FFD65A]/5 blur-[80px] pointer-events-none" />
        <div className="absolute left-10 bottom-0 w-80 aspect-square rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#07111F]/10 bg-white shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#07111F] uppercase">
                NGUỒN THAM KHẢO CHÍNH THỐNG
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black text-[#07111F] tracking-tight mb-4">
              Nguồn tham khảo chính thống
            </h3>
            
            <p className="text-xs md:text-sm lg:text-base text-[#475569] font-medium leading-relaxed">
              Các bài viết, báo cáo và văn bản dưới đây giúp người xem kiểm chứng số liệu, hiểu rõ hơn bối cảnh chính sách và tiếp tục tìm hiểu sâu về phát triển vùng đồng bào dân tộc thiểu số và miền núi.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-6">
            {filterAgencies.map((filter, index) => {
              const count = filter === 'Tất cả' 
                ? referenceSources.length 
                : referenceSources.filter(src => {
                    if (filter === 'Báo Chính phủ') return src.source === 'Báo Điện tử Chính phủ';
                    if (filter === 'Văn bản Chính phủ') return src.source === 'Hệ thống văn bản Chính phủ';
                    if (filter === 'Bộ Dân tộc & CEMA') return src.source === 'Bộ Dân tộc và Tôn giáo / CEMA';
                    if (filter === 'Cục Thống kê') return src.source === 'Cục Thống kê';
                    return false;
                  }).length;

              const isActive = activeFilter === filter;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#07111F] text-white border-[#07111F] shadow-sm scale-105"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  <span>{filter}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSources.map((source) => {
              const isFeatured = source.featured;
              return (
                <div
                  key={source.id}
                  className={`bg-white rounded-3xl border border-gray-150 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col text-left group relative ${
                    isFeatured ? "lg:col-span-2 lg:flex-row" : "lg:col-span-1"
                  }`}
                >
                  {/* Ribbon tag overlay */}
                  {source.badge && (
                    <div className="absolute top-4 left-4 z-20 bg-[#DA251D] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {source.badge}
                    </div>
                  )}

                  {/* Visual / Image section */}
                  <div className={`relative overflow-hidden shrink-0 ${
                    isFeatured ? "w-full lg:w-2/5 aspect-video lg:aspect-auto min-h-[220px]" : "w-full aspect-video"
                  }`}>
                    <SafeImage
                      src={source.image}
                      alt={source.title}
                      visualType={source.visualType}
                      documentCode={source.documentCode}
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 pointer-events-none" />
                  </div>

                  {/* Content section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      {/* Meta Tags line */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#DA251D] border border-red-100">
                          {source.category}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400">
                          {source.meta}
                        </span>
                      </div>

                      {/* Source Agency Badge */}
                      <span className="block text-[11px] font-black tracking-widest text-[#07111F] uppercase mb-2">
                        {source.source}
                      </span>

                      {/* Title */}
                      <h4 className="text-base md:text-lg font-extrabold text-[#07111F] tracking-tight leading-snug mb-3 group-hover:text-[#DA251D] transition-colors duration-300 line-clamp-2">
                        {source.title}
                      </h4>

                      {/* Summary */}
                      <p className="text-xs md:text-sm text-[#475569] leading-relaxed font-medium mb-6 line-clamp-3">
                        {source.summary}
                      </p>
                    </div>

                    {/* CTA Footer */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <span className="text-[10px] text-gray-400 font-bold">Đã xác minh số liệu</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-black text-[#07111F] hover:text-[#DA251D] transition-all duration-300"
                      >
                        Đọc chi tiết <SVGIcons.ExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
