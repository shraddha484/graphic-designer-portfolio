/* ============================================================
   PIXEL AURA STUDIO — PORTFOLIO SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

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
      title: 'Brand identity — concept startup',
      desc: 'Complete identity system: logo, business card, letterhead and social media kit built around one consistent palette.',
      tags: ['Branding', 'Logo', 'Identity system']
    },
    {
      icon: '🏋️',
      title: 'Marketing flyer — fitness campaign',
      desc: 'A bold, high-contrast flyer for a fitness brand promotion, built for strong shelf and feed presence.',
      tags: ['Flyer design', 'Typography', 'Print']
    },
    {
      icon: '☕',
      title: 'Social campaign — café brand',
      desc: 'Instagram posts, stories and ad creatives for a café\'s promotional campaign, kept consistent across formats.',
      tags: ['Social media', 'Campaign', 'Instagram']
    },
    {
      icon: '🧴',
      title: 'Packaging — organic skincare',
      desc: 'Packaging and label concepts for an organic skincare line, presented with professional product mockups.',
      tags: ['Packaging', 'Labels', 'Mockups']
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
     RENDER: projects grid
  --------------------------------------------------------- */
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = projects.map((p, i) => `
    <div class="project-card reveal" data-reveal>
      <div class="project-cover" style="background:${gradientFor(i)}">
        <span class="project-cover-icon">${p.icon}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  function gradientFor(i){
    const grads = [
      'linear-gradient(135deg,#8b2ff7,#22d3ee)',
      'linear-gradient(135deg,#4f7cff,#b026ff)',
      'linear-gradient(135deg,#22d3ee,#4f7cff)',
      'linear-gradient(135deg,#b026ff,#ff5fa2)'
    ];
    return grads[i % grads.length];
  }

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
      <a href="#contact" class="btn ${p.featured ? 'btn-primary' : 'btn-ghost'}">Get a quote</a>
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
  const navLinkEls = [...document.querySelectorAll('.nav-link')];
  const sections = navLinkEls.map(l => document.querySelector(l.getAttribute('href')));

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);

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
     HERO LOGO — 3D auto-rotation + mouse tilt (all-axis motion)
  --------------------------------------------------------- */
  const logo3d = document.getElementById('logo3d');
  const logoStage = document.getElementById('logoStage');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let targetTiltX = 0, targetTiltY = 0;
  let mouseTiltX = 0, mouseTiltY = 0;

  if (logoStage && !reduceMotion){
    logoStage.addEventListener('pointermove', (e) => {
      const rect = logoStage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetTiltY = px * 46;
      targetTiltX = -py * 46;
    });
    logoStage.addEventListener('pointerleave', () => {
      targetTiltX = 0; targetTiltY = 0;
    });
  }

  function animateLogo(t){
    if (logo3d && !reduceMotion){
      // continuous slow tumble across every axis
      const autoY = Math.sin(t / 3200) * 22;
      const autoX = Math.sin(t / 2500) * 12;
      const autoZ = Math.sin(t / 5200) * 6;

      mouseTiltX += (targetTiltX - mouseTiltX) * 0.06;
      mouseTiltY += (targetTiltY - mouseTiltY) * 0.06;

      logo3d.style.setProperty('--tilt-x', `${autoX + mouseTiltX}deg`);
      logo3d.style.setProperty('--tilt-y', `${autoY + mouseTiltY}deg`);
      logo3d.style.setProperty('--tilt-z', `${autoZ}deg`);
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

});