/* =====================================================================
   MARVENSHA landing page DRAFT — EDITABLE VALUES (top of file)
   ===================================================================== */

/* BRAND NAME (final). This ONE line fills every [data-brand] element, the <title> and WhatsApp messages. */
const BRAND_NAME = "MARVENSHA";

/* WhatsApp: +509 4732 1971 (profile bio). Digits only for wa.me. */
const WHATSAPP_NUMBER = "50947321971";
const WHATSAPP_DISPLAY = "+509 4732 1971";

const TIKTOK_URL = "https://www.tiktok.com/@julensjul";
const INSTAGRAM_URL = ""; // PLACEHOLDER — founder to confirm (sticker shows @MarvenshaJewelrystore, unverified).

const DEFAULT_LANG = "fr"; // "fr" | "ht" | "en"; override with ?lang=ht

/* =====================================================================
   PROVISIONAL HIGGSFIELD MOTION — each switch is ONE line. Founder must approve before launch.
   ===================================================================== */
/* Hero background loop (Design Director MARV_hero_display_16x9, cropped to 1080x608 to keep the box clasp
   out of frame; the AI-completed bracelet end is outside this crop). false = founder photo only. */
const SHOW_HERO_CLIP = true;
/* Featured 3D medallion turntable in the collection (MARV_turntable_medallion_1x1 / _9x16). false = hidden. */
const SHOW_MEDALLION_LOOP = true;
/* Small square product loops (bar necklace card slide 3, engraving section, packaging inset). false = stills only. */
const SHOW_MOTION_TILES = true;

const HERO_CLIP = { webm: "media/hero_clip.webm", mp4: "media/hero_clip.mp4", poster: "media/hero_clip_poster.jpg", w: 1080, h: 608 };
const MEDALLION = {
  wide: { webm: "media/MARV_turntable_medallion_1x1.webm", mp4: "media/MARV_turntable_medallion_1x1.mp4", poster: "media/MARV_turntable_medallion_1x1_poster.jpg", w: 1080, h: 1080 },
  tall: { webm: "media/MARV_turntable_medallion_9x16.webm", mp4: "media/MARV_turntable_medallion_9x16.mp4", poster: "media/MARV_turntable_medallion_9x16_poster.jpg", w: 720, h: 1280 },
  name: { fr: "Pendentif médaillon gravé", ht: "Pandantif meday grave", en: "Engraved medallion pendant" },
  desc: { fr: "Médaille ronde sur chaîne fine, gravée au laser d'un motif, d'initiales ou d'une date.", ht: "Meday won sou yon chèn fen, grave ak lazè ak yon desen, inisyal oswa yon dat.", en: "Round medallion on a fine chain, laser-engraved with a motif, initials or a date." }
};
const LOOPS = {
  bar:       { webm: "media/MARV_product_bar_necklace_1x1.webm", mp4: "media/MARV_product_bar_necklace_1x1.mp4", poster: "media/MARV_product_bar_necklace_1x1_poster.jpg", w: 720, h: 720 },
  engraving: { webm: "media/MARV_product_engraving_1x1.webm", mp4: "media/MARV_product_engraving_1x1.mp4", poster: "media/MARV_product_engraving_1x1_poster.jpg", w: 720, h: 720 },
  unboxing:  { webm: "media/MARV_product_unboxing_1x1.webm", mp4: "media/MARV_product_unboxing_1x1.mp4", poster: "media/MARV_product_unboxing_1x1_poster.jpg", w: 720, h: 720 }
  /* MARV_product_ID_bracelet_1x1 NOT used: the box's crown-shaped clasp is visible in every frame. */
};

/* SHOWCASE CARDS — macro still + scale/packaging still, metal + engraving lines, per-card WhatsApp.
   Images: crops of TikTok stills (see report). Names are descriptive PLACEHOLDERS (no product names published). */
const SHOWCASE = [
  { id: "bar",
    img1: { base: "media/card_bar_macro", w: 460, h: 515 },   // 7675326361019354389_01 (crop)
    img2: { base: "media/card_bar_scale", w: 460, h: 575 },   // 7694829647925693716_03 (crop)
    loop: "bar",                                              // 3rd slide: Higgsfield tile (SHOW_MOTION_TILES)
    name: { fr: "Collier barre gravé", ht: "Kolye ba grave", en: "Engraved bar necklace" },
    desc: { fr: "Barre verticale sur chaîne fine, à graver d'un prénom ou d'une date.", ht: "Ba vètikal sou yon chèn fen, pou grave yon non oswa yon dat.", en: "Vertical bar on a fine chain, engraved with a name or date." } },
  { id: "coin",
    img1: { base: "media/card_coin_macro", w: 480, h: 600 },  // 7676306498833648917_03 (crop)
    img2: { base: "media/card_coin_scale", w: 640, h: 800 },  // 7676306498833648917_03 (wide)
    name: { fr: "Pendentif rond gravé", ht: "Pandantif won grave", en: "Engraved round pendant" },
    desc: { fr: "Médaille ronde gravée d'un motif ou d'initiales.", ht: "Meday won grave ak yon desen oswa inisyal.", en: "Round medallion engraved with a motif or initials." } },
  { id: "id",
    img1: { base: "media/card_id_macro", w: 480, h: 600 },    // 7676306498833648917_02 (crop below the box lid)
    img2: { base: "media/card_id_scale", w: 800, h: 428 },    // 7676306498833648917_02 (open box)
    name: { fr: "Bracelet ID à maillons", ht: "Braslè ID ak mayon", en: "Link ID bracelet" },
    desc: { fr: "Plaque gravée de votre prénom, livrée dans son écrin.", ht: "Plak grave ak non w, li vini nan bwat li.", en: "Plate engraved with your name, delivered in its box." } }
];

/* PRODUCT VIDEOS — site/media/<name>.webm + .mp4 + poster .jpg/.webp, transcoded from tiktok/videos/.
   Names are descriptive PLACEHOLDERS. Clips with legible customer names were excluded. */
const PRODUCT_VIDEOS = [
  { id: "v1", base: "media/video_bar", source: "7694829647925693716 (22.5–37.5s)",
    name: { fr: "Collier barre plaqué or", ht: "Kolye ba plake lò", en: "Gold-tone bar necklace" } },
  { id: "v2", base: "media/video_bag", source: "7688886072192847124 (3–21s)",
    name: { fr: "Sac & écrin cadeau", ht: "Sache ak bwat kado", en: "Gift bag & box" } },
  { id: "v3", base: "media/video_pack", source: "7691281101251185941 (0–11s)",
    name: { fr: "Commandes emballées", ht: "Kòmand ki fin anbale", en: "Orders, gift-wrapped" } }
];

/* =====================================================================
   TRANSLATIONS — fr (default), ht = Kreyòl BEST ATTEMPT (NEEDS NATIVE-SPEAKER REVIEW), en.
   Values may contain simple inline HTML authored here only.
   ===================================================================== */
const I18N = {
  fr: {
    img_motion: "En mouvement", feat_eyebrow: "En mouvement · aperçu 3D", provisional: "Animation provisoire — à valider",
    loop_engraving: "Animation : plaque gravée « Marvensha 4 ans »", loop_unboxing: "Animation : écrin MARVENSHA dans le sac cadeau",
    hero_clip_label: "animation d'arrière-plan",
    skip: "Aller au contenu", draft: "Aperçu brouillon — les éléments provisoires sont marqués",
    ph: "À compléter", ph_link: "Lien à venir", ph_name: "Nom à confirmer",
    nav_collection: "Collection", nav_videos: "Vidéos", nav_engraving: "Gravure", nav_locations: "Où nous trouver",
    hero_eyebrow: "Plaqué or · gravure laser",
    hero_title: "Votre nom,<br><em>gravé pour briller.</em>",
    hero_lede: "Colliers, pendentifs et bracelets plaqué or, gravés au laser à votre nom et prêts à offrir.",
    hero_secondary: "Voir la collection", hero_alt: "Collier barre plaqué or sur un buste en velours émeraude",
    hero_pause: "Pause", hero_play: "Lecture",
    cta_order: "Commander sur WhatsApp",
    proof1_k: "Gravure laser", proof1_v: "Prénom, date ou phrase courte",
    proof2_k: "Prêt à offrir", proof2_v: "Écrin et sac cadeau MARVENSHA",
    proof3_k: "Okap &amp; Limbé", proof3_v: "Deux boutiques, commande sur WhatsApp",
    col_eyebrow: "Pièces signature", col_title: "Choisissez, nous gravons",
    col_sub: "Chaque pièce se personnalise. Touchez une photo pour voir le détail, puis écrivez-nous sur WhatsApp.",
    metal: "Plaqué or", engr: "Gravure laser personnalisée", size: "Dimensions : à confirmer",
    price: "Prix sur WhatsApp", card_wa: "Commander sur WhatsApp",
    img_detail: "Détail", img_scale: "Vue d'ensemble", show_img: "Voir la photo",
    videos_eyebrow: "En vidéo", videos_title: "De près",
    videos_sub: "Touchez une vidéo pour la lancer, puis commandez directement sur WhatsApp.",
    play: "Lire la vidéo", pause: "Mettre en pause",
    video_wa_lead: "Ça vous plaît ?", video_wa_btn: "Commander sur WhatsApp",
    wa_msg_product: "Bonjour {brand}, je suis intéressé(e) par ce bijou : {name}",
    wa_msg_general: "Bonjour {brand}, je voudrais commander un bijou personnalisé.",
    eng_eyebrow: "La gravure laser", eng_title: "Trois étapes simples",
    s1_t: "Choisissez votre bijou", s1_p: "Collier barre, pendentif ou bracelet ID : choisissez le modèle qui vous plaît.",
    s2_t: "Envoyez vos mots", s2_p: "Écrivez-nous sur WhatsApp le prénom, la date ou la phrase à graver.",
    s3_t: "Gravure &amp; écrin", s3_p: "Nous gravons votre bijou au laser et le préparons dans un écrin, prêt à offrir.",
    eng_note: "Nombre de caractères, polices et délai : à confirmer par la boutique.",
    gift_eyebrow: "L'emballage", gift_title: "Prêt à offrir, <em>dès l'ouverture.</em>",
    gift_p: "Chaque bijou part dans un écrin MARVENSHA, glissé dans un sac blanc à anses en corde bleu marine, avec ruban.",
    gift_alt: "Sac cadeau blanc MARVENSHA à anses en corde bleu marine, avec ruban",
    gift2_alt: "Deux sacs cadeau MARVENSHA présentés en boutique",
    pack1: "Écrin bleu marine, logo doré", pack2: "Sac blanc, anses en corde marine", pack3: "Présenté sur velours émeraude",
    loc_eyebrow: "Où nous trouver", loc_title: "Deux adresses",
    loc_okap: "Route nationale #1, carrefour Champin", loc_limbe: "Foureau, Ave Pétion",
    loc_note: "Horaires à confirmer. Écrivez-nous sur WhatsApp avant de passer.",
    social_eyebrow: "Suivez-nous", social_title: "Les nouveautés en premier",
    cta_title: "Prêt à le rendre unique ?",
    cta_p: "Dites-nous le bijou et les mots à graver. Nous vous répondons sur WhatsApp pour confirmer les détails et le prix.",
    footer_tag: "Bijoux plaqué or personnalisés, gravés au laser", rights: "Tous droits réservés.",
    logo_note: "Logo : symbole officiel de la boutique ; nom composé MARVENSHA.",
    wa_float_aria: "Commander sur WhatsApp, +509 4732 1971",
    title: "{brand} — Bijoux personnalisés gravés au laser"
  },
  /* ---- KREYÒL: BEST ATTEMPT — NEEDS NATIVE-SPEAKER REVIEW ---- */
  ht: {
    img_motion: "K ap bouje", feat_eyebrow: "K ap bouje · apèsi 3D", provisional: "Animasyon pwovizwa — pou valide",
    loop_engraving: "Animasyon : plak grave « Marvensha 4 ans »", loop_unboxing: "Animasyon : bwat MARVENSHA nan sache kado a",
    hero_clip_label: "animasyon dèyè a",
    skip: "Ale nan kontni an", draft: "Bouyon — sa ki poko fini make konsa",
    ph: "Pou konplete", ph_link: "Lyen ap vini", ph_name: "Non pou konfime",
    nav_collection: "Koleksyon", nav_videos: "Videyo", nav_engraving: "Gravi", nav_locations: "Kote nou ye",
    hero_eyebrow: "Plake lò · gravi lazè",
    hero_title: "Non w,<br><em>grave pou l klere.</em>",
    hero_lede: "Kolye, pandantif ak braslè plake lò, grave ak lazè ak non w, pare pou bay kado.",
    hero_secondary: "Gade koleksyon an", hero_alt: "Kolye ba plake lò sou yon bis an vlou vèt emwòd",
    hero_pause: "Poz", hero_play: "Jwe",
    cta_order: "Kòmande sou WhatsApp",
    proof1_k: "Gravi lazè", proof1_v: "Non, dat oswa yon ti fraz",
    proof2_k: "Pare pou kado", proof2_v: "Bwat ak sache kado MARVENSHA",
    proof3_k: "Okap &amp; Limbé", proof3_v: "De boutik, kòmande sou WhatsApp",
    col_eyebrow: "Bijou siyati", col_title: "Ou chwazi, nou grave",
    col_sub: "Nou ka pèsonalize chak bijou. Touche yon foto pou wè detay la, epi ekri nou sou WhatsApp.",
    metal: "Plake lò", engr: "Gravi lazè pèsonalize", size: "Dimansyon : pou konfime",
    price: "Pri sou WhatsApp", card_wa: "Kòmande sou WhatsApp",
    img_detail: "Detay", img_scale: "Tout bijou a", show_img: "Gade foto",
    videos_eyebrow: "An videyo", videos_title: "De pre",
    videos_sub: "Touche yon videyo pou l jwe, epi kòmande dirèkteman sou WhatsApp.",
    play: "Jwe videyo a", pause: "Kanpe videyo a",
    video_wa_lead: "Ou renmen l ?", video_wa_btn: "Kòmande sou WhatsApp",
    wa_msg_product: "Bonjou {brand}, mwen enterese nan bijou sa a : {name}",
    wa_msg_general: "Bonjou {brand}, mwen ta renmen kòmande yon bijou pèsonalize.",
    eng_eyebrow: "Gravi lazè", eng_title: "Twa etap senp",
    s1_t: "Chwazi bijou w", s1_p: "Kolye ba, pandantif oswa braslè ID : chwazi modèl ou renmen an.",
    s2_t: "Voye mo w yo", s2_p: "Ekri nou sou WhatsApp non an, dat la oswa fraz pou nou grave a.",
    s3_t: "Gravi &amp; bwat kado", s3_p: "Nou grave bijou w ak lazè epi nou mete l nan yon bwat, pare pou bay kado.",
    eng_note: "Konbyen lèt, ki estil ekriti ak delè : boutik la ap konfime.",
    gift_eyebrow: "Anbalaj la", gift_title: "Pare pou bay kado, <em>depi w louvri l.</em>",
    gift_p: "Chak bijou ale nan yon bwat MARVENSHA, nan yon sache blan ak manch kòd ble maren, ak yon riban.",
    gift_alt: "Sache kado blan MARVENSHA ak manch kòd ble maren ak riban",
    gift2_alt: "De sache kado MARVENSHA nan boutik la",
    pack1: "Bwat ble maren, logo an lò", pack2: "Sache blan, manch kòd ble maren", pack3: "Prezante sou vlou vèt emwòd",
    loc_eyebrow: "Kote nou ye", loc_title: "De adrès",
    loc_okap: "Wout nasyonal #1, kafou Chanpen", loc_limbe: "Fouro, Ave Pétion",
    loc_note: "Lè yo pou konfime. Ekri nou sou WhatsApp anvan ou pase.",
    social_eyebrow: "Swiv nou", social_title: "Wè nouvo bijou yo an premye",
    cta_title: "Ou pare pou fè l pou ou ?",
    cta_p: "Di nou ki bijou ak ki mo pou nou grave. N ap reponn ou sou WhatsApp pou konfime detay yo ak pri a.",
    footer_tag: "Bijou plake lò pèsonalize, grave ak lazè", rights: "Tout dwa rezève.",
    logo_note: "Logo : senbòl ofisyèl boutik la ; non an ekri MARVENSHA.",
    wa_float_aria: "Kòmande sou WhatsApp, +509 4732 1971",
    title: "{brand} — Bijou pèsonalize grave ak lazè"
  },
  en: {
    img_motion: "In motion", feat_eyebrow: "In motion · 3D preview", provisional: "Provisional animation — pending approval",
    loop_engraving: "Animation: engraved “Marvensha 4 ans” plate", loop_unboxing: "Animation: MARVENSHA box in the gift bag",
    hero_clip_label: "background animation",
    skip: "Skip to content", draft: "Draft preview — placeholders are marked",
    ph: "Placeholder", ph_link: "Link coming", ph_name: "Name to confirm",
    nav_collection: "Collection", nav_videos: "Videos", nav_engraving: "Engraving", nav_locations: "Find us",
    hero_eyebrow: "Gold-tone · laser engraving",
    hero_title: "Your name,<br><em>engraved to shine.</em>",
    hero_lede: "Gold-tone necklaces, pendants and bracelets, laser-engraved with your name and ready to gift.",
    hero_secondary: "See the collection", hero_alt: "Gold-tone bar necklace on an emerald velvet bust",
    hero_pause: "Pause", hero_play: "Play",
    cta_order: "Order on WhatsApp",
    proof1_k: "Laser engraving", proof1_v: "A name, a date or a short phrase",
    proof2_k: "Ready to gift", proof2_v: "MARVENSHA box and gift bag",
    proof3_k: "Okap &amp; Limbé", proof3_v: "Two shops, order on WhatsApp",
    col_eyebrow: "Signature pieces", col_title: "You choose, we engrave",
    col_sub: "Every piece can be personalized. Tap a photo to see the detail, then message us on WhatsApp.",
    metal: "Gold-tone (gold-plated)", engr: "Custom laser engraving", size: "Size: to be confirmed",
    price: "Price on WhatsApp", card_wa: "Order on WhatsApp",
    img_detail: "Detail", img_scale: "Full view", show_img: "Show photo",
    videos_eyebrow: "On video", videos_title: "Up close",
    videos_sub: "Tap a video to play it, then order straight on WhatsApp.",
    play: "Play video", pause: "Pause video",
    video_wa_lead: "Like it?", video_wa_btn: "Order on WhatsApp",
    wa_msg_product: "Hello {brand}, I'm interested in this piece: {name}",
    wa_msg_general: "Hello {brand}, I'd like to order a personalized piece.",
    eng_eyebrow: "Laser engraving", eng_title: "Three simple steps",
    s1_t: "Choose your piece", s1_p: "Bar necklace, pendant or ID bracelet: pick the style you love.",
    s2_t: "Send your words", s2_p: "Message us on WhatsApp with the name, date or phrase to engrave.",
    s3_t: "Engraved &amp; boxed", s3_p: "We laser-engrave your piece and pack it in a gift box, ready to give.",
    eng_note: "Character limits, fonts and lead time: to be confirmed by the shop.",
    gift_eyebrow: "Packaging", gift_title: "Ready to give, <em>straight from the box.</em>",
    gift_p: "Each piece leaves in a MARVENSHA box, inside a white bag with navy rope handles and a ribbon.",
    gift_alt: "White MARVENSHA gift bag with navy rope handles and ribbon",
    gift2_alt: "Two MARVENSHA gift bags shown in the shop",
    pack1: "Navy box, gold logo", pack2: "White bag, navy rope handles", pack3: "Presented on emerald velvet",
    loc_eyebrow: "Find us", loc_title: "Two locations",
    loc_okap: "Route Nationale #1, Carrefour Champin", loc_limbe: "Foureau, Ave Pétion",
    loc_note: "Opening hours to be confirmed. Message us on WhatsApp before you visit.",
    social_eyebrow: "Follow us", social_title: "See new pieces first",
    cta_title: "Ready to make it yours?",
    cta_p: "Tell us the piece and the words to engrave. We'll reply on WhatsApp to confirm the details and price.",
    footer_tag: "Gold-tone personalized jewelry, laser-engraved", rights: "All rights reserved.",
    logo_note: "Logo: the shop's official mark, name set as MARVENSHA.",
    wa_float_aria: "Order on WhatsApp, +509 4732 1971",
    title: "{brand} — Laser-engraved personalized jewelry"
  }
};

/* ===================================================================== */
let LANG = DEFAULT_LANG;
const t = (k) => (I18N[LANG] && I18N[LANG][k]) ?? I18N.fr[k] ?? k;
const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? "");
const waUrl = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const L = (o) => o[LANG] || o.fr;
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const productMsg = (name) => fill(t("wa_msg_product"), { brand: BRAND_NAME, name });
const pic = (img, alt, cls) => `<picture><source srcset="${img.base}.webp" type="image/webp"><img class="${cls}" src="${img.base}.jpg" alt="${esc(alt)}" width="${img.w}" height="${img.h}" loading="lazy" decoding="async"></picture>`;

function applyLang(lang) {
  LANG = I18N[lang] ? lang : DEFAULT_LANG;
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll("[data-i18n-alt]").forEach(el => el.setAttribute("alt", t(el.dataset.i18nAlt)));
  document.querySelectorAll("[data-brand]").forEach(el => { el.textContent = BRAND_NAME; });
  document.title = fill(t("title"), { brand: BRAND_NAME });
  document.querySelectorAll(".lang-switch [data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
  const general = waUrl(fill(t("wa_msg_general"), { brand: BRAND_NAME }));
  document.querySelectorAll(".wa-link").forEach(a => { a.href = general; });
  renderMedallion();
  renderShowcase();
  renderVideos();
  document.querySelectorAll('.motion-slot.has-loop').forEach(sl => { const b = sl.querySelector('.loop-toggle'); if (b) { b.dataset.label = t('loop_' + sl.dataset.loop); b.dispatchEvent(new Event('mv-sync')); } });
  updateHeroToggle();
  // Keep the CoS widget in step (fr/en only; Kreyòl -> French)
  const prod = document.getElementById("products");
  if (prod) {
    const wl = LANG === "en" ? "en" : "fr";
    const changed = prod.dataset.lang !== wl;
    prod.dataset.lang = wl;
    if (changed && window.MarvenshaProducts) window.MarvenshaProducts.init();
  }
  try { localStorage.setItem("mv_lang", LANG); } catch (e) {}
}

/* ---------- Showcase cards ---------- */
function renderShowcase() {
  const grid = document.getElementById("showcase-grid");
  if (!grid) return;
  grid.innerHTML = SHOWCASE.map(p => {
    const name = L(p.name);
    return `<li class="sc-card" data-id="${p.id}">
      <div class="sc-gallery" data-active="0">
        <div class="sc-track">
          <figure class="sc-slide">${pic(p.img1, `${name} — ${t("img_detail")}`, "sc-img")}</figure>
          <figure class="sc-slide">${pic(p.img2, `${name} — ${t("img_scale")}`, "sc-img")}</figure>
          ${hasLoop(p) ? `<figure class="sc-slide sc-slide-loop">${loopHTML(LOOPS[p.loop], `${name} — ${t("img_motion")}`, "sc-img")}</figure>` : ""}
        </div>
        <div class="sc-dots" role="group" aria-label="${esc(name)}">
          <button type="button" class="sc-dot" aria-pressed="true" data-i="0"><span class="sr">${t("show_img")} 1 : </span>${t("img_detail")}</button>
          <button type="button" class="sc-dot" aria-pressed="false" data-i="1"><span class="sr">${t("show_img")} 2 : </span>${t("img_scale")}</button>
          ${hasLoop(p) ? `<button type="button" class="sc-dot" aria-pressed="false" data-i="2"><span class="sr">${t("show_img")} 3 : </span>${t("img_motion")}</button>` : ""}
        </div>
      </div>
      <div class="sc-body">
        <div class="sc-title"><h3>${esc(name)}</h3><span class="ph-tag">${t("ph_name")}</span></div>
        <p class="sc-desc">${esc(L(p.desc))}</p>
        <ul class="sc-specs">
          <li><span class="spec-dot" aria-hidden="true"></span>${t("metal")}</li>
          <li><span class="spec-dot" aria-hidden="true"></span>${t("engr")}</li>
          <li class="spec-tbd"><span class="spec-dot" aria-hidden="true"></span>${t("size")}</li>
        </ul>
        <p class="sc-price">${t("price")}</p>
        <a class="btn btn-wa" href="${waUrl(productMsg(name))}" target="_blank" rel="noopener" aria-label="${esc(t("card_wa"))} : ${esc(name)}">
          <svg class="btn-icon" aria-hidden="true"><use href="#wa-icon"/></svg><span>${t("card_wa")}<span class="wa-num">${WHATSAPP_DISPLAY}</span></span>
        </a>
      </div>
    </li>`;
  }).join("");
  grid.querySelectorAll(".sc-gallery").forEach(g => {
    const track = g.querySelector(".sc-track");
    const dots = g.querySelectorAll(".sc-dot");
    const set = (i, scroll) => {
      g.dataset.active = i;
      dots.forEach(d => d.setAttribute("aria-pressed", String(+d.dataset.i === i)));
      if (scroll) track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
    };
    dots.forEach(d => d.addEventListener("click", () => set(+d.dataset.i, true)));
    if (matchMedia("(hover: hover) and (pointer: fine)").matches) { // desktop: hover shows the 2nd photo
      g.addEventListener("mouseenter", () => set(1, true));
      g.addEventListener("mouseleave", () => set(0, true));
    }
    track.addEventListener("scroll", () => { const i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth)); if (+g.dataset.active !== i) set(i, false); }, { passive: true });
  });
  wireLoops(grid);
}

/* ---------- Product videos ---------- */
function renderVideos() {
  const grid = document.getElementById("video-grid");
  if (!grid) return;
  const active = grid.querySelector(".video-card.is-active")?.dataset.id;
  grid.innerHTML = "";
  PRODUCT_VIDEOS.forEach(v => {
    const name = L(v.name);
    const li = document.createElement("li");
    li.className = "video-card";
    li.dataset.id = v.id;
    li.innerHTML = `
      <div class="video-frame">
        <video muted loop playsinline preload="none" width="576" height="1024" poster="${v.base}.jpg" aria-label="${esc(name)}">
          <source src="${v.base}.webm" type="video/webm">
          <source src="${v.base}.mp4" type="video/mp4">
        </video>
        <button type="button" class="video-play" aria-pressed="false" aria-label="${esc(t("play"))} : ${esc(name)}">
          <svg class="i-play" aria-hidden="true"><use href="#play-icon"/></svg><svg class="i-pause" aria-hidden="true"><use href="#pause-icon"/></svg>
        </button>
      </div>
      <div class="video-meta"><h3>${esc(name)}</h3><span class="ph-tag">${t("ph_name")}</span></div>
      <div class="video-wa" hidden>
        <p class="video-wa-lead">${t("video_wa_lead")}</p>
        <a class="btn btn-wa" href="${waUrl(productMsg(name))}" target="_blank" rel="noopener">
          <svg class="btn-icon" aria-hidden="true"><use href="#wa-icon"/></svg>
          <span>${t("video_wa_btn")}<span class="wa-num">${WHATSAPP_DISPLAY}</span></span>
        </a>
      </div>`;
    const video = li.querySelector("video");
    const btn = li.querySelector(".video-play");
    const activate = () => { li.classList.add("is-active"); li.querySelector(".video-wa").hidden = false; };
    const toggle = () => {
      activate();
      if (video.paused) { grid.querySelectorAll("video").forEach(o => { if (o !== video) o.pause(); }); video.play().catch(() => {}); }
      else video.pause();
    };
    btn.addEventListener("click", toggle);
    video.addEventListener("click", toggle);
    video.addEventListener("play", () => { activate(); li.classList.add("is-playing"); btn.setAttribute("aria-pressed", "true"); btn.setAttribute("aria-label", `${t("pause")} : ${name}`); });
    video.addEventListener("pause", () => { li.classList.remove("is-playing"); btn.setAttribute("aria-pressed", "false"); btn.setAttribute("aria-label", `${t("play")} : ${name}`); });
    if (active === v.id) activate();
    grid.appendChild(li);
  });
}

/* ---------- Supporting motion loops (Higgsfield) ---------- */
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasLoop = (p) => SHOW_MOTION_TILES && p.loop && LOOPS[p.loop];
/* Below-the-fold loops: muted loop playsinline + poster + width/height, preload="none"; they start only when
   on screen (IntersectionObserver) instead of the autoplay attribute, so nothing downloads off-screen.
   Each has a visible pause/play button (WCAG 2.2.2). Reduced motion: poster only, never auto-starts. */
function loopHTML(c, label, cls = "") {
  return `<div class="loop">
    <video class="loop-video ${cls}" muted loop playsinline preload="none" poster="${c.poster}" width="${c.w}" height="${c.h}" aria-label="${esc(label)}">
      <source src="${c.webm}" type="video/webm"><source src="${c.mp4}" type="video/mp4">
    </video>
    <button type="button" class="loop-toggle" aria-pressed="false" data-label="${esc(label)}" aria-label="${esc(t("pause"))} : ${esc(label)}">
      <svg class="i-pause" aria-hidden="true"><use href="#pause-icon"/></svg><svg class="i-play" aria-hidden="true"><use href="#play-icon"/></svg>
    </button>
  </div>`;
}
let loopIO = null;
function wireLoops(root) {
  if (!loopIO && "IntersectionObserver" in window) {
    loopIO = new IntersectionObserver(es => es.forEach(e => {
      const v = e.target;
      if (e.isIntersecting && !REDUCE && v.dataset.userPaused !== "1") v.play().catch(() => {});
      else if (!e.isIntersecting) v.pause();
    }), { threshold: 0.35 });
  }
  root.querySelectorAll(".loop").forEach(w => {
    if (w.dataset.wired) return; w.dataset.wired = "1";
    const v = w.querySelector("video"), b = w.querySelector(".loop-toggle");
    const sync = () => {
      const paused = v.paused, label = b.dataset.label;
      v.setAttribute("aria-label", label);
      w.classList.toggle("is-paused", paused);
      b.setAttribute("aria-pressed", String(paused));
      b.setAttribute("aria-label", `${paused ? t("play") : t("pause")} : ${label}`);
    };
    b.addEventListener("click", () => { if (v.paused) { v.dataset.userPaused = "0"; v.play().catch(() => {}); } else { v.dataset.userPaused = "1"; v.pause(); } });
    v.addEventListener("play", sync); v.addEventListener("pause", sync); b.addEventListener("mv-sync", sync); sync();
    if (loopIO) loopIO.observe(v);
  });
}
function mountMotionSlots() {
  if (!SHOW_MOTION_TILES) return;
  document.querySelectorAll(".motion-slot[data-loop]").forEach(slot => {
    const c = LOOPS[slot.dataset.loop]; if (!c) return;
    slot.innerHTML = loopHTML(c, t("loop_" + slot.dataset.loop));
    slot.classList.add("has-loop");
  });
  wireLoops(document);
}
function renderMedallion() {
  const box = document.getElementById("medallion-feature");
  if (!box || !SHOW_MEDALLION_LOOP) return;
  const c = matchMedia("(max-width: 699px)").matches ? MEDALLION.tall : MEDALLION.wide;
  const name = L(MEDALLION.name);
  box.hidden = false;
  box.innerHTML = `
    <div class="feature-media ${c === MEDALLION.tall ? "is-tall" : ""}">${loopHTML(c, `${name} — ${t("img_motion")}`)}</div>
    <div class="feature-copy">
      <p class="eyebrow eyebrow-dark">${t("feat_eyebrow")}</p>
      <div class="sc-title"><h3>${esc(name)}</h3><span class="ph-tag">${t("ph_name")}</span></div>
      <p class="sc-desc">${esc(L(MEDALLION.desc))}</p>
      <ul class="sc-specs">
        <li><span class="spec-dot" aria-hidden="true"></span>${t("metal")}</li>
        <li><span class="spec-dot" aria-hidden="true"></span>${t("engr")}</li>
        <li class="spec-tbd"><span class="spec-dot" aria-hidden="true"></span>${t("size")}</li>
      </ul>
      <p class="sc-price">${t("price")}</p>
      <a class="btn btn-wa" href="${waUrl(productMsg(name))}" target="_blank" rel="noopener" aria-label="${esc(t("card_wa"))} : ${esc(name)}">
        <svg class="btn-icon" aria-hidden="true"><use href="#wa-icon"/></svg><span>${t("card_wa")}<span class="wa-num">${WHATSAPP_DISPLAY}</span></span>
      </a>
      <p class="feature-note"><span class="ph-tag">${t("provisional")}</span></p>
    </div>`;
  wireLoops(box);
}

/* ---------- Hero background clip (SHOW_HERO_CLIP) with visible pause/play ---------- */
let heroVideo = null;
function setupHeroClip() {
  if (!SHOW_HERO_CLIP) return;
  const hero = document.querySelector(".hero"), bg = document.getElementById("hero-bg");
  hero.classList.add("has-clip");
  if (REDUCE) { // reduced motion: poster only
    bg.innerHTML = `<img src="${HERO_CLIP.poster}" alt="" width="${HERO_CLIP.w}" height="${HERO_CLIP.h}" decoding="async">`;
    return;
  }
  bg.innerHTML = `<video autoplay muted loop playsinline preload="metadata" poster="${HERO_CLIP.poster}" width="${HERO_CLIP.w}" height="${HERO_CLIP.h}">
    <source src="${HERO_CLIP.webm}" type="video/webm"><source src="${HERO_CLIP.mp4}" type="video/mp4"></video>`;
  const v = bg.querySelector("video");
  v.muted = true; v.play().catch(() => {});
  heroVideo = v;
  const btn = document.getElementById("hero-toggle");
  btn.hidden = false;
  btn.addEventListener("click", () => { v.paused ? v.play() : v.pause(); });
  v.addEventListener("play", updateHeroToggle); v.addEventListener("pause", updateHeroToggle);
  updateHeroToggle();
}
function updateHeroToggle() {
  const btn = document.getElementById("hero-toggle");
  if (!btn || !heroVideo) return;
  const paused = heroVideo.paused;
  btn.setAttribute("aria-pressed", String(paused));
  btn.classList.toggle("is-paused", paused);
  btn.querySelector(".hero-toggle-label").textContent = paused ? t("hero_play") : t("hero_pause");
  btn.setAttribute("aria-label", (paused ? t("hero_play") : t("hero_pause")) + " — " + t("hero_clip_label"));
}

/* ---------- Floating WhatsApp: hide while a main CTA is visible ---------- */
function setupFloat() {
  const float = document.getElementById("wa-float");
  const targets = [document.getElementById("hero-cta"), document.getElementById("final-cta")].filter(Boolean);
  if (!float || !("IntersectionObserver" in window)) return;
  const vis = new Set();
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? vis.add(e.target) : vis.delete(e.target));
    float.classList.toggle("is-hidden", vis.size > 0);
    float.toggleAttribute("inert", vis.size > 0);
  }, { threshold: 0 });
  targets.forEach(el => io.observe(el));
}

/* Set the widget language before the widget script initialises (both scripts are deferred; this one runs first). */
(function () {
  let l = new URLSearchParams(location.search).get("lang");
  if (!l) { try { l = localStorage.getItem("mv_lang"); } catch (e) {} }
  const prod = document.getElementById("products");
  if (prod) prod.dataset.lang = l === "en" ? "en" : "fr";
})();

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  let lang = params.get("lang");
  if (!lang) { try { lang = localStorage.getItem("mv_lang"); } catch (e) {} }
  setupHeroClip();
  applyLang(lang || DEFAULT_LANG);
  mountMotionSlots();
  document.querySelectorAll(".lang-switch [data-lang]").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  if (INSTAGRAM_URL) {
    document.querySelectorAll(".instagram-link").forEach(a => {
      a.href = INSTAGRAM_URL; a.target = "_blank"; a.rel = "noopener";
      a.classList.remove("is-placeholder"); a.removeAttribute("aria-disabled"); a.querySelector(".ph-tag")?.remove();
    });
  } else {
    document.querySelectorAll(".instagram-link.is-placeholder").forEach(a => a.addEventListener("click", e => e.preventDefault()));
  }
  document.querySelectorAll(".tiktok-link").forEach(a => { a.href = TIKTOK_URL; });
  const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
  setupFloat();

  // QA helper: ?state=wa-open forces the "after play" WhatsApp state on the first product video
  if (params.get("state") === "wa-open") {
    const first = document.querySelector(".video-card");
    if (first) {
      first.classList.add("is-active", "is-playing");
      first.querySelector(".video-wa").hidden = false;
      document.documentElement.style.scrollBehavior = "auto";
      first.querySelector(".video-wa").scrollIntoView({ block: "end" }); window.scrollBy(0, 40);
    }
  }
});
