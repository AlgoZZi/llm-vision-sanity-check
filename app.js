const providers = [
  {
    id: "google",
    name: "Google",
    models: ["Gemini 4 Neon", "Gemini 4 Carbon"],
  },
  {
    id: "openai",
    name: "OpenAI",
    models: ["GPT-6.1 Sol", "GPT-6.2 Sol"],
  },
  {
    id: "anthropic",
    name: "Anthropic",
    models: ["Claude Opus 5.5", "Claude Sonnet 5.5"],
  },
];

const works = [
  // Google · Gemini 4 (Gemini Ultra 账号)
  {
    id: "gemini-rainy-blue-hour-city",
    provider: "google",
    model: "Gemini 4 Carbon",
    file: "雨后蓝调都市街区.html",
    title: "雨后蓝调 · 都市街区",
    description:
      "雨后蓝调时刻的立体都市街区光影漫游，由 Gemini 4 Carbon 创作。",
    hint: "支持鼠标交互视角，需联网加载 Three.js；点击“剧场模式”或“新窗口”可获沉浸观感。",
    note: "Gemini Ultra 账号",
    effort: "XHigh Fast",
    kind: "3D",
  },
  {
    id: "gemini-tengwangge-film",
    provider: "google",
    model: "Gemini 4 Neon",
    file: "滕王阁_落霞与孤鹜齐飞.html",
    title: "滕王阁 · 落霞与孤鹜齐飞",
    description:
      "以二十七镜分镜演绎滕王阁江天落霞的 3D 短片，支持顺序播放、切镜与单镜循环。",
    hint: "内置 27 镜分镜表与播控条，需联网加载 Three.js。",
    note: "Gemini Ultra 账号",
    effort: "High",
    kind: "3D",
  },
  {
    id: "gemini-canton-tower-film",
    provider: "google",
    model: "Gemini 4 Neon",
    file: "珠水纤腰_广州塔三维短片.html",
    title: "珠水纤腰 · 广州塔三维短片",
    description:
      "330 秒、27 镜连贯叙事的广州塔与珠江夜景 3D 电影短片。",
    hint: "支持分镜菜单切换，按 H 可隐藏/显示片内界面；需联网加载 Three.js。",
    note: "Gemini Ultra 账号",
    effort: "High",
    kind: "3D",
  },
  {
    id: "gemini-snowy-onsen-diorama",
    provider: "google",
    model: "Gemini 4 Neon",
    file: "初雪蓝调_山间温泉与索道小站.html",
    title: "初雪蓝调 · 山间温泉与索道小站",
    description:
      "初雪飘落蓝调暮色中的山间温泉旅馆与索道微缩场景。",
    hint: "可拖拽旋转与滚轮缩放视角，需联网加载 Three.js。",
    note: "Gemini Ultra 账号",
    effort: "High",
    kind: "3D",
  },
  {
    id: "gemini-zen-koi-pond",
    provider: "google",
    model: "Gemini 4 Neon",
    file: "枯山水_锦鲤御池.html",
    title: "枯山水 · 锦鲤御池",
    description:
      "禅意幽篁锦鲤水池交互小品，支持晨曦/晴昼/暮秋/月夜四时切换、投饵、戏水与音效。",
    hint: "纯本地 Canvas 渲染无需外链，点击水面可激起涟漪或投喂锦鲤。",
    note: "Gemini Ultra 账号",
    effort: "High",
    kind: "Canvas",
  },

  // OpenAI · GPT-6.1 Sol (含推理强度 Max 作品)
  {
    id: "sol-max-chibi-night",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "赤壁之夜.html",
    title: "赤壁之夜 · 东风起",
    description:
      "火光映江、东风骤起的赤壁水战三维宏大夜景，由 GPT-6.1 Sol（推理强度：Max）生成。",
    hint: "支持三维视角交互，需联网加载 Three.js，推荐开启剧场模式欣赏。",
    effort: "Max",
    kind: "3D",
  },
  {
    id: "sol-max-snow-onsen",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "初雪蓝调温泉微缩景观.html",
    title: "初雪蓝调 · 温泉微缩景观",
    description:
      "雪见之汤，初雪与暖灯交织的蓝调山间温泉微缩景观，由 GPT-6.1 Sol（推理强度：Max）生成。",
    hint: "支持交互观察细节，需联网加载 Three.js。",
    effort: "Max",
    kind: "3D",
  },
  {
    id: "sol-max-autumn-station",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "山霞小站_秋暮微缩.html",
    title: "山霞小站 · 秋暮微缩",
    description:
      "秋日薄暮霞光中的山间铁道小站微缩模型，配有细腻光影与环境声场，由 GPT-6.1 Sol（推理强度：Max）生成。",
    hint: "点击画面可启用环境音频体验，可通过“新窗口”或“剧场模式”全屏浏览。",
    effort: "Max",
    kind: "3D",
  },
  {
    id: "sol-max-mountain-railway",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "秋日半山铁道.html",
    title: "秋日半山铁道 · 黄昏归途",
    description:
      "山吹黄昏，列车穿行红叶半山铁道的微缩光影画卷，由 GPT-6.1 Sol（推理强度：Max）生成。",
    hint: "支持音频与视角漫游，需联网加载 Three.js。",
    effort: "Max",
    kind: "3D",
  },

  // OpenAI · GPT-6.1 Sol
  {
    id: "tengwang-jiangtian-scroll",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "滕王阁_江天长卷_27镜.html",
    title: "滕王阁 · 江天长卷",
    description: "以二十七镜展开滕王阁的江天长卷。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "tengwang-kongziliu",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "滕王阁_空自流.html",
    title: "滕王阁 · 空自流",
    description: "江水悠悠，展开一幅滕王阁的诗意画面。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口”单独欣赏。",
    kind: "3D",
  },
  {
    id: "tengwang-shuitian-guiren",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "滕王阁_水天归人_27镜.html",
    title: "滕王阁 · 水天归人",
    description: "二十七镜串起滕王阁、水天与归人的故事。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "canton-tower-pearl-river",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "广州塔·珠水长歌.html",
    title: "广州塔 · 珠水长歌",
    description: "广州塔与珠江的连续影像。Token：125K。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "hanging-temple-starry-cliff",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "悬空寺·壁上星河.html",
    title: "悬空寺 · 壁上星河",
    description: "以悬空寺为主题的连续影像。Token：264K。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "potala-palace-snowy-golden-halls",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "布达拉宫·雪域金阙.html",
    title: "布达拉宫 · 雪域金阙",
    description: "以布达拉宫为主题的连续影像。Token：228K。",
    hint: "此作品需要联网加载 Three.js，可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "ocean-under-dome-61s-k",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "穹顶下的海洋-6.1s-K.html",
    title: "穹顶下的海洋 · Ⅰ",
    description: "穹顶之下，展现一片海洋景致。",
    hint: "Three.js 已内置，可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "ocean-under-dome",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "穹顶下的海洋.html",
    title: "穹顶下的海洋 · Ⅱ",
    description: "在穹顶之下，走进一片海洋世界。",
    hint: "Three.js 已内置，可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "sunshower-harbor-embankment",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "太阳雨渔港-堤岸.html",
    title: "太阳雨渔港 · 堤岸",
    description: "太阳雨中的小渔港，沿堤岸展开一幅港口景致。",
    hint: "可拖动旋转视角。此作品需要联网加载 Three.js 与 OrbitControls。",
    kind: "3D",
  },
  {
    id: "sunshower-harbor-bay",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "太阳雨渔港-港湾.html",
    title: "太阳雨渔港 · 港湾",
    description: "太阳雨中的小渔港。Token：13M。",
    hint: "可通过“新窗口”获得更大的展示空间。",
    kind: "3D",
  },
  {
    id: "qinshihuang-polar-bear",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "qinshihuang-polar-bear.html",
    title: "秦始皇骑北极熊",
    description: "秦始皇骑着北极熊，在飘雪的画面中出场。",
    hint: "动画会自动播放，可通过“新窗口”获得更大的展示空间。",
    kind: "Canvas",
  },
  {
    id: "giraffe-dark-forest",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "giraffe-dark-forest.svg",
    title: "月光森林骑行手记",
    description: "月光落进森林，长颈鹿的骑行故事慢慢展开。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
    kind: "SVG",
  },
  {
    id: "giraffe-night-ride",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "giraffe-night-ride.svg",
    title: "青岚关夜骑",
    description: "夜色中的青岚关，一段长颈鹿的骑行旅程。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
    kind: "SVG",
  },
  {
    id: "giraffe-yedu-guguan",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "长颈鹿骑行_夜渡古关.svg",
    title: "长颈鹿骑行 · 夜渡古关",
    description: "长颈鹿踏上夜路，骑行穿过古关。",
    hint: "画面按原始比例完整显示，可通过“新窗口”单独欣赏 SVG 作品。",
    kind: "SVG",
  },
  {
    id: "pelican-bicycle",
    provider: "openai",
    model: "GPT-6.1 Sol",
    file: "pelican-bicycle.svg",
    title: "鹈鹕骑自行车",
    description: "一只鹈鹕与一辆自行车，定格成一幅小插画。",
    hint: "这是一幅静态 SVG 插画，可通过“新窗口”单独查看。",
    kind: "SVG",
  },

  // OpenAI · GPT-6.2 Sol
  {
    id: "last-night-watch",
    provider: "openai",
    model: "GPT-6.2 Sol",
    file: "最后的守夜.html",
    title: "最后的守夜",
    description: "一段以“最后的守夜”为题的 Canvas 画面。",
    hint: "可通过“新窗口”获得更大的展示空间。",
    kind: "Canvas",
  },
  {
    id: "axolotl-season-ride",
    provider: "openai",
    model: "GPT-6.2 Sol",
    file: "axolotl-season-ride.html",
    title: "四季骑游",
    description: "跟着美西螈出发，骑过春夏秋冬。",
    hint: "可在作品内切换季节、暂停或重新开始；窄屏下可在作品内滚动。",
    kind: "Canvas",
  },
  {
    id: "beaver-stream",
    provider: "openai",
    model: "GPT-6.2 Sol",
    file: "beaver-stream.html",
    title: "溪畔轻拍",
    description: "溪水、河狸与轻轻荡开的涟漪，一段六秒小动画。",
    hint: "动画会自动循环播放，画面按原始比例适配展示区。",
    kind: "Canvas",
  },
  {
    id: "crane-after-rain",
    provider: "openai",
    model: "GPT-6.2 Sol",
    file: "crane-after-rain.html",
    title: "雨歇 · 青石桥",
    description: "雨后的青石桥边，留下一幅清静的国风画面。",
    hint: "画面在加载时生成，可通过“新窗口”单独欣赏。",
    kind: "Canvas",
  },
  {
    id: "giraffe-night-ride-777E0AEE",
    provider: "openai",
    model: "GPT-6.2 Sol",
    file: "giraffe-night-ride-777E0AEE.svg",
    title: "松门夜渡",
    description: "穿过松林与夜色，继续一场不紧不慢的骑行。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
    kind: "SVG",
  },
  {
    id: "night-pass",
    provider: "openai",
    model: "GPT-6.2 Sol",
    file: "night-pass.svg",
    title: "霜夜过关",
    description: "霜色铺满夜路，长颈鹿骑车穿过关隘。",
    hint: "SVG 动画会自动播放，画面按原始比例完整显示。",
    kind: "SVG",
  },

  // Anthropic · Claude
  {
    id: "shiomi-harbor-sunshower",
    provider: "anthropic",
    model: "Claude Opus 5.5",
    file: "汐見漁港 · 太阳雨.html",
    title: "汐見漁港 · 太阳雨",
    description: "渔港里的太阳雨，由 Claude Opus 5.5（推理强度：Max）生成。",
    hint: "可通过“新窗口”获得更大的展示空间。",
    effort: "Max",
    kind: "3D",
  },
  {
    id: "3d-tihu",
    provider: "anthropic",
    model: "Claude Sonnet 5.5",
    file: "3d-tihu.html",
    title: "鹈鹕骑车 · 3D",
    description: "一只骑着自行车的鹈鹕，在三维场景中前行。",
    hint: "可拖动旋转视角，滚轮缩放。此作品需要联网加载 Three.js。",
    kind: "3D",
  },
  {
    id: "axolotl-ride",
    provider: "anthropic",
    model: "Claude Sonnet 5.5",
    file: "axolotl_ride.html",
    title: "美西螈与机械鹈鹕",
    description: "二八大杠、机械鹈鹕，还有一路变换的四季。",
    hint: "可在作品内切换季节或暂停动画，也可使用数字键和空格键。",
    kind: "Canvas",
  },
];

const providerMap = new Map(providers.map((p) => [p.id, p]));

const el = {
  html: document.documentElement,
  shell: document.querySelector("#app-shell"),
  countPill: document.querySelector("#library-count-pill"),
  crumbProviderText: document.querySelector("#crumb-provider-text"),
  crumbModel: document.querySelector("#crumb-model"),
  crumbNote: document.querySelector("#crumb-note"),
  toggleSidebar: document.querySelector("#toggle-sidebar"),
  sidebarBackdrop: document.querySelector("#sidebar-backdrop"),
  brandHome: document.querySelector("#brand-home"),
  searchInput: document.querySelector("#search-input"),
  searchClear: document.querySelector("#search-clear"),
  providerFilters: document.querySelector("#provider-filters"),
  workList: document.querySelector("#work-list"),
  sidebarEmpty: document.querySelector("#sidebar-empty"),
  resetFiltersBtn: document.querySelector("#reset-filters-btn"),
  workTitle: document.querySelector("#work-title"),
  workIndexBadge: document.querySelector("#work-index-badge"),
  workDesc: document.querySelector("#work-description"),
  workBadges: document.querySelector("#work-badges"),
  previewStage: document.querySelector("#preview-stage"),
  previewContent: document.querySelector("#preview-content"),
  previewMessage: document.querySelector("#preview-message"),
  loaderTitle: document.querySelector("#loader-title"),
  loaderSub: document.querySelector("#loader-sub"),
  workHint: document.querySelector("#work-hint"),
  statusFile: document.querySelector("#status-file"),
  openOriginal: document.querySelector("#open-original"),
  prevBtn: document.querySelector("#prev-work-btn"),
  nextBtn: document.querySelector("#next-work-btn"),
  randomBtn: document.querySelector("#random-work-btn"),
  reloadBtn: document.querySelector("#reload-work-btn"),
  cinemaBtn: document.querySelector("#cinema-mode-btn"),
  themeBtn: document.querySelector("#theme-toggle-btn"),
  cinemaTitle: document.querySelector("#cinema-work-title"),
  cinemaPrev: document.querySelector("#cinema-prev-btn"),
  cinemaNext: document.querySelector("#cinema-next-btn"),
  cinemaOpen: document.querySelector("#cinema-open-btn"),
  cinemaExit: document.querySelector("#cinema-exit-btn"),
  openGalleryBtn: document.querySelector("#open-gallery-btn"),
  galleryModal: document.querySelector("#gallery-modal"),
  modalSearch: document.querySelector("#modal-search-input"),
  modalFilterBar: document.querySelector("#modal-filter-bar"),
  galleryGrid: document.querySelector("#gallery-grid"),
};

const state = {
  currentWorkId: null,
  activeProvider: "all",
  query: "",
  modalProvider: "all",
  modalQuery: "",
  cinemaMode: false,
};

const buttons = new Map();
const modelGroups = new Map();

function isSvg(work) {
  return work.file.toLowerCase().endsWith(".svg");
}

function getWorkIconName(work) {
  if (isSvg(work)) return "ic-vector";
  return work.kind === "3D" ? "ic-cube" : "ic-code";
}

function createSvgIcon(symbolId, className = "ic") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  svg.setAttribute("class", className);
  svg.setAttribute("aria-hidden", "true");
  use.setAttribute("href", `#${symbolId}`);
  svg.append(use);
  return svg;
}

function padNum(n) {
  return String(n).padStart(2, "0");
}

function matchesQuery(work, q) {
  if (!q) return true;
  const hay = [
    work.title,
    work.model,
    work.description,
    work.file,
    work.note || "",
    work.effort || "",
    work.collab || "",
    work.kind || "",
    providerMap.get(work.provider)?.name || "",
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function renderFilterPills(container, selectedValue, onSelect) {
  container.replaceChildren();
  const options = [
    { id: "all", label: "全部", count: works.length },
    ...providers.map((p) => ({
      id: p.id,
      label: p.name,
      count: works.filter((w) => w.provider === p.id).length,
    })),
  ];

  for (const opt of options) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-pill";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(opt.id === selectedValue));
    if (opt.id !== "all") {
      const dot = document.createElement("span");
      dot.className = `pill-dot pill-dot-${opt.id}`;
      btn.append(dot);
    }
    btn.append(document.createTextNode(`${opt.label} ${opt.count}`));
    btn.addEventListener("click", () => onSelect(opt.id));
    container.append(btn);
  }
}

function renderSidebar() {
  el.workList.replaceChildren();
  buttons.clear();
  modelGroups.clear();

  const q = state.query.trim().toLowerCase();
  let matchedTotal = 0;

  for (const provider of providers) {
    if (state.activeProvider !== "all" && state.activeProvider !== provider.id) {
      continue;
    }
    const providerWorks = works.filter(
      (w) => w.provider === provider.id && matchesQuery(w, q)
    );
    if (!providerWorks.length) continue;
    matchedTotal += providerWorks.length;

    const pDetails = document.createElement("details");
    pDetails.className = "provider-group";
    pDetails.open = true;

    const pSummary = document.createElement("summary");
    pSummary.className = "provider-heading";
    const pDot = document.createElement("span");
    pDot.className = `pill-dot pill-dot-${provider.id}`;
    const pLabel = document.createElement("span");
    pLabel.textContent = provider.name;
    const pBadge = document.createElement("span");
    pBadge.className = "group-badge";
    pBadge.textContent = String(providerWorks.length);
    pSummary.append(createSvgIcon("ic-chevron", "ic tree-caret"), pDot, pLabel, pBadge);
    pDetails.append(pSummary);

    const modelsWrap = document.createElement("div");
    modelsWrap.className = "provider-models";

    for (const model of provider.models) {
      const mWorks = providerWorks.filter((w) => w.model === model);
      if (!mWorks.length) continue;

      const mDetails = document.createElement("details");
      mDetails.className = "model-group";
      mDetails.open = true;

      const mSummary = document.createElement("summary");
      mSummary.className = "model-heading";
      const mLabel = document.createElement("span");
      mLabel.textContent = model;
      const mBadge = document.createElement("span");
      mBadge.className = "group-badge";
      mBadge.textContent = String(mWorks.length);
      mSummary.append(createSvgIcon("ic-chevron", "ic tree-caret"), mLabel, mBadge);
      mDetails.append(mSummary);

      const ul = document.createElement("ul");
      ul.className = "model-works";
      modelGroups.set(model, { provider: pDetails, model: mDetails });

      for (const work of mWorks) {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "work-button";
        btn.dataset.workId = work.id;
        btn.title = `${work.title} · ${work.model}`;
        if (work.id === state.currentWorkId) {
          btn.setAttribute("aria-current", "true");
        }

        const textWrap = document.createElement("span");
        textWrap.className = "work-btn-text";

        const nameEl = document.createElement("span");
        nameEl.className = "work-name";
        nameEl.textContent = work.title;
        textWrap.append(nameEl);

        if (work.note || work.effort || work.collab) {
          const tagsRow = document.createElement("span");
          tagsRow.className = "work-sub-tags";
          if (work.note) {
            const t = document.createElement("span");
            t.className = "mini-tag mini-tag-ultra";
            t.textContent = "Ultra";
            tagsRow.append(t);
          }
          if (work.effort) {
            const ef = document.createElement("span");
            ef.className = "mini-tag";
            ef.textContent = work.effort;
            tagsRow.append(ef);
          }
          if (work.collab) {
            const c = document.createElement("span");
            c.className = "mini-tag";
            c.textContent = work.collab;
            tagsRow.append(c);
          }
          textWrap.append(tagsRow);
        }

        btn.append(createSvgIcon(getWorkIconName(work), "ic work-btn-icon"), textWrap);
        btn.addEventListener("click", () => {
          navigateToWork(work.id);
          closeMobileDrawer();
        });

        buttons.set(work.id, btn);
        li.append(btn);
        ul.append(li);
      }

      mDetails.append(ul);
      modelsWrap.append(mDetails);
    }

    pDetails.append(modelsWrap);
    el.workList.append(pDetails);
  }

  el.sidebarEmpty.hidden = matchedTotal > 0;
  el.searchClear.hidden = !state.query;
}

function renderBadges(work) {
  el.workBadges.replaceChildren();

  const modelBadge = document.createElement("span");
  modelBadge.className = "meta-badge meta-badge-model";
  modelBadge.textContent = work.model;
  el.workBadges.append(modelBadge);

  if (work.effort) {
    const effortBadge = document.createElement("span");
    effortBadge.className = "meta-badge meta-badge-effort";
    effortBadge.textContent = `推理强度: ${work.effort}`;
    el.workBadges.append(effortBadge);
  }

  if (work.note) {
    const ultraBadge = document.createElement("span");
    ultraBadge.className = "meta-badge meta-badge-ultra";
    ultraBadge.append(createSvgIcon("ic-spark", "ic ic-xs"), document.createTextNode(work.note));
    el.workBadges.append(ultraBadge);
  }

  if (work.collab) {
    const collabBadge = document.createElement("span");
    collabBadge.className = "meta-badge meta-badge-collab";
    collabBadge.textContent = work.collab;
    el.workBadges.append(collabBadge);
  }

  const fmtBadge = document.createElement("span");
  fmtBadge.className = "meta-badge meta-badge-format";
  fmtBadge.textContent = isSvg(work) ? "SVG" : `${work.kind || "HTML"} · HTML`;
  el.workBadges.append(fmtBadge);
}

function showWork(work, forceReload = false) {
  if (!work) return;
  if (!forceReload && state.currentWorkId === work.id) return;
  state.currentWorkId = work.id;

  const provider = providerMap.get(work.provider);
  el.html.dataset.provider = work.provider;

  const idx = works.indexOf(work) + 1;
  const source = `./works/${encodeURIComponent(work.file)}`;
  const svg = isSvg(work);

  document.title = `${work.title} · 幻境展馆`;
  el.crumbProviderText.textContent = provider ? provider.name : work.provider;
  el.crumbModel.textContent = work.model;
  if (work.note) {
    el.crumbNote.textContent = work.note;
    el.crumbNote.hidden = false;
  } else {
    el.crumbNote.hidden = true;
  }

  el.workTitle.textContent = work.title;
  el.workIndexBadge.textContent = `${padNum(idx)} / ${padNum(works.length)}`;
  el.workDesc.textContent = work.description;
  el.workHint.textContent = work.hint;
  el.statusFile.textContent = work.file;
  el.openOriginal.href = source;
  el.openOriginal.setAttribute("aria-label", `在新窗口打开 ${work.title}`);
  el.cinemaTitle.textContent = `${work.title} · ${work.model}`;
  el.cinemaOpen.href = source;
  renderBadges(work);

  for (const [id, btn] of buttons) {
    if (id === work.id) {
      btn.setAttribute("aria-current", "true");
    } else {
      btn.removeAttribute("aria-current");
    }
  }

  const grp = modelGroups.get(work.model);
  if (grp) {
    grp.provider.open = true;
    grp.model.open = true;
  }
  requestAnimationFrame(() => {
    const activeBtn = buttons.get(work.id);
    if (activeBtn && state.currentWorkId === work.id) {
      activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  });

  el.previewStage.setAttribute("aria-busy", "true");
  el.loaderTitle.textContent = `正在载入「${work.title}」`;
  el.loaderSub.textContent = `${work.model}${work.note ? ` · ${work.note}` : ""}`;
  el.previewMessage.hidden = false;

  const artwork = document.createElement(svg ? "img" : "iframe");
  artwork.className = "artwork";

  if (svg) {
    artwork.alt = `${work.title}，由 ${work.model} 生成`;
  } else {
    artwork.title = `${work.title} · ${work.model}`;
    artwork.setAttribute("sandbox", "allow-scripts allow-pointer-lock");
    artwork.setAttribute("allow", "fullscreen; autoplay");
    artwork.setAttribute("referrerpolicy", "no-referrer");
  }

  artwork.addEventListener("load", () => {
    if (state.currentWorkId !== work.id) return;
    el.previewStage.setAttribute("aria-busy", "false");
    el.previewMessage.hidden = true;
    artwork.classList.add("is-ready");
  });

  artwork.addEventListener("error", () => {
    if (state.currentWorkId !== work.id) return;
    el.previewStage.setAttribute("aria-busy", "false");
    el.loaderTitle.textContent = "作品加载失败";
    el.loaderSub.textContent = "请点击重载，或通过右上角“新窗口”直接打开。";
    el.previewMessage.hidden = false;
  });

  artwork.src = forceReload ? `${source}?t=${Date.now()}` : source;
  el.previewContent.replaceChildren(artwork);
}

function navigateToWork(workId) {
  if (window.location.hash === `#${workId}`) {
    const work = works.find((w) => w.id === workId);
    showWork(work);
  } else {
    window.location.hash = workId;
  }
}

function stepWork(delta) {
  const idx = works.findIndex((w) => w.id === state.currentWorkId);
  const nextIdx = (idx + delta + works.length) % works.length;
  navigateToWork(works[nextIdx].id);
}

function randomWork() {
  if (works.length <= 1) return;
  let pick = works[Math.floor(Math.random() * works.length)];
  while (pick.id === state.currentWorkId) {
    pick = works[Math.floor(Math.random() * works.length)];
  }
  navigateToWork(pick.id);
}

function setCinemaMode(enabled) {
  state.cinemaMode = enabled;
  el.shell.classList.toggle("cinema-mode", enabled);
  el.cinemaBtn.setAttribute("aria-pressed", String(enabled));
}

function toggleTheme() {
  const next = el.html.dataset.theme === "dark" ? "light" : "dark";
  el.html.dataset.theme = next;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = next === "dark" ? "#070a12" : "#eef4fa";
  try {
    localStorage.setItem("llm-vision-theme", next);
  } catch {
    // ignore storage restriction
  }
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 820px)").matches;
}

function closeMobileDrawer() {
  el.shell.classList.remove("mobile-drawer-open");
  el.sidebarBackdrop.hidden = true;
}

function toggleSidebar() {
  if (isMobileViewport()) {
    const open = !el.shell.classList.contains("mobile-drawer-open");
    el.shell.classList.toggle("mobile-drawer-open", open);
    el.sidebarBackdrop.hidden = !open;
    el.toggleSidebar.setAttribute("aria-expanded", String(open));
  } else {
    const collapsed = el.shell.classList.toggle("sidebar-collapsed");
    el.toggleSidebar.setAttribute("aria-expanded", String(!collapsed));
  }
}

function renderGalleryModal() {
  renderFilterPills(el.modalFilterBar, state.modalProvider, (pid) => {
    state.modalProvider = pid;
    renderGalleryModal();
  });

  const q = state.modalQuery.trim().toLowerCase();
  const filtered = works.filter((w) => {
    if (state.modalProvider !== "all" && w.provider !== state.modalProvider) return false;
    return matchesQuery(w, q);
  });

  el.galleryGrid.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.style.cssText = "grid-column: 1 / -1; text-align:center; color: var(--text-muted); padding: 40px 0;";
    empty.textContent = "没有找到符合条件的馆藏作品";
    el.galleryGrid.append(empty);
    return;
  }

  for (const work of filtered) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `gallery-card${work.id === state.currentWorkId ? " is-current" : ""}`;
    card.dataset.provider = work.provider;

    const top = document.createElement("div");
    top.className = "card-top";
    const m = document.createElement("span");
    m.className = "card-model";
    m.textContent = work.model;
    const num = document.createElement("span");
    num.className = "card-num";
    num.textContent = `#${padNum(works.indexOf(work) + 1)}`;
    top.append(m, num);

    const h3 = document.createElement("h3");
    h3.className = "card-title";
    h3.textContent = work.title;

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = work.description;

    const tags = document.createElement("div");
    tags.className = "card-tags";

    const fmt = document.createElement("span");
    fmt.className = "card-tag";
    fmt.textContent = isSvg(work) ? "SVG" : work.kind || "HTML";
    tags.append(fmt);

    if (work.effort) {
      const eTag = document.createElement("span");
      eTag.className = "card-tag";
      eTag.textContent = `推理强度: ${work.effort}`;
      tags.append(eTag);
    }

    if (work.note) {
      const noteTag = document.createElement("span");
      noteTag.className = "card-tag card-tag-ultra";
      noteTag.textContent = work.note;
      tags.append(noteTag);
    }

    if (work.collab) {
      const cTag = document.createElement("span");
      cTag.className = "card-tag";
      cTag.textContent = work.collab;
      tags.append(cTag);
    }

    card.append(top, h3, desc, tags);
    card.addEventListener("click", () => {
      closeGalleryModal();
      navigateToWork(work.id);
    });
    el.galleryGrid.append(card);
  }
}

function openGalleryModal() {
  state.modalProvider = "all";
  state.modalQuery = "";
  el.modalSearch.value = "";
  renderGalleryModal();
  el.galleryModal.hidden = false;
  requestAnimationFrame(() => el.modalSearch.focus());
}

function closeGalleryModal() {
  el.galleryModal.hidden = true;
}

function showWorkFromHash() {
  let id = "";
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    id = "";
  }
  const work = works.find((w) => w.id === id) || works[0];
  showWork(work);
}

function bindEvents() {
  el.toggleSidebar.addEventListener("click", toggleSidebar);
  el.sidebarBackdrop.addEventListener("click", closeMobileDrawer);
  el.brandHome.addEventListener("click", (e) => {
    e.preventDefault();
    navigateToWork(works[0].id);
  });

  el.searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    renderSidebar();
  });

  el.searchClear.addEventListener("click", () => {
    state.query = "";
    el.searchInput.value = "";
    renderSidebar();
    el.searchInput.focus();
  });

  el.resetFiltersBtn.addEventListener("click", () => {
    state.query = "";
    state.activeProvider = "all";
    el.searchInput.value = "";
    renderFilterPills(el.providerFilters, state.activeProvider, handleProviderFilter);
    renderSidebar();
  });

  el.prevBtn.addEventListener("click", () => stepWork(-1));
  el.nextBtn.addEventListener("click", () => stepWork(1));
  el.cinemaPrev.addEventListener("click", () => stepWork(-1));
  el.cinemaNext.addEventListener("click", () => stepWork(1));
  el.randomBtn.addEventListener("click", randomWork);
  el.reloadBtn.addEventListener("click", () => {
    const cur = works.find((w) => w.id === state.currentWorkId);
    showWork(cur, true);
  });

  el.cinemaBtn.addEventListener("click", () => setCinemaMode(!state.cinemaMode));
  el.cinemaExit.addEventListener("click", () => setCinemaMode(false));
  el.themeBtn.addEventListener("click", toggleTheme);

  el.openGalleryBtn.addEventListener("click", openGalleryModal);
  el.galleryModal.querySelectorAll("[data-close-gallery]").forEach((node) => {
    node.addEventListener("click", closeGalleryModal);
  });
  el.modalSearch.addEventListener("input", (e) => {
    state.modalQuery = e.target.value;
    renderGalleryModal();
  });

  window.addEventListener("hashchange", showWorkFromHash);

  window.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName;
    const typing = tag === "INPUT" || tag === "TEXTAREA";

    if (e.key === "Escape") {
      if (!el.galleryModal.hidden) {
        closeGalleryModal();
        return;
      }
      if (state.cinemaMode) {
        setCinemaMode(false);
        return;
      }
      closeMobileDrawer();
      return;
    }

    if (typing) return;

    if (e.key === "/") {
      e.preventDefault();
      if (el.shell.classList.contains("sidebar-collapsed")) toggleSidebar();
      el.searchInput.focus();
    } else if (e.key === "ArrowLeft") {
      stepWork(-1);
    } else if (e.key === "ArrowRight") {
      stepWork(1);
    } else if (e.key === "f" || e.key === "F") {
      setCinemaMode(!state.cinemaMode);
    } else if (e.key === "g" || e.key === "G") {
      el.galleryModal.hidden ? openGalleryModal() : closeGalleryModal();
    } else if (e.key === "b" || e.key === "B") {
      toggleSidebar();
    } else if (e.key === "r" || e.key === "R") {
      randomWork();
    }
  });
}

function handleProviderFilter(pid) {
  state.activeProvider = pid;
  renderFilterPills(el.providerFilters, state.activeProvider, handleProviderFilter);
  renderSidebar();
}

function init() {
  try {
    const savedTheme = localStorage.getItem("llm-vision-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      el.html.dataset.theme = savedTheme;
    }
  } catch {
    // ignore
  }

  el.countPill.textContent = `${works.length} 件馆藏`;
  renderFilterPills(el.providerFilters, state.activeProvider, handleProviderFilter);
  renderSidebar();
  bindEvents();
  showWorkFromHash();
}

init();
