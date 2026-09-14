/* ============================================================
   PIXEL AURA STUDIO — PORTFOLIO SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     HERO CAPTION — reveal the "Made for / SHRADDHA / role" text
     one piece at a time (label words, then name letters, then
     role words), instead of all appearing at once
  --------------------------------------------------------- */
  (function staggerHeroCaption(){
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const label = document.querySelector('.reel-caption-label');
    const name = document.querySelector('.reel-caption-name');
    const role = document.querySelector('.reel-caption-role');

    const BASE_DELAY = 950;   // ms before the very first piece appears (after the logo rises into place)
    const WORD_STEP = 90;     // ms between each word
    const LETTER_STEP = 55;   // ms between each letter of the name
    let t = BASE_DELAY;

    function wrapWords(el){
      if (!el) return;
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map(w => {
        const span = `<span class="cap-piece" style="animation-delay:${t}ms">${w}</span>`;
        t += WORD_STEP;
        return span;
      }).join(' ');
    }
    function wrapLetters(el){
      if (!el) return;
      const chars = [...el.textContent];
      el.innerHTML = chars.map(ch => {
        const safe = ch === ' ' ? '&nbsp;' : ch;
        const span = `<span class="cap-piece" style="animation-delay:${t}ms">${safe}</span>`;
        t += LETTER_STEP;
        return span;
      }).join('');
    }

    wrapWords(label);
    wrapLetters(name);
    wrapWords(role);
  })();

  /* ---------------------------------------------------------
     DATA
  --------------------------------------------------------- */
  const tools = [
    { name: 'Canva', code: 'Cv', color: 'linear-gradient(135deg,#00c4cc,#7d2ae8)' },
    { name: 'Figma', code: 'Fg', color: 'linear-gradient(135deg,#b026ff,#22d3ee)' },
    { name: 'Adobe Photoshop', code: 'Ps', color: 'linear-gradient(135deg,#1e88e5,#0d47a1)' },
    { name: 'Adobe Illustrator', code: 'Ai', color: 'linear-gradient(135deg,#ff9800,#e65100)' },
    { name: 'Adobe InDesign', code: 'Id', color: 'linear-gradient(135deg,#ff3366,#a8003c)' },
    { name: 'Photopea', code: 'Pp', color: 'linear-gradient(135deg,#2fb5a0,#0e7c6b)' },
    { name: 'Inkscape', code: 'Ik', color: 'linear-gradient(135deg,#5c6bc0,#283593)' },
    { name: 'CapCut', code: 'Cc', color: 'linear-gradient(135deg,#00e5ff,#2962ff)' },
    { name: 'Adobe After Effects', code: 'Ae', color: 'linear-gradient(135deg,#9575ff,#311b92)' },
    { name: 'Blender', code: 'Bl', color: 'linear-gradient(135deg,#ff8a3d,#e85d04)' },
    { name: 'ChatGPT', code: 'Gpt', color: 'linear-gradient(135deg,#19c37d,#0d8a6a)' },
    { name: 'Adobe Firefly', code: 'Fy', color: 'linear-gradient(135deg,#ff5f6d,#7000ff)' },
    { name: 'Google Fonts', code: 'Gf', color: 'linear-gradient(135deg,#4285f4,#34a853)' },
    { name: 'Freepik', code: 'Fp', color: 'linear-gradient(135deg,#2196f3,#0b57d0)' },
    { name: 'Pinterest', code: 'Pn', color: 'linear-gradient(135deg,#ff3b57,#b3001b)' },
  ];

  const services = [
    {
      icon: '🖼️',
      title: 'Poster design',
      desc: 'Bold, high-contrast posters built to grab attention at a glance, in print or on-screen.',
      tags: ['Event posters', 'Promo posters', 'Print-ready']
    },
    {
      icon: '📰',
      title: 'Flyer design',
      desc: 'Clear, persuasive flyers that balance strong visuals with easy-to-scan information.',
      tags: ['Marketing flyers', 'Layout & typography', 'A5 / A4 ready']
    },
    {
      icon: '📄',
      title: 'Brochure design',
      desc: 'Multi-fold brochures that guide the reader through a story, product or service.',
      tags: ['Tri-fold', 'Bi-fold', 'Print-ready']
    },
    {
      icon: '🧾',
      title: 'Resume design',
      desc: 'Clean, recruiter-friendly resumes with a clear hierarchy that still look distinctive.',
      tags: ['ATS-friendly', 'Modern layout', 'PDF & editable']
    },
    {
      icon: '💳',
      title: 'Business cards',
      desc: 'A compact, memorable card that carries your brand\'s color and type system in your pocket.',
      tags: ['Double-sided', 'Print-ready', 'Brand-matched']
    },
    {
      icon: '📱',
      title: 'Social media design',
      desc: 'Posts, stories and ad creatives that keep a feed consistent and on-brand.',
      tags: ['Posts & banners', 'Stories & reels', 'Brand templates']
    },
    {
      icon: '🍽️',
      title: 'Menu design',
      desc: 'Food and drink menus that are easy to scan and match the mood of the place.',
      tags: ['Food menus', 'Café menus', 'Print & digital']
    },
    {
      icon: '💌',
      title: 'Invitation design',
      desc: 'Wedding and event invitations with a tone and detail level that fits the occasion.',
      tags: ['Wedding invites', 'Event cards', 'Digital & print']
    },
    {
      icon: '🎬',
      title: 'Thumbnail design',
      desc: 'Scroll-stopping YouTube and video thumbnails with bold type and high click-through appeal.',
      tags: ['YouTube thumbnails', 'Bold typography', 'A/B variants']
    },
  ];

  const serviceShowcases = [
    {
      title: 'Poster design',
      slug: 'poster-design',
      desc: 'Bold, high-contrast posters built to grab attention at a glance, in print or on-screen.',
      samples: [
        { icon: '🏖️', label: 'Beach vacation travel poster', grad: 'linear-gradient(150deg,#1a7f9e,#0b3d5c)' },
        { icon: '🚴', label: 'Cycling event poster', grad: 'linear-gradient(150deg,#f5b400,#1a3f8f)' },
        { icon: '🪔', label: 'Diwali festival greeting poster', grad: 'linear-gradient(150deg,#b8860b,#3a0f4a)' },
        { icon: '🎤', label: 'Live band concert poster', grad: 'linear-gradient(150deg,#f2b90c,#1a1a1a)' },
      ]
    },
    {
      title: 'Flyer design',
      slug: 'flyer-design',
      desc: 'Clear, persuasive flyers that balance strong visuals with easy-to-scan information.',
      samples: [
        { icon: '🌋', label: 'Volcano adventure expedition flyer', grad: 'linear-gradient(150deg,#ff6a00,#7a1c00)' },
        { icon: '🏕️', label: 'Aurora camping festival flyer', grad: 'linear-gradient(150deg,#1a936f,#0b2545)' },
        { icon: '🌿', label: 'Forest wellness retreat flyer', grad: 'linear-gradient(150deg,#2f5233,#1b3022)' },
        { icon: '🤿', label: 'Underwater photography workshop flyer', grad: 'linear-gradient(150deg,#0f6fb0,#062a4a)' },
      ]
    },
    {
      title: 'Brochure design',
      slug: 'brochure-design',
      desc: 'Multi-fold brochures that guide the reader through a story, product or service.',
      samples: [
        { icon: '🏢', label: 'Company tri-fold', grad: 'linear-gradient(150deg,#4f7cff,#b026ff)' },
        { icon: '🏨', label: 'Hospitality brochure', grad: 'linear-gradient(150deg,#b026ff,#ff5fa2)' },
        { icon: '🎓', label: 'Course info brochure', grad: 'linear-gradient(150deg,#22d3ee,#4f7cff)' },
        { icon: '🩺', label: 'Clinic services brochure', grad: 'linear-gradient(150deg,#8b2ff7,#4f2f9e)' },
      ]
    },
    {
      title: 'Resume design',
      slug: 'resume-design',
      desc: 'Clean, recruiter-friendly resumes with a clear hierarchy that still look distinctive.',
      samples: [
        { icon: '🧾', label: 'Fresher resume, modern', grad: 'linear-gradient(150deg,#22d3ee,#8b2ff7)' },
        { icon: '📋', label: 'Minimal one-pager', grad: 'linear-gradient(150deg,#4f7cff,#22d3ee)' },
        { icon: '💼', label: 'Corporate style resume', grad: 'linear-gradient(150deg,#8b2ff7,#b026ff)' },
        { icon: '🎨', label: 'Creative field resume', grad: 'linear-gradient(150deg,#b026ff,#ff5fa2)' },
      ]
    },
    {
      title: 'Business cards',
      slug: 'business-cards',
      desc: 'A compact, memorable card that carries your brand\'s color and type system in your pocket.',
      samples: [
        { icon: '💳', label: 'Studio double-sided card', grad: 'linear-gradient(150deg,#b026ff,#ff5fa2)' },
        { icon: '🧑‍💼', label: 'Consultant card', grad: 'linear-gradient(150deg,#4f7cff,#8b2ff7)' },
        { icon: '🍽️', label: 'Café brand card', grad: 'linear-gradient(150deg,#22d3ee,#0e7c6b)' },
        { icon: '🏗️', label: 'Agency card set', grad: 'linear-gradient(150deg,#8b2ff7,#4f2f9e)' },
      ]
    },
    {
      title: 'Social media design',
      slug: 'social-media-design',
      desc: 'Posts, stories and ad creatives that keep a feed consistent and on-brand.',
      samples: [
        { icon: '📱', label: 'Instagram post set', grad: 'linear-gradient(150deg,#ff5fa2,#8b2ff7)' },
        { icon: '📖', label: 'Story template set', grad: 'linear-gradient(150deg,#b026ff,#4f7cff)' },
        { icon: '📣', label: 'Ad creative set', grad: 'linear-gradient(150deg,#22d3ee,#4f7cff)' },
        { icon: '🎂', label: 'Café campaign posts', grad: 'linear-gradient(150deg,#4f7cff,#22d3ee)' },
      ]
    },
    {
      title: 'Menu design',
      slug: 'menu-design',
      desc: 'Food and drink menus that are easy to scan and match the mood of the place.',
      samples: [
        { icon: '🍽️', label: 'Café food menu', grad: 'linear-gradient(150deg,#22d3ee,#00c4cc)' },
        { icon: '🍷', label: 'Fine-dine menu card', grad: 'linear-gradient(150deg,#8b2ff7,#4f2f9e)' },
        { icon: '🍹', label: 'Bar drinks menu', grad: 'linear-gradient(150deg,#b026ff,#ff5fa2)' },
        { icon: '🍕', label: 'Casual eatery menu', grad: 'linear-gradient(150deg,#4f7cff,#8b2ff7)' },
      ]
    },
    {
      title: 'Invitation design',
      slug: 'invitation-design',
      desc: 'Wedding and event invitations with a tone and detail level that fits the occasion.',
      samples: [
        { icon: '💌', label: 'Wedding invitation card', grad: 'linear-gradient(150deg,#b026ff,#4f7cff)' },
        { icon: '🎂', label: 'Birthday invite set', grad: 'linear-gradient(150deg,#ff5fa2,#8b2ff7)' },
        { icon: '🎊', label: 'Engagement invite', grad: 'linear-gradient(150deg,#8b2ff7,#22d3ee)' },
        { icon: '🥂', label: 'Corporate event invite', grad: 'linear-gradient(150deg,#4f7cff,#b026ff)' },
      ]
    },
    {
      title: 'Thumbnail design',
      slug: 'thumbnail-design',
      desc: 'Scroll-stopping YouTube and video thumbnails with bold type and high click-through appeal.',
      samples: [
        { icon: '🎮', label: 'Gaming channel thumbnail', grad: 'linear-gradient(150deg,#ff5fa2,#4f2f9e)' },
        { icon: '🎙️', label: 'Podcast episode thumbnail', grad: 'linear-gradient(150deg,#8b2ff7,#22d3ee)' },
        { icon: '🍳', label: 'Cooking video thumbnail', grad: 'linear-gradient(150deg,#4f7cff,#ff5fa2)' },
        { icon: '💪', label: 'Fitness vlog thumbnail', grad: 'linear-gradient(150deg,#22d3ee,#8b2ff7)' },
      ]
    },
  ];

  const projects = [
    {
      icon: '🪪',
      title: 'Brand identity',
      sub: 'Concept startup',
      tags: ['Branding', 'Logo', 'Identity system'],
      grad: 'linear-gradient(160deg, var(--purple), var(--blue))',
      // Replace with your own file, e.g. 'assets/projects/brand-identity.jpg'
      img: 'https://picsum.photos/seed/pixelaura-branding/500/700',
      caseStudy: {
        problem: 'A pre-launch startup had a product but no visual identity — no logo, no color system, nothing consistent across their pitch deck and landing page.',
        process: 'Ran a short brand discovery pass, explored 3 logo directions, then built out a compact identity system: primary mark, color palette, type pairing and usage rules.',
        result: 'Delivered a flexible logo + identity kit the founders could apply themselves across deck, site and social without needing a designer for every asset.'
      }
    },
    {
      icon: '🏋️',
      title: 'Fitness flyer',
      sub: 'Marketing campaign',
      tags: ['Flyer design', 'Typography', 'Print'],
      grad: 'linear-gradient(160deg, var(--violet), var(--purple))',
      img: 'https://picsum.photos/seed/pixelaura-fitness/500/700',
      caseStudy: {
        problem: 'A local fitness studio needed a print flyer for a membership push, but wanted it to feel high-energy rather than another generic gym ad.',
        process: 'Built around bold cropped photography, a strong diagonal grid and a limited high-contrast palette to make the flyer readable from a distance.',
        result: 'A print-ready flyer used across the studio and nearby noticeboards, with a matching Instagram story version for the same campaign.'
      }
    },
    {
      icon: '☕',
      title: 'Café campaign',
      sub: 'Social media',
      tags: ['Social media', 'Campaign', 'Instagram'],
      grad: 'linear-gradient(160deg, var(--blue), var(--cyan))',
      img: 'https://picsum.photos/seed/pixelaura-cafe/500/700',
      caseStudy: {
        problem: 'A café\'s Instagram feed looked inconsistent — different fonts, filters and layouts post to post — which made the brand feel unfinished.',
        process: 'Designed a reusable post and story template system with fixed type, color and photo-treatment rules, so future posts stay on-brand with minimal effort.',
        result: 'A cohesive, recognizable feed and a template set the café still uses for weekly specials and events.'
      }
    },
    {
      icon: '🧴',
      title: 'Skincare packaging',
      sub: 'Organic skincare line',
      tags: ['Packaging', 'Labels', 'Mockups'],
      grad: 'linear-gradient(160deg, var(--cyan), var(--violet))',
      img: 'https://picsum.photos/seed/pixelaura-skincare/500/700',
      caseStudy: {
        problem: 'An organic skincare line\'s packaging looked generic and didn\'t communicate "premium" or "natural" at shelf level.',
        process: 'Explored a muted, botanical color palette and minimal serif/sans pairing, then mocked up labels across the full product range for consistency.',
        result: 'Packaging that reads premium and organic at a glance, with mockups the client used directly for manufacturer approval.'
      }
    },
    {
      icon: '📇',
      title: 'Business card set',
      sub: 'Studio stationery',
      tags: ['Print', 'Stationery', 'Branding'],
      grad: 'linear-gradient(160deg, var(--purple), var(--cyan))',
      img: 'https://picsum.photos/seed/pixelaura-cards/500/700',
      caseStudy: {
        problem: 'A small studio needed stationery — business cards, letterhead — that matched a brand refresh they\'d just gone through.',
        process: 'Carried the new brand\'s color and type system onto a double-sided card layout, keeping enough white space to feel premium rather than busy.',
        result: 'A print-ready stationery set that reinforced the studio\'s new identity in every handoff meeting.'
      }
    },
    {
      icon: '📱',
      title: 'App promo kit',
      sub: 'Store & social assets',
      tags: ['UI graphics', 'Social media', 'Mockups'],
      grad: 'linear-gradient(160deg, var(--blue), var(--purple))',
      img: 'https://picsum.photos/seed/pixelaura-app/500/700',
      caseStudy: {
        problem: 'An app launch needed store screenshots and social promo assets, but the raw UI screens alone didn\'t sell the product\'s value.',
        process: 'Framed key screens in device mockups, added short benefit-led captions, and built matching square/story variants for launch day posts.',
        result: 'A ready-to-publish promo kit covering App Store screenshots and the first week of launch social content.'
      }
    },
  ];

  const pricing = [
    {
      name: 'Beginner',
      amount: '$5',
      unit: '/ design',
      desc: 'For a single, focused piece — a poster, flyer or one social media post.',
      features: ['1 design concept', '1 revision round', 'Print & web-ready file', '2–3 day delivery'],
      featured: false
    },
    {
      name: 'Standard',
      amount: '$10',
      unit: '/ package',
      desc: 'A small identity package for a brand that\'s just getting started.',
      features: ['Logo design', 'Business card & letterhead', '3 revision rounds', 'Source files included', '5–7 day delivery'],
      featured: true,
      badge: 'Most requested'
    },
    {
      name: 'Pro',
      amount: '$15',
      unit: '/ month',
      desc: 'Ongoing design support for a brand that publishes regularly.',
      features: ['Unlimited design requests', 'Social media + print coverage', 'Dedicated turnaround windows', 'Monthly strategy check-in'],
      featured: false
    },
  ];

  const currentlyWorkingOn = [
    'Café rebrand — logo & packaging',
    'Wedding invitation suite',
    'Fitness studio social kit',
    'Startup pitch deck redesign',
    'Skincare label refresh'
  ];

  const reviews = [
    {
      quote: 'Shraddha turned a vague brand idea into a logo and social kit that actually felt like us, ahead of schedule.',
      name: 'Startup founder',
      role: 'Brand identity project',
      stars: '★★★★★'
    },
    {
      quote: 'The flyer designs were bold without feeling cluttered — exactly the energy we wanted for the campaign.',
      name: 'Marketing lead',
      role: 'Fitness campaign flyer',
      stars: '★★★★★'
    },
    {
      quote: 'Fast, communicative, and genuinely good at keeping a feed looking consistent post to post.',
      name: 'Café owner',
      role: 'Social media campaign',
      stars: '★★★★★'
    },
    {
      quote: 'Our packaging finally looks as premium as the product inside it.',
      name: 'Skincare brand owner',
      role: 'Packaging & label design',
      stars: '★★★★★'
    },
  ];

  /* ---------------------------------------------------------
     RENDER: toolkit marquee
  --------------------------------------------------------- */
  function toolBadge(t){
    return `
      <div class="tool-badge glass">
        <span class="tool-icon" style="background:${t.color}">${t.code}</span>
        <span class="tool-name">${t.name}</span>
      </div>`;
  }
  const marqueeA = document.getElementById('marqueeA');
  const marqueeB = document.getElementById('marqueeB');
  const doubledTools = [...tools, ...tools];
  const reversedTools = [...tools].reverse();
  const doubledReversed = [...reversedTools, ...reversedTools];
  marqueeA.innerHTML = doubledTools.map(toolBadge).join('');
  marqueeB.innerHTML = doubledReversed.map(toolBadge).join('');

  /* ---------------------------------------------------------
     RENDER: "currently working on" status ticker
  --------------------------------------------------------- */
  const statusTickerTrack = document.getElementById('statusTickerTrack');
  if (statusTickerTrack){
    const tickerItem = (label, i) => `
      <span class="status-ticker-item">
        <span class="status-ticker-dot" aria-hidden="true"></span>
        ${i === 0 ? '<strong>Currently designing:</strong>&nbsp;' : ''}${label}
      </span>`;
    const doubledTicker = [...currentlyWorkingOn, ...currentlyWorkingOn];
    statusTickerTrack.innerHTML = doubledTicker.map((label, i) => tickerItem(label, i % currentlyWorkingOn.length)).join('');
  }

  /* ---------------------------------------------------------
     RENDER: services carousel
  --------------------------------------------------------- */
  const servicesTrack = document.getElementById('servicesTrack');
  const liquidPalette = [
    ['rgba(176,38,255,0.95)', 'rgba(79,124,255,0.35)'],   // violet → blue
    ['rgba(34,211,238,0.9)',  'rgba(139,47,247,0.35)'],   // cyan → violet
    ['rgba(79,124,255,0.95)','rgba(34,211,238,0.35)'],    // blue → cyan
  ];
  servicesTrack.innerHTML = services.map((s, i) => {
    const [c1, c2] = liquidPalette[i % liquidPalette.length];
    return `
    <div class="service-card" data-index="${i}">
      <div class="service-card-inner glass" style="--card-i:${i}; --liquid-1:${c1}; --liquid-2:${c2}">
        <div class="service-liquid" aria-hidden="true"></div>
        <div class="service-icon">${s.icon}</div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
        <div class="service-tags">
          ${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  }).join('');

  /* ---------------------------------------------------------
     Sample-image fallback: tries jpg → jpeg → png → webp,
     then hides the <img> so the gradient + icon show instead.
  --------------------------------------------------------- */
  const CF_IMG_EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  window.cfImgFallback = function(img){
    const tried = parseInt(img.dataset.tried || '0', 10) + 1;
    if (tried >= CF_IMG_EXTS.length){
      img.style.display = 'none';
      return;
    }
    img.dataset.tried = String(tried);
    img.src = `assets/${img.dataset.base}.${CF_IMG_EXTS[tried]}`;
  };

  /* ---------------------------------------------------------
     Upload-your-own-image support (client-side, no server).
     Uploaded pictures are saved as base64 in this browser's
     localStorage, so they stick around on reload / next visit
     on this device. Click the small upload badge on any card.
  --------------------------------------------------------- */
  const CF_STORAGE_PREFIX = 'pixelAuraSample::';

  window.cfHandleUpload = function(input, key){
    const file = input.files && input.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')){
      alert('Please choose an image file (JPG, PNG, WEBP...).');
      return;
    }
    if (file.size > 3 * 1024 * 1024){
      alert('That image is a bit large — please use one under 3MB for best performance.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const card = input.closest('.cf-card');
      const img = card.querySelector('.cf-img');
      img.src = dataUrl;
      img.style.display = 'block';
      try{
        localStorage.setItem(CF_STORAGE_PREFIX + key, dataUrl);
      }catch(err){
        console.warn('Could not save image to localStorage (storage may be full):', err);
      }
    };
    reader.readAsDataURL(file);
  };

  window.cfResetUpload = function(btn, key){
    const card = btn.closest('.cf-card');
    const img = card.querySelector('.cf-img');
    localStorage.removeItem(CF_STORAGE_PREFIX + key);
    img.dataset.tried = '0';
    img.style.display = 'block';
    img.src = `assets/${img.dataset.base}.jpg`;
  };

  /* ---------------------------------------------------------
     RENDER: sample projects — one glassy coverflow per service
  --------------------------------------------------------- */
  const showcaseList = document.getElementById('showcaseList');
  showcaseList.innerHTML = serviceShowcases.map((s, idx) => `
    <div class="showcase-block reveal" data-reveal>
      <span class="showcase-index">${String(idx + 1).padStart(2, '0')}</span>
      <h3 class="showcase-title">${s.title}</h3>
      <p class="showcase-desc">${s.desc}</p>

      <div class="coverflow">
        <div class="coverflow-stage">
          <div class="coverflow-track">
            ${s.samples.map((sample, i) => {
              const key = `${s.slug}-${i + 1}`;
              const saved = (() => {
                try{ return localStorage.getItem(CF_STORAGE_PREFIX + key); }
                catch(e){ return null; }
              })();
              const initialSrc = saved || `assets/${key}.jpg`;
              return `
              <div class="cf-card" style="background:${sample.grad}">
                <img
                  src="${initialSrc}"
                  data-base="${key}"
                  data-tried="0"
                  alt="${sample.label}"
                  class="cf-img"
                  loading="lazy"
                  onerror="window.cfImgFallback(this)">

                <label class="cf-upload-btn" title="Upload your own image for this card">
                  📤
                  <input
                    type="file"
                    accept="image/*"
                    class="cf-upload-input"
                    onchange="window.cfHandleUpload(this, '${key}')"
                    hidden>
                </label>
                ${saved ? `<button type="button" class="cf-reset-btn" title="Remove uploaded image" onclick="window.cfResetUpload(this, '${key}')">↺</button>` : ''}

                <span class="cf-icon">${sample.icon}</span>
                <span class="cf-title">${sample.label}</span>
                <span class="cf-sub">Concept sample</span>
                <div class="cf-zoom-hint" aria-hidden="true"><span>🔍 View full size</span></div>
              </div>
            `;
            }).join('')}
          </div>
        </div>
        <div class="coverflow-controls">
          <button class="cf-btn cf-prev" aria-label="Previous sample">⏮</button>
          <button class="cf-btn cf-toggle" aria-label="Pause autoplay">⏸</button>
          <button class="cf-btn cf-next" aria-label="Next sample">⏭</button>
          <span class="cf-counter">1 / ${s.samples.length}</span>
        </div>
      </div>
    </div>
  `).join('');

  /* ---------------------------------------------------------
     LIGHTBOX — click the centered poster to view it big
  --------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxMedia = document.getElementById('lightboxMedia');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxFallback = document.getElementById('lightboxFallback');
  const lightboxFallbackIcon = document.getElementById('lightboxFallbackIcon');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(card){
    const img = card.querySelector('.cf-img');
    const icon = card.querySelector('.cf-icon');
    const title = card.querySelector('.cf-title')?.textContent || '';
    const sub = card.querySelector('.cf-sub')?.textContent || '';
    const hasImg = img && img.style.display !== 'none' && img.complete && img.naturalWidth > 0;

    if (hasImg){
      lightboxImg.src = img.src;
      lightboxImg.alt = title;
      lightboxImg.style.display = 'block';
      lightboxFallback.style.display = 'none';
    } else {
      lightboxImg.removeAttribute('src');
      lightboxImg.style.display = 'none';
      lightboxFallback.style.display = 'flex';
      lightboxFallback.style.background = card.style.background;
      lightboxFallbackIcon.textContent = icon ? icon.textContent : '';
    }

    lightboxCaption.innerHTML = `<strong>${title}</strong>${sub ? ` · ${sub}` : ''}`;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox(){
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------------------------------------------------------
     CASE STUDY MODAL — Problem / Process / Result for a project
  --------------------------------------------------------- */
  const caseStudyModal = document.getElementById('caseStudyModal');
  const caseStudyImg = document.getElementById('caseStudyImg');
  const caseStudyTitle = document.getElementById('caseStudyTitle');
  const caseStudySub = document.getElementById('caseStudySub');
  const caseStudyProblem = document.getElementById('caseStudyProblem');
  const caseStudyProcess = document.getElementById('caseStudyProcess');
  const caseStudyResult = document.getElementById('caseStudyResult');
  const caseStudyClose = document.getElementById('caseStudyClose');

  function openCaseStudy(p){
    if (!caseStudyModal || !p) return;
    caseStudyImg.src = p.img;
    caseStudyImg.alt = p.title;
    caseStudyTitle.textContent = p.title;
    caseStudySub.textContent = p.sub || '';
    const cs = p.caseStudy || {};
    caseStudyProblem.textContent = cs.problem || 'Details coming soon.';
    caseStudyProcess.textContent = cs.process || 'Details coming soon.';
    caseStudyResult.textContent = cs.result || 'Details coming soon.';
    caseStudyModal.classList.add('active');
    caseStudyModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }
  function closeCaseStudy(){
    if (!caseStudyModal) return;
    caseStudyModal.classList.remove('active');
    caseStudyModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }
  if (caseStudyClose) caseStudyClose.addEventListener('click', closeCaseStudy);
  if (caseStudyModal) caseStudyModal.addEventListener('click', e => { if (e.target === caseStudyModal) closeCaseStudy(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCaseStudy(); });

  /* ---------------------------------------------------------
     COVERFLOW CONTROLLER — center-focused glass carousel
  --------------------------------------------------------- */
  function initCoverflow(root){
    const cards = [...root.querySelectorAll('.cf-card')];
    const counter = root.querySelector('.cf-counter');
    const prevBtn = root.querySelector('.cf-prev');
    const nextBtn = root.querySelector('.cf-next');
    const toggleBtn = root.querySelector('.cf-toggle');
    const len = cards.length;
    let active = 0;
    let timer = null;
    let playing = true;

    function render(){
      cards.forEach((card, i) => {
        let raw = i - active;
        if (raw > len / 2) raw -= len;
        if (raw < -len / 2) raw += len;
        card.dataset.offset = raw;
      });
      if (counter) counter.textContent = `${active + 1} / ${len}`;
    }
    function goTo(i){ active = ((i % len) + len) % len; render(); }
    function next(){ goTo(active + 1); }
    function prev(){ goTo(active - 1); }

    function play(){
      clearInterval(timer);
      timer = setInterval(next, 2800);
      playing = true;
      toggleBtn.textContent = '⏸';
      toggleBtn.setAttribute('aria-label', 'Pause autoplay');
    }
    function pause(){
      clearInterval(timer);
      playing = false;
      toggleBtn.textContent = '▶';
      toggleBtn.setAttribute('aria-label', 'Play autoplay');
    }

    prevBtn.addEventListener('click', () => { prev(); pause(); });
    nextBtn.addEventListener('click', () => { next(); pause(); });
    toggleBtn.addEventListener('click', () => { playing ? pause() : play(); });
    cards.forEach((card, i) => card.addEventListener('click', (e) => {
      if (e.target.closest('.cf-upload-btn') || e.target.closest('.cf-reset-btn')) return;
      if (card.dataset.offset === '0'){
        openLightbox(card);
        pause();
        return;
      }
      goTo(i);
      pause();
    }));

    render();
    play();

    const wrap = root.closest('.showcase-block');
    if (wrap){
      wrap.addEventListener('mouseenter', () => { if (playing) clearInterval(timer); });
      wrap.addEventListener('mouseleave', () => { if (playing) play(); });
    }
  }
  document.querySelectorAll('.coverflow').forEach(initCoverflow);


  /* ---------------------------------------------------------
     RENDER + INIT: projects — open 3D fan (flows left to right,
     nothing hides around the back like a closed ring)
  --------------------------------------------------------- */
  const projectsTrack = document.getElementById('projectsTrack');
  const PF_COPIES = 3; // repeat the set so the strip can loop seamlessly
  const projectCardHTML = (p) => `
    <div class="cf-card pf-card" style="background:${p.grad}">
      <img class="cf-img pf-img" src="${p.img}" alt="${p.title}" loading="lazy"
           onerror="this.style.display='none'; this.closest('.pf-card').classList.add('pf-no-img');">
      <span class="cf-icon pf-icon">${p.icon}</span>
      <div class="pf-caption">
        <span class="cf-title pf-title">${p.title}</span>
        <span class="cf-sub pf-sub">${p.sub || (p.tags && p.tags[0]) || ''}</span>
        <div class="pf-tags">
          ${(p.tags || []).map(t => `<span class="pf-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="cf-zoom-hint pf-zoom-hint"><span>View case study ↗</span></div>
    </div>
  `;
  let projectsHTML = '';
  for (let c = 0; c < PF_COPIES; c++) projectsHTML += projects.map(projectCardHTML).join('');
  projectsTrack.innerHTML = projectsHTML;

  function initProjectsCoverflow(root){
    const stage = root.querySelector('.coverflow-stage');
    const track = root.querySelector('.coverflow-track');
    const cards = [...root.querySelectorAll('.cf-card')];
    const counter = root.querySelector('.cf-counter');
    const prevBtn = root.querySelector('.cf-prev');
    const nextBtn = root.querySelector('.cf-next');
    const toggleBtn = root.querySelector('.cf-toggle');
    const len = projects.length;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = () => window.innerWidth <= 640;

    // look tuning — how far cards tilt/rise/recede as they move away from center
    const MAXTILT = () => isMobile() ? 34 : 48;
    const CURVE   = () => isMobile() ? 16 : 30;
    const DEPTH   = () => isMobile() ? 70 : 140;

    let spacing = 0;
    let stageW = 0;

    function layout(){
      const first = cards[0];
      const cardW = first ? first.getBoundingClientRect().width : (isMobile() ? 130 : 176);
      spacing = cardW + (isMobile() ? 14 : 24);
      stageW = stage.getBoundingClientRect().width;
    }
    layout();
    window.addEventListener('resize', layout);

    const setWidth = () => spacing * len;
    // start roughly centered on the middle copy of the set
    let offset = spacing * len - stageW / 2 + spacing / 2;
    let autoplay = true;
    let hovering = false;
    let last = null;
    let manualNudge = 0; // eased toward 0 after prev/next, on top of the scroll offset

    function render(){
      const half = stageW / 2;
      cards.forEach((card, i) => {
        const worldX = i * spacing - offset;
        const relX = worldX - half;
        const t = Math.max(-1.5, Math.min(1.5, relX / half));
        const at = Math.min(Math.abs(t), 1);

        const rotateY = -t * MAXTILT();
        const rise = -CURVE() * Math.pow(at, 1.6);
        const depth = -DEPTH() * at;
        const scale = 1 - 0.32 * at;
        const dim = 1 - 0.35 * at;
        const fade = Math.max(0, Math.min(1, 1 - (Math.abs(t) - 0.82) / 0.4));

        card.style.transform = `translate(-50%,-50%) translateX(${relX}px) translateY(${rise}px) translateZ(${depth}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = fade.toFixed(3);
        card.style.filter = `brightness(${dim.toFixed(3)})`;
        card.style.pointerEvents = fade > 0.05 ? 'auto' : 'none';
        card.classList.toggle('pf-active', Math.abs(t) < (spacing / 2) / half);
      });
      const activeProject = (((Math.round(offset / spacing) % len) + len) % len);
      if (counter) counter.textContent = `${activeProject + 1} / ${len}`;
    }

    function tick(t){
      if (last === null) last = t;
      const dt = Math.min(t - last, 48);
      last = t;
      if (autoplay && !hovering && !reduceMotion){
        offset += dt * (isMobile() ? 0.028 : 0.038);
      }
      if (Math.abs(manualNudge) > 0.5){
        offset += manualNudge * 0.18;
        manualNudge *= 0.82;
      } else {
        manualNudge = 0;
      }
      offset = ((offset % setWidth()) + setWidth()) % setWidth();
      render();
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    function play(){
      autoplay = true;
      toggleBtn.textContent = '⏸';
      toggleBtn.setAttribute('aria-label', 'Pause autoplay');
    }
    function pause(){
      autoplay = false;
      toggleBtn.textContent = '▶';
      toggleBtn.setAttribute('aria-label', 'Play autoplay');
    }

    prevBtn.addEventListener('click', () => { manualNudge -= spacing; pause(); });
    nextBtn.addEventListener('click', () => { manualNudge += spacing; pause(); });
    toggleBtn.addEventListener('click', () => { autoplay ? pause() : play(); });
    cards.forEach((card, i) => card.addEventListener('click', (e) => {
      if (e.target.closest('.cf-upload-btn') || e.target.closest('.cf-reset-btn')) return;
      if (card.classList.contains('pf-active')){
        const projectData = projects[i % projects.length];
        openCaseStudy(projectData);
        pause();
      }
    }));

    root.addEventListener('mouseenter', () => { hovering = true; });
    root.addEventListener('mouseleave', () => { hovering = false; last = null; });

    render();
  }
  initProjectsCoverflow(document.getElementById('projectsCoverflow'));

  /* ---------------------------------------------------------
     RENDER: pricing
  --------------------------------------------------------- */
  const pricingGrid = document.getElementById('pricingGrid');
  pricingGrid.innerHTML = pricing.map(p => `
    <div class="price-card glass reveal ${p.featured ? 'featured' : ''}" data-reveal>
      ${p.badge ? `<span class="price-badge">${p.badge}</span>` : ''}
      <span class="price-name">${p.name}</span>
      <span class="price-amount">${p.amount}<span> ${p.unit}</span></span>
      <p class="price-desc">${p.desc}</p>
      <ul class="price-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn ${p.featured ? 'btn-primary' : 'btn-ghost'} magnetic">Get a quote</a>
    </div>
  `).join('');

  /* ---------------------------------------------------------
     RENDER: reviews carousel
  --------------------------------------------------------- */
  const reviewsTrack = document.getElementById('reviewsTrack');
  reviewsTrack.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-card-inner glass">
        <div class="review-stars">${r.stars}</div>
        <p class="review-quote">&ldquo;${r.quote}&rdquo;</p>
        <div class="review-author">${r.name}</div>
        <div class="review-role">${r.role}</div>
      </div>
    </div>
  `).join('');

  /* ---------------------------------------------------------
     CAROUSEL FACTORY
  --------------------------------------------------------- */
  function createCarousel({ track, dotsEl, prevBtn, nextBtn, itemCount, itemsPerView = () => 1, autoplay = 0 }){
    let index = 0;
    let timer = null;

    function computeMax(){
      const perView = itemsPerView();
      return Math.max(0, itemCount - perView);
    }

    function dotCount(){
      const perView = itemsPerView();
      return Math.max(1, itemCount - perView + 1);
    }

    function render(){
      const perView = itemsPerView();
      const percentPerItem = 100 / itemCount;
      track.style.transform = `translateX(-${index * percentPerItem}%)`;
      if (dotsEl){
        [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === index));
      }
    }

    function buildDots(){
      if (!dotsEl) return;
      const count = dotCount();
      dotsEl.innerHTML = '';
      for (let i = 0; i < count; i++){
        const b = document.createElement('button');
        b.setAttribute('aria-label', `Go to slide ${i + 1}`);
        b.addEventListener('click', () => { goTo(i); restart(); });
        dotsEl.appendChild(b);
      }
    }

    function goTo(i){
      const max = computeMax();
      index = ((i % (max + 1)) + (max + 1)) % (max + 1);
      render();
    }

    function next(){ goTo(index + 1); }
    function prev(){ goTo(index - 1); }

    function restart(){
      if (!autoplay) return;
      clearInterval(timer);
      timer = setInterval(next, autoplay);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });

    // touch / drag support
    let startX = 0, deltaX = 0, dragging = false;
    const viewport = track.parentElement;
    viewport.addEventListener('pointerdown', e => {
      dragging = true; startX = e.clientX; deltaX = 0;
      track.style.transition = 'none';
    });
    viewport.addEventListener('pointermove', e => {
      if (!dragging) return;
      deltaX = e.clientX - startX;
    });
    function endDrag(){
      if (!dragging) return;
      dragging = false;
      track.style.transition = '';
      if (deltaX > 60) prev();
      else if (deltaX < -60) next();
      else render();
      restart();
    }
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointerleave', endDrag);

    const wrap = viewport.closest('.carousel');
    if (wrap && autoplay){
      wrap.addEventListener('mouseenter', () => clearInterval(timer));
      wrap.addEventListener('mouseleave', restart);
    }

    buildDots();
    render();
    restart();

    window.addEventListener('resize', () => { buildDots(); goTo(0); });

    return { next, prev, goTo };
  }

  /* ---------------------------------------------------------
     SERVICES — glassy 3D coverflow controller
     (centered "spotlight" card, receding glass cards either
     side, pulsing aura glow, autoplay + swipe + arrows/dots)
  --------------------------------------------------------- */
  function initServicesCarousel(){
    const cards = [...servicesTrack.querySelectorAll('.service-card')];
    const dotsEl = document.getElementById('servicesDots');
    const prevBtn = document.getElementById('servicesPrev');
    const nextBtn = document.getElementById('servicesNext');
    const wrap = document.getElementById('servicesCarousel');
    const stage = servicesTrack.parentElement;
    const len = cards.length;
    if (!len) return;
    let active = 0;
    let timer = null;

    function render(){
      cards.forEach((card, i) => {
        let raw = i - active;
        if (raw > len / 2) raw -= len;
        if (raw < -len / 2) raw += len;
        card.dataset.offset = raw;
      });
      if (dotsEl){
        [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === active));
      }
    }

    function buildDots(){
      if (!dotsEl) return;
      dotsEl.innerHTML = '';
      for (let i = 0; i < len; i++){
        const b = document.createElement('button');
        b.setAttribute('aria-label', `Go to ${services[i].title}`);
        b.addEventListener('click', () => { goTo(i); restart(); });
        dotsEl.appendChild(b);
      }
    }

    function goTo(i){ active = ((i % len) + len) % len; render(); }
    function next(){ goTo(active + 1); }
    function prev(){ goTo(active - 1); }
    function restart(){ clearInterval(timer); timer = setInterval(next, 4200); }

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });
    cards.forEach((card, i) => card.addEventListener('click', () => {
      if (card.dataset.offset !== '0'){ goTo(i); restart(); }
    }));

    // swipe / drag support
    let startX = 0, dragging = false;
    stage.addEventListener('pointerdown', e => { dragging = true; startX = e.clientX; });
    stage.addEventListener('pointerup', e => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - startX;
      if (dx > 50) prev();
      else if (dx < -50) next();
      restart();
    });
    stage.addEventListener('pointerleave', () => { dragging = false; });

    if (wrap){
      wrap.addEventListener('mouseenter', () => clearInterval(timer));
      wrap.addEventListener('mouseleave', restart);
    }

    buildDots();
    render();
    restart();
  }
  initServicesCarousel();

  createCarousel({
    track: reviewsTrack,
    dotsEl: document.getElementById('reviewsDots'),
    itemCount: reviews.length,
    itemsPerView: () => 1,
    autoplay: 5600
  });

  /* ---------------------------------------------------------
     NAV: scroll state, active link, mobile menu
  --------------------------------------------------------- */
  const nav = document.getElementById('nav');
  const navBurger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  const navScrollProgress = document.getElementById('navScrollProgress');
  const navLinkEls = [...document.querySelectorAll('.nav-link')];
  const sections = navLinkEls.map(l => document.querySelector(l.getAttribute('href')));

  /* Grain reacts to scroll speed: flickers faster/stronger the
     faster you scroll, settles back to a calm base when idle. */
  const noiseOverlay = document.querySelector('.noise-overlay');
  let lastScrollY = window.scrollY;
  let lastScrollT = performance.now();
  let noiseDecayTimer = null;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);

    if (navScrollProgress){
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      navScrollProgress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    }

    if (noiseOverlay){
      const now = performance.now();
      const dt = Math.max(1, now - lastScrollT);
      const speed = Math.abs(window.scrollY - lastScrollY) / dt; // px per ms
      lastScrollY = window.scrollY;
      lastScrollT = now;
      const opacity = Math.min(0.11, 0.035 + speed * 0.9);
      noiseOverlay.style.opacity = opacity.toFixed(3);
      clearTimeout(noiseDecayTimer);
      noiseDecayTimer = setTimeout(() => { noiseOverlay.style.opacity = '0.035'; }, 220);
    }

    let current = sections[0];
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    sections.forEach(sec => {
      if (sec && sec.offsetTop <= scrollPos) current = sec;
    });
    navLinkEls.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current.id}`));
  }, { passive: true });

  /* Liquid glass indicator: glides + squashes behind the hovered/active link */
  const liquidGlass = document.getElementById('navLiquidGlass');
  if (liquidGlass && window.matchMedia('(min-width: 761px)').matches) {
    let liquidHoverLock = false;

    const moveLiquidGlass = (el, instant) => {
      if (!el) return;
      const wrapRect = navLinks.getBoundingClientRect();
      const rect = el.getBoundingClientRect();

      if (instant) liquidGlass.style.transitionDuration = '0s, 0s, 0s';
      liquidGlass.style.opacity = '1';
      liquidGlass.style.left = `${rect.left - wrapRect.left}px`;
      liquidGlass.style.width = `${rect.width}px`;

      liquidGlass.classList.remove('liquid-morph');
      void liquidGlass.offsetWidth;
      liquidGlass.classList.add('liquid-morph');

      if (instant) {
        requestAnimationFrame(() => { liquidGlass.style.transitionDuration = ''; });
      }
    };

    const getActiveLink = () => navLinkEls.find(l => l.classList.contains('active')) || navLinkEls[0];

    navLinkEls.forEach(link => {
      link.addEventListener('mouseenter', () => {
        liquidHoverLock = true;
        moveLiquidGlass(link);
      });
    });

    navLinks.addEventListener('mouseleave', () => {
      liquidHoverLock = false;
      moveLiquidGlass(getActiveLink());
    });

    const liquidObserver = new MutationObserver(() => {
      if (!liquidHoverLock) moveLiquidGlass(getActiveLink());
    });
    navLinkEls.forEach(l => liquidObserver.observe(l, { attributes: true, attributeFilter: ['class'] }));

    window.addEventListener('resize', () => moveLiquidGlass(getActiveLink(), true));
    window.addEventListener('load', () => moveLiquidGlass(getActiveLink(), true));
    requestAnimationFrame(() => moveLiquidGlass(getActiveLink(), true));
  }

  navBurger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navBurger.classList.toggle('open', open);
    navBurger.setAttribute('aria-expanded', String(open));
  });
  navLinkEls.forEach(l => l.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navBurger.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
  }));

  /* ---------------------------------------------------------
     HERO LOGO — straight continuous 360° spin (single axis)
  --------------------------------------------------------- */
  const logo3d = document.getElementById('logo3d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateLogo(t){
    if (logo3d && !reduceMotion){
      const autoY = (t / 45) % 360;
      logo3d.style.setProperty('--tilt-x', `0deg`);
      logo3d.style.setProperty('--tilt-y', `${autoY}deg`);
      logo3d.style.setProperty('--tilt-z', `0deg`);
    }
    requestAnimationFrame(animateLogo);
  }
  requestAnimationFrame(animateLogo);

  /* ---------------------------------------------------------
     CURSOR GLOW (ambient, desktop only)
  --------------------------------------------------------- */
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(pointer:fine)').matches){
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2;
    let cx = gx, cy = gy;
    window.addEventListener('pointermove', e => { gx = e.clientX; gy = e.clientY; });
    function moveGlow(){
      cx += (gx - cx) * 0.08;
      cy += (gy - cy) * 0.08;
      cursorGlow.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(moveGlow);
    }
    requestAnimationFrame(moveGlow);
  } else if (cursorGlow){
    cursorGlow.style.display = 'none';
  }

  /* ---------------------------------------------------------
     CUSTOM CURSOR (pen mark, desktop only, follows precisely)
  --------------------------------------------------------- */
  const customCursor = document.getElementById('customCursor');
  if (customCursor && window.matchMedia('(pointer:fine)').matches){
    document.documentElement.classList.add('custom-cursor-on');
    customCursor.classList.add('active');
    window.addEventListener('pointermove', e => {
      customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const target = e.target.closest('a, button, input, textarea, select, [role="button"]');
      customCursor.classList.toggle('pointer', !!target);
    });
    document.addEventListener('mouseleave', () => customCursor.classList.remove('active'));
    document.addEventListener('mouseenter', () => customCursor.classList.add('active'));
  } else if (customCursor){
    customCursor.style.display = 'none';
  }

  /* ---------------------------------------------------------
     FAVICON — swaps to a "come back" mark while the tab is
     unfocused, restores the normal mark on return
  --------------------------------------------------------- */
  (function initFaviconBlink(){
    const favicon = document.getElementById('favicon');
    if (!favicon) return;
    const normalIcon = favicon.href;
    const awayIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%23171430'/%3E%3Ctext x='32' y='44' font-family='Arial,sans-serif' font-weight='700' font-size='34' fill='%233ddc84' text-anchor='middle'%3E!%3C/text%3E%3C/svg%3E";
    let blinkTimer = null;
    let blinkOn = false;

    document.addEventListener('visibilitychange', () => {
      if (document.hidden){
        document.title = '👋 Come back! — Pixel Aura Studio';
        blinkTimer = setInterval(() => {
          blinkOn = !blinkOn;
          favicon.href = blinkOn ? awayIcon : normalIcon;
        }, 900);
      } else {
        clearInterval(blinkTimer);
        favicon.href = normalIcon;
        document.title = 'Shraddha — Pixel Aura Studio | Graphic Designer';
      }
    });
  })();

  /* ---------------------------------------------------------
     CONFETTI — shared by the logo easter egg and Konami code
  --------------------------------------------------------- */
  const confettiColors = ['#97b7f3', '#c3d3fb', '#b06bff', '#5b558a', '#3ddc84'];
  function burstConfetti(){
    const count = 70;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++){
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      const x = 50 + (Math.random() * 30 - 15);
      const dx = (Math.random() * 260 - 130);
      const dy = 100 + Math.random() * 60;
      const rot = Math.random() * 720 - 360;
      const size = 6 + Math.random() * 6;
      const color = confettiColors[i % confettiColors.length];
      const delay = Math.random() * 120;
      piece.style.left = `${x}vw`;
      piece.style.top = '18vh';
      piece.style.width = `${size}px`;
      piece.style.height = `${size * 0.6}px`;
      piece.style.background = color;
      piece.style.setProperty('--dx', `${dx}px`);
      piece.style.setProperty('--dy', `${dy}vh`);
      piece.style.setProperty('--rot', `${rot}deg`);
      piece.style.animationDelay = `${delay}ms`;
      frag.appendChild(piece);
      setTimeout(() => piece.remove(), 2000 + delay);
    }
    document.body.appendChild(frag);
  }

  /* ---------------------------------------------------------
     LOGO EASTER EGG — click the logo 5x quickly for confetti
  --------------------------------------------------------- */
  (function initLogoEasterEgg(){
    const logos = document.querySelectorAll('.nav-logo');
    if (!logos.length) return;
    let clicks = 0;
    let resetTimer = null;

    logos.forEach(logo => {
      logo.addEventListener('click', (e) => {
        clicks++;
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => { clicks = 0; }, 1400);
        if (clicks >= 5){
          e.preventDefault();
          clicks = 0;
          burstConfetti();
        }
      });
    });
  })();

  /* Konami code — classic sequence also triggers confetti */
  (function initKonamiCode(){
    const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let pos = 0;
    document.addEventListener('keydown', (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === sequence[pos]){
        pos++;
        if (pos === sequence.length){
          pos = 0;
          burstConfetti();
        }
      } else {
        pos = (key === sequence[0]) ? 1 : 0;
      }
    });
  })();

  /* ---------------------------------------------------------
     SOUND TOGGLE — synthesized UI clicks/hovers, off by default
  --------------------------------------------------------- */
  (function initSoundToggle(){
    const btn = document.getElementById('soundToggle');
    if (!btn) return;
    let audioCtx = null;
    let soundOn = false;

    function ensureCtx(){
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function tone(freq, duration, gainPeak){
      if (!soundOn) return;
      const ctx = ensureCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainPeak, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    }

    btn.addEventListener('click', () => {
      soundOn = !soundOn;
      btn.setAttribute('aria-pressed', String(soundOn));
      btn.textContent = soundOn ? '🔊' : '🔇';
      if (soundOn) { ensureCtx(); tone(660, 0.12, 0.08); }
    });

    document.querySelectorAll('.nav-link, .btn, .reel-social-btn, .social-chip').forEach(el => {
      el.addEventListener('mouseenter', () => tone(520, 0.06, 0.03));
      el.addEventListener('click', () => tone(340, 0.09, 0.05));
    });
  })();

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
  --------------------------------------------------------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  revealEls.forEach((el, i) => el.style.setProperty('--i', i % 6));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---------------------------------------------------------
     ANIMATED STAT COUNTERS — count up from 0 when scrolled into view
  --------------------------------------------------------- */
  (function initStatCounters(){
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counters = document.querySelectorAll('.stat-num[data-count-to]');
    if (!counters.length) return;

    function animateCount(el){
      const target = parseInt(el.dataset.countTo, 10) || 0;
      const suffix = el.dataset.suffix || '';
      if (reduceMotion){
        el.textContent = target + suffix;
        return;
      }
      const duration = 1400;
      const start = performance.now();
      function tick(now){
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(tick);
    }

    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          animateCount(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterIO.observe(el));
  })();

  /* ---------------------------------------------------------
     CONTACT FORM — Web3Forms submission
     Get a free access key at https://web3forms.com and paste it
     into the hidden "access_key" input in index.html.
  --------------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const formSubmitBtn = document.getElementById('formSubmitBtn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const accessKey = form.querySelector('[name="access_key"]').value.trim();
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        formNote.textContent = 'Form isn\'t connected yet — add a Web3Forms access key in index.html.';
        return;
      }

      formSubmitBtn.disabled = true;
      formSubmitBtn.textContent = 'Sending…';
      formNote.textContent = '';

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        const result = await res.json();

        if (result.success) {
          form.reset();
          formSubmitBtn.textContent = 'Message sent';
          formNote.textContent = 'Thanks! I\'ll get back to you by email soon.';
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        formSubmitBtn.textContent = 'Send message';
        formNote.textContent = 'Something went wrong sending that — please try again or email me directly.';
      } finally {
        formSubmitBtn.disabled = false;
        setTimeout(() => { formSubmitBtn.textContent = 'Send message'; }, 4000);
      }
    });
  }

  /* ---------------------------------------------------------
     FOOTER YEAR
  --------------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     MAGNETIC BUTTONS — CTAs pull gently toward the cursor
  --------------------------------------------------------- */
  (function initMagneticButtons(){
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const strength = 0.3;
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        el.style.transition = 'transform .12s ease-out';
        el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1)';
        el.style.transform = 'translate(0,0)';
      });
    });
  })();

  /* ---------------------------------------------------------
     TILT-ON-HOVER — pricing cards tilt in 3D toward the cursor
  --------------------------------------------------------- */
  (function initTiltCards(){
    if (!window.matchMedia('(pointer:fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const maxTilt = 10; // degrees
    document.querySelectorAll('.price-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        const rotateY = relX * maxTilt * 2;
        const rotateX = -relY * maxTilt * 2;
        card.style.transition = 'transform .12s ease-out';
        card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform .5s var(--ease)';
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      });
    });
  })();

});