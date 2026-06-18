// Iconos SVG con gradientes y relieve, equivalentes a los de la app Android.
// Cada función devuelve un string SVG de 48x48 (escalable).
window.ICONS = {
  // ─── Iconos temáticos para carpetas personalizadas ───
  manual: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="mn1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5C6BC0"/><stop offset="1" stop-color="#283593"/></linearGradient></defs>
    <path fill="#00000022" d="M11 9h27a2 2 0 0 1 2 2v31H13a2 2 0 0 1-2-2z"/>
    <path fill="url(#mn1)" d="M10 8h26a3 3 0 0 1 3 3v29a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z"/>
    <path fill="#ffffff3d" d="M10 8h26a3 3 0 0 1 3 3v3H10z"/>
    <path fill="#1A237E" d="M10 8h4v34h-2a2 2 0 0 1-2-2z"/>
    <path fill="#fff" d="M16 13h19v26H16z"/>
    <!-- bus grande y claro dentro del libro -->
    <path fill="#1E88E5" d="M19 20h13a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 19 20z"/>
    <path fill="#ffffff3d" d="M19 20h13a1.5 1.5 0 0 1 1.5 1.5v1H17.5v-1A1.5 1.5 0 0 1 19 20z"/>
    <path fill="#BBDEFB" d="M19 23h5v3.5h-5zM25.5 23h6v3.5h-6z"/>
    <path fill="#0D47A1" d="M18 27h15v1.5H18z"/>
    <circle cx="21.5" cy="31" r="1.6" fill="#212121"/><circle cx="29.5" cy="31" r="1.6" fill="#212121"/>
    <circle cx="21.5" cy="31" r=".6" fill="#fff"/><circle cx="29.5" cy="31" r=".6" fill="#fff"/>
    <!-- líneas de texto del manual -->
    <path stroke="#90A4AE" stroke-width="1.2" d="M19 35.5h13M19 37.5h9"/>
  </svg>`,

  clima: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cm1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E0F7FA"/><stop offset="1" stop-color="#80DEEA"/></linearGradient></defs>
    <path fill="#00000022" d="M9 13h30a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9z"/>
    <path fill="url(#cm1)" d="M8 12h30a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z"/>
    <path fill="#ffffff" d="M8 12h30a2 2 0 0 1 2 2v3H6v-3a2 2 0 0 1 2-2z"/>
    <path stroke="#4DD0E1" stroke-width="1" d="M9 21h28M9 24h28"/>
    <path fill="#00ACC1" d="M34 25h3v2h-3z"/>
    <path fill="none" stroke="#26C6DA" stroke-width="1.6" stroke-linecap="round" d="M14 31v6M14 31l-2 2M14 31l2 2M14 37l-2-2M14 37l2-2"/>
    <path fill="none" stroke="#26C6DA" stroke-width="1.6" stroke-linecap="round" d="M24 32v6M24 32l-2 2M24 32l2 2"/>
    <path fill="none" stroke="#26C6DA" stroke-width="1.6" stroke-linecap="round" d="M34 31v6M34 31l-2 2M34 31l2 2M34 37l-2-2M34 37l2-2"/>
  </svg>`,

  servicio: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="sv1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#66BB6A"/><stop offset="1" stop-color="#2E7D32"/></linearGradient>
      <linearGradient id="sv2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFB74D"/><stop offset="1" stop-color="#E65100"/></linearGradient></defs>
    <!-- bus que lleva a casa -->
    <path fill="url(#sv1)" d="M5 20a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/>
    <path fill="#ffffff33" d="M5 20a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2H5z"/>
    <path fill="#C8E6C9" d="M7 19h9v6H7zM18 19h11v6H18z"/>
    <path stroke="#2E7D32" stroke-width=".8" d="M22 19v6M26 19v6"/>
    <path fill="#1B5E20" d="M8 29h4v7H8z"/>
    <path fill="#E8F5E9" d="M14 30h15v2H14z"/>
    <circle cx="11" cy="37" r="2.6" fill="#212121"/><circle cx="11" cy="37" r="1" fill="#9E9E9E"/>
    <circle cx="27" cy="37" r="2.6" fill="#212121"/><circle cx="27" cy="37" r="1" fill="#9E9E9E"/>
    <circle cx="6" cy="30" r="1" fill="#FFEB3B"/>
    <!-- casa encima/al lado -->
    <path fill="url(#sv2)" d="M37 18l8 7h-2v11h-12V25h-2z"/>
    <path fill="#5D4037" d="M33 27h5v9h-5z"/>
    <path fill="#FFE0B2" d="M40 28h2.5v3H40z"/>
    <path fill="#3E2723" d="M34.5 31h2.5v5h-2.5z"/>
  </svg>`,

  convenio: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cv1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#0B3E91"/></linearGradient></defs>
    <path fill="#00000022" d="M10 9h29a2 2 0 0 1 2 2v30a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z"/>
    <path fill="url(#cv1)" d="M9 8h28a3 3 0 0 1 3 3v29a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z"/>
    <path fill="#ffffff3d" d="M9 8h28a3 3 0 0 1 3 3v3H9z"/>
    <path fill="#072554" d="M9 8h5v34h-3a2 2 0 0 1-2-2z"/>
    <path fill="#fff" d="M15 12h21v24H15z"/>
    <path stroke="#7B92B0" stroke-width="1.2" d="M18 17h15M18 21h15M18 25h11M18 29h15M18 33h9"/>
    <path fill="#E53935" d="M30 7h4v12l-2-2.5L30 19z"/>
  </svg>`,

  calendarios: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cl1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4CAF50"/><stop offset="1" stop-color="#1B5E20"/></linearGradient></defs>
    <path fill="#fff" stroke="#ccc" stroke-width=".5" d="M8 12h32a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"/>
    <path fill="url(#cl1)" d="M8 12h34v8H8z"/>
    <path fill="#ffffff33" d="M8 12h34v3H8z"/>
    <path fill="#2E2E2E" d="M15 7h2v8h-2zM31 7h2v8h-2z"/>
    <path stroke="#D0D6DC" stroke-width=".5" d="M8 28h34M8 35h34M17 20v22M25 20v22M33 20v22"/>
    <circle cx="29" cy="32" r="4" fill="#E53935"/>
    <circle cx="13" cy="38" r="1.4" fill="#FB8C00"/>
  </svg>`,

  actas: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#00000022" d="M13 7h20l6 6v28H13z"/>
    <path fill="#fff" stroke="#e0e0e0" d="M12 6h20l6 6v28H12z"/>
    <path fill="#F57C00" d="M32 6l6 6h-6z"/>
    <path stroke="#3D5260" stroke-width="1.6" d="M16 16h18"/>
    <path stroke="#90A4AE" d="M16 20h17M16 24h17M16 28h13"/>
    <path stroke="#1565C0" stroke-width="1.6" fill="none" stroke-linecap="round" d="M16 34c2-2 3 2 5-1s3 2 5 0"/>
    <circle cx="31" cy="34" r="4" fill="none" stroke="#D32F2F" stroke-width="1.6"/>
    <path fill="#D32F2F" d="M31 32l.7 1.5 1.6.1-1.3 1.1.4 1.5-1.4-.9-1.4.9.4-1.5-1.3-1.1 1.6-.1z"/>
  </svg>`,

  contactos: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="co1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#26A69A"/><stop offset="1" stop-color="#00695C"/></linearGradient></defs>
    <path fill="#5D4037" d="M7 12h4v28H7z"/>
    <circle cx="9" cy="16" r="1.4" fill="#f5f5f5"/><circle cx="9" cy="24" r="1.4" fill="#f5f5f5"/><circle cx="9" cy="32" r="1.4" fill="#f5f5f5"/>
    <path fill="url(#co1)" d="M11 10h29a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H11z"/>
    <path fill="#ffffff33" d="M11 10h29a2 2 0 0 1 2 2v4H11z"/>
    <rect x="15" y="15" width="24" height="23" rx="1" fill="#fff"/>
    <circle cx="22" cy="23" r="3.2" fill="#FFB74D"/>
    <path fill="#FFB74D" d="M16 34c0-7 6-7 6-7s6 0 6 7z"/>
    <path stroke="#546E7A" stroke-width="1.4" d="M30 21h6"/>
    <path stroke="#90A4AE" d="M30 25h6M30 29h4"/>
    <circle cx="32" cy="33" r="1.6" fill="#FB8C00"/>
  </svg>`,

  pic: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="bs1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#AB47BC"/><stop offset="1" stop-color="#4A148C"/></linearGradient></defs>
    <path fill="url(#bs1)" d="M6 16a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/>
    <path fill="#ffffff33" d="M6 16a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v2H6z"/>
    <path fill="#B3E5FC" d="M8 15a1 1 0 0 1 1-1h14v7H8zM25 14h11v7H25z"/>
    <path stroke="#6A1B9A" stroke-width=".8" d="M29 14v7M33 14v7"/>
    <path fill="#311B92" d="M9 24h4v10H9z"/>
    <path fill="#E1BEE7" d="M15 26h21v2H15z"/>
    <circle cx="7" cy="29" r="1.2" fill="#FFEB3B"/>
    <circle cx="12" cy="36" r="3" fill="#212121"/><circle cx="12" cy="36" r="1.2" fill="#BDBDBD"/>
    <circle cx="32" cy="36" r="3" fill="#212121"/><circle cx="32" cy="36" r="1.2" fill="#BDBDBD"/>
    <path fill="#FFC107" d="M37 4l8 14H29z"/>
    <path fill="none" stroke="#212121" stroke-width="1.4" d="M37 4l8 14H29z"/>
    <path fill="#212121" d="M36 9h2l-.3 5h-1.4z"/><circle cx="37" cy="16" r="1" fill="#212121"/>
  </svg>`,

  quejas: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="qj1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#EF5350"/><stop offset="1" stop-color="#7F0000"/></linearGradient></defs>
    <path fill="url(#qj1)" d="M8 24v8h10l16 8V16L18 24z"/>
    <path fill="#ffffff3d" d="M8 24h10l16-8v4l-16 7H8z"/>
    <path fill="#B71C1C" d="M34 16l2-1v26l-2-1z"/>
    <path fill="#FFCDD2" d="M18 24h4v8h-4z"/>
    <path fill="#5D4037" d="M11 32h4v8h-4z"/>
    <path fill="none" stroke="#FF9800" stroke-width="1.8" stroke-linecap="round" d="M38 20q4 4 0 8M38 14q6 8 0 18"/>
    <path fill="#fff" stroke="#D32F2F" stroke-width="1.4" d="M30 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-3 3v-3h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
    <path fill="#D32F2F" d="M35 7h2l-.3 4.5h-1.4z"/><circle cx="36" cy="13" r=".9" fill="#D32F2F"/>
  </svg>`,

  privado: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="pv1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#78909C"/><stop offset="1" stop-color="#263238"/></linearGradient>
      <linearGradient id="pv2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFEB3B"/><stop offset="1" stop-color="#E65100"/></linearGradient></defs>
    <path fill="url(#pv1)" d="M24 4l15 5v14c0 12-15 20-15 20S9 35 9 23V9z"/>
    <path fill="#ffffff3d" d="M24 4l15 5v4L24 9 9 13V9z"/>
    <path fill="none" stroke="#FBC02D" stroke-width="2.6" d="M19 22v-5a5 5 0 0 1 10 0v5"/>
    <rect x="15" y="22" width="18" height="12" rx="1" fill="url(#pv2)"/>
    <path fill="#ffffff3d" d="M15 22h18v3H15z"/>
    <circle cx="24" cy="28" r="1.8" fill="#3E2723"/>
    <path fill="#3E2723" d="M23.4 28h1.2v4h-1.2z"/>
  </svg>`,

  nominas: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="nm1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#42A5F5"/><stop offset="1" stop-color="#0D47A1"/></linearGradient></defs>
    <path fill="#fff" stroke="#ccc" d="M10 4h26v38l-4-2-4 2-4-2-4 2-4-2-4 2z"/>
    <path fill="url(#nm1)" d="M10 4h26v9H10z"/>
    <path fill="#fff" d="M13 8h20v1H13zM13 10.5h12v1H13z"/>
    <path stroke="#90A4AE" d="M13 17h13M13 21h11M13 25h12"/>
    <path stroke="#1976D2" stroke-width=".8" d="M13 28.5h20"/>
    <circle cx="24" cy="34" r="6" fill="#388E3C"/>
    <path fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" d="M27 31q-4-1-5 2t2 4M20.5 33H26M20.5 35H26"/>
  </svg>`,
};
